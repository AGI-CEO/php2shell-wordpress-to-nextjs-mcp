#!/usr/bin/env node
/**
 * Paladin Front Remote MCP Stdio Bridge
 * Zero-dependency stdio-to-HTTP proxy connecting desktop MCP clients
 * (Cursor, Claude Desktop) to https://paladinfront.com/api/mcp.
 *
 * Strict stream discipline:
 * - STDOUT is reserved exclusively for valid JSON-RPC 2.0 messages followed by \n.
 * - STDERR is used for all operational diagnostics, errors, and connection logs.
 */
import readline from "node:readline";
import process from "node:process";

const MCP_ENDPOINT =
  process.env.PALADIN_MCP_URL ||
  process.env.PALADIN_MCP_ENDPOINT ||
  "https://paladinfront.com/api/mcp";

const rl = readline.createInterface({
  input: process.stdin,
  crlfDelay: Infinity,
});

rl.on("line", async (line) => {
  const trimmed = line.trim();
  if (!trimmed) return;

  let request;
  try {
    request = JSON.parse(trimmed);
  } catch (err) {
    const parseError = {
      jsonrpc: "2.0",
      id: null,
      error: {
        code: -32700,
        message: `Parse error: ${err instanceof Error ? err.message : String(err)}`,
      },
    };
    process.stdout.write(JSON.stringify(parseError) + "\n");
    return;
  }

  const isNotification = !("id" in request) || request.id === undefined;

  try {
    const res = await fetch(MCP_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "User-Agent": "paladin-php-rescue-stdio-bridge/1.0.0",
      },
      body: JSON.stringify(request),
    });

    if (res.status === 204 || isNotification) {
      return;
    }

    if (!res.ok) {
      const errText = await res.text().catch(() => "");
      process.stderr.write(
        `[paladin-stdio-bridge] HTTP ${res.status}: ${errText}\n`
      );
      process.stdout.write(
        JSON.stringify({
          jsonrpc: "2.0",
          id: request.id,
          error: {
            code: -32603,
            message: `Remote server returned HTTP ${res.status}: ${res.statusText || "Error"}`,
          },
        }) + "\n"
      );
      return;
    }

    const data = await res.json();
    process.stdout.write(JSON.stringify(data) + "\n");
  } catch (err) {
    const errMsg = err instanceof Error ? err.message : String(err);
    process.stderr.write(
      `[paladin-stdio-bridge] Error forwarding ${request.method || "request"}: ${errMsg}\n`
    );
    if (!isNotification) {
      process.stdout.write(
        JSON.stringify({
          jsonrpc: "2.0",
          id: request.id,
          error: {
            code: -32603,
            message: `Bridge failed to connect to ${MCP_ENDPOINT}: ${errMsg}`,
          },
        }) + "\n"
      );
    }
  }
});

process.on("SIGINT", () => process.exit(0));
process.on("SIGTERM", () => process.exit(0));

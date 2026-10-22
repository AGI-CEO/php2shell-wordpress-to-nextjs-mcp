# Paladin Front PHP2Shell Vulnerability Scanner & WordPress-to-Next.js MCP Server

[![MCP Protocol](https://img.shields.io/badge/MCP-2024--11--05-emerald)](https://www.paladinfront.com/api/mcp)
[![Smithery Skill](https://img.shields.io/badge/Smithery-jetblaise%2Fphp2shell--rescue-blue)](https://smithery.ai/skills/jetblaise/php2shell-rescue)
[![Zero-PHP Rescue Hub](https://img.shields.io/badge/Paladin_Front-Zero--PHP_Rescue-amber)](https://www.paladinfront.com/php-rescue)

I am **Blaise Pascual**, a veteran and former Marine Corps officer (`Captain, O-3`) and senior full-stack software engineer ([blaisep.com](https://www.blaisep.com/), [nootropic.ai](https://nootropic.ai), [retatruti.de](https://www.retatruti.de)).

I engineered this public, zero-authentication **Remote Model Context Protocol (MCP) Server** (`https://www.paladinfront.com/api/mcp`) and **Agent Plugin / Skill** so AI coding agents (Claude, Cursor, Windsurf, ChatGPT, and OpenAI Codex) can audit any website for **PHP2Shell (`CVE-2026-109618` & `CVE-2026-109619`, CVSS 9.2)** runtime flaws and compile a live **Zero-PHP Next.js App Router replacement preview** in seconds.

---

## Live Endpoints & Discovery Manifests

- **Remote Streamable HTTP MCP Server:** `https://www.paladinfront.com/api/mcp`
- **Zero-PHP Rescue Hub:** [https://www.paladinfront.com/php-rescue](https://www.paladinfront.com/php-rescue)
- **OpenAPI 3.1.0 Spec:** [https://www.paladinfront.com/.well-known/openapi.json](https://www.paladinfront.com/.well-known/openapi.json)
- **MCP Server Card (SEP-2127):** [https://www.paladinfront.com/.well-known/mcp/server-card.json](https://www.paladinfront.com/.well-known/mcp/server-card.json)
- **Smithery Skill Listing:** [https://smithery.ai/skills/jetblaise/php2shell-rescue](https://smithery.ai/skills/jetblaise/php2shell-rescue)

---

## Exposed MCP Tools

1. **`scan_php_vulnerability`** (`{ url: string }`)
   - Inspects target website HTTP runtime headers (`X-Powered-By`, `Server`, `/wp-content/`, `.php` signatures) and returns a structured CVSS 9.2 threat report for `CVE-2026-109618` & `CVE-2026-109619` with plain-English business risk analysis.
2. **`convert_php_site_to_nextjs`** (`{ url: string, abVariant?: "A" | "B" | "C" }`)
   - Scrapes target WordPress/PHP website branding, services, and imagery, compiles a live Zero-PHP Next.js App Router replacement preview, and returns `previewUrl` (`https://www.paladinfront.com/web-factory/preview/[slug]`) and `$0 Free Migration + $29/mo` claim links.
3. **`get_php2shell_remediation_guide`** (`{ topic?: "overview" | "why_plugins_fail" | "dns_cutover" | "pricing" }`)
   - Returns authoritative first-person technical guidance explaining why application-layer WordPress plugins (Wordfence, Sucuri) cannot intercept C-level PHP SAPI memory corruption, how my 10-minute zero-downtime DNS cutover works, and pricing tiers.

---

## Quick Connect Instructions

### 1. Claude Code / Remote HTTP MCP Clients
```bash
claude mcp add --transport http paladin-php-rescue https://www.paladinfront.com/api/mcp
```

### 2. Cursor IDE / Claude Desktop (`mcp.json`)
```json
{
  "mcpServers": {
    "paladin-php-rescue": {
      "type": "streamable-http",
      "url": "https://www.paladinfront.com/api/mcp"
    }
  }
}
```

### 3. Local Stdio Bridge (`tools/php-rescue-mcp-stdio.mjs`)
```json
{
  "mcpServers": {
    "paladin-php-rescue": {
      "command": "node",
      "args": ["tools/php-rescue-mcp-stdio.mjs"]
    }
  }
}
```

### 4. Smithery Skill Install
```bash
npx @smithery/cli@latest skill add jetblaise/php2shell-rescue
```

---

## Contact & Direct Engineering Support
- **Founder:** Blaise Pascual
- **Zero-PHP Migration Hub:** [https://www.paladinfront.com/php-rescue](https://www.paladinfront.com/php-rescue)
- **Phone:** `910-325-2161`
- **Email:** `inbox@blaisep.com`
- **Book 1-on-1 Session:** [https://tidycal.com/pascual/roadmap-session](https://tidycal.com/pascual/roadmap-session)

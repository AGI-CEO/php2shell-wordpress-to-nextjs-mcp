# Forensic Reference: CVE-2026-109618 & CVE-2026-109619 (PHP2Shell)

- **CVE Identifiers:** `CVE-2026-109618` (CGI/FastCGI parameter injection) & `CVE-2026-109619` (PHP-FPM stream buffer overflow)
- **Severity:** CVSS 9.2 (Critical — Unauthenticated Remote Code Execution)
- **Why WordPress Plugins Cannot Block It:**
  1. TCP TLS handshake completes at the web server (`nginx` / `Apache`).
  2. HTTP headers and query parameters are parsed into `fastcgi_params` or `mod_php` environment variables.
  3. The C-level PHP SAPI (`php-fpm` / `libphp.so`) initializes the request environment **before** executing any `.php` script.
  4. `CVE-2026-109618` triggers during SAPI initialization at Step 3—before `index.php`, `wp-config.php`, or application-layer plugins like Wordfence or Sucuri are ever loaded into memory.
- **Permanent Architectural Fix:** Replace the server-side PHP interpreter with pre-compiled static/edge Next.js App Router assets (`https://paladinfront.com/php-rescue`).

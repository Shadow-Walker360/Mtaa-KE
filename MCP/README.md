# Mtaa KE — MCP Server

Exposes the Mtaa KE landing page demo as an MCP resource/tool.
The UI itself is plain HTML/CSS/JS — no React, no build step, no framework.
This server just wraps that file behind the Model Context Protocol.

## What's inside

- `public/index.html` — the actual demo (identical to the standalone file).
- `server.js` — an MCP server (stdio transport) exposing:
  - `show_mtaa_landing` — returns the page as a `text/html` UI resource for hosts that render inline widgets.
  - `get_mtaa_landing_source` — returns the raw HTML/CSS/JS as text (for hosts that just want the source).
- Resource `ui://mtaa-ke/landing` — the page, fetchable directly by URI.

## Run it

```bash
npm install
npm start
```

This starts the server on stdio — it's meant to be launched by an MCP host, not run standalone in a terminal.

## Connect it to an MCP host

Most desktop MCP hosts (Claude Desktop, etc.) take a config block like this:

```json
{
  "mcpServers": {
    "mtaa-ke-demo": {
      "command": "node",
      "args": ["/absolute/path/to/mtaa-ke-mcp/server.js"]
    }
  }
}
```

Point `args` at wherever you unzip this folder, then restart the host. It should show up as a connector with two tools.

## Editing the demo

Just edit `public/index.html` directly — it's the same self-contained file as before (inline `<style>` and `<script>`, no separate assets, no bundler). The server re-reads it from disk on every tool call, so changes show up on the next call without restarting.

## Why stdio + resource, not a web server

Keeping this as a stdio MCP server (rather than spinning up an HTTP server) means it has no network surface of its own — it only talks to whatever MCP host launches it, over stdin/stdout. The actual rendering (iframe/sandbox) is the host's job; this server's only responsibility is handing over the HTML.

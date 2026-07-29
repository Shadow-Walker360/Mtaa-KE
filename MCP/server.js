#!/usr/bin/env node
// Mtaa KE — MCP server
//
// Exposes the Mtaa KE landing page demo (pure HTML/CSS/JS, no framework)
// as an MCP UI resource, plus a tool that renders it in any MCP host that
// understands the "text/html" resource convention used by MCP-UI-style
// clients (rendered in a sandboxed iframe by the host, not by this server).

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { z } from "zod";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const HTML_PATH = path.join(__dirname, "public", "index.html");
const UI_URI = "ui://mtaa-ke/landing";

function loadHtml() {
  return readFileSync(HTML_PATH, "utf-8");
}

const server = new McpServer({
  name: "mtaa-ke-demo",
  version: "1.0.0",
});

// Register the HTML/CSS/JS page as a readable resource.
server.registerResource(
  "mtaa-ke-landing",
  UI_URI,
  {
    title: "Mtaa KE Landing Page",
    description: "The Mtaa KE property platform landing page demo — single-file HTML/CSS/JS, no build step.",
    mimeType: "text/html",
  },
  async (uri) => ({
    contents: [
      {
        uri: uri.href,
        mimeType: "text/html",
        text: loadHtml(),
      },
    ],
  })
);

// A tool the host/model can call to render the page inline.
server.registerTool(
  "show_mtaa_landing",
  {
    title: "Show Mtaa KE landing page",
    description:
      "Renders the Mtaa KE property platform landing page demo (the Digital Property Passport concept) as an inline HTML/CSS/JS widget.",
    inputSchema: {},
  },
  async () => {
    const html = loadHtml();
    return {
      content: [
        {
          type: "text",
          text: "Here is the Mtaa KE landing page demo.",
        },
        {
          type: "resource",
          resource: {
            uri: UI_URI,
            mimeType: "text/html",
            text: html,
          },
        },
      ],
    };
  }
);

// A second tool: return the raw source, useful for hosts that don't render
// HTML resources and just want the file (e.g. to save it locally).
server.registerTool(
  "get_mtaa_landing_source",
  {
    title: "Get Mtaa KE landing page source",
    description: "Returns the raw HTML/CSS/JS source of the Mtaa KE landing page demo as text.",
    inputSchema: {},
  },
  async () => ({
    content: [{ type: "text", text: loadHtml() }],
  })
);

const transport = new StdioServerTransport();
await server.connect(transport);

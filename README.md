# AI-powered Voicebot

AI-powered Interview Voice Bot using Web Speech API and client-side JavaScript.

## Overview

This project demonstrates a simple voice-driven interview simulator. It captures user speech, sends/receives text to an LLM (optional), and plays back responses.

## Files

- `index.html` — user interface
- `styles.css` — styles
- `app.js` — main client logic
- `Voice Bot Walkthrough.md` — setup and architecture notes
- `Voice Bot Implementation Plan.md` — implementation plan and ideas

## Prerequisites

- A modern browser with Web Speech API support (Chrome or Edge recommended).
- Optional: Ollama or another local LLM server if you want on-device model access (see `Voice Bot Walkthrough.md`).

## Quick start

1. Serve the project directory (recommended) or open `index.html` directly.

Using a simple Python HTTP server:

```bash
cd /Users/adityagupta/Desktop/voicebot
python3 -m http.server 8000
# then open http://localhost:8000 in your browser
```

2. Allow microphone access when the page asks.
3. Follow the on-screen prompts to begin the voice interview.

## Notes

- If you want AI-driven responses via a local LLM (Ollama), ensure the model and server are running and consult `Voice Bot Walkthrough.md` for configuration examples.
- This is a client-side demo; no server component is required unless you integrate a remote LLM API.

## License

Add a license if you plan to publish this project (MIT is a common choice).

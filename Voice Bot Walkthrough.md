Voice Bot Walkthrough
I have built the "Antigravity" Voice Bot web application. This application allows you to converse with an AI agent using your voice.

Features
Voice Interaction: Uses the Web Speech API for Speech-to-Text and Text-to-Speech.
Antigravity Persona: The bot is prompted to be a helpful, agentic coding assistant from Google Deepmind.
Visualizer: A dynamic audio visualizer that reacts when listening.
Secure: Your OpenAI API key is stored locally in your browser session and never sent to a backend server (other than OpenAI).
how to Run
Serve the files: You need to run a local web server to serve the files (Web Speech API often requires a served context, not just file://).
If you have Python installed: python3 -m http.server
If you have Node.js: npx http-server .
Open in Browser: Navigate to the URL provided by the server (usually http://localhost:8000 or http://localhost:8080).
Enter API Key: You will see an input field for your OpenAI API Key. Enter it there.
Click Microphone: Click the large microphone button to start speaking.
Verification Steps
Please perform the following tests to verify the bot works as expected:

Life Story: Ask "What is your life story in a few sentences?"
Expected: It should mention being from Google Deepmind and working on Advanced Agentic Coding.
Superpower: Ask "What is your #1 superpower?"
Expected: It should mention coding capabilities and tool use.
Misconception: Ask "What misconception do your coworkers have about you?"
Expected: It might mention people thinking it's just a chatbot, not an agent.
Growth: Ask "What are the top 3 areas you’d like to grow in?"
Expected: It should give a thoughtful answer about learning new frameworks, languages, etc.
Troubleshooting
Microphone Permission: Ensure you have allowed microphone access in your browser.
API Key: Ensure your OpenAI API key is valid and has credits.
Browser Support: This app is optimized for Google Chrome or Safari (browsers with Web Speech API support).
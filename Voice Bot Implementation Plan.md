Voice Bot Implementation Plan
Goal Description
Create a voice-enabled chatbot that adopts the "Antigravity" persona. The bot will listen to user questions via the microphone, process them using an LLM (OpenAI API), and respond using text-to-speech.

User Review Required
IMPORTANT

The application will require an OpenAI API Key to function. This will be entered in the UI by the user. Browser permissions for Microphone usage will be required.

Proposed Changes
[Web Application]
[NEW] 

index.html
Main user interface containing:
API Key input field.
"Start Listening" button.
Transcript display (User & AI).
Styling for a modern, "Antigravity" aesthetic (dark mode, sleek).
[NEW] 

app.js
Speech Recognition: Initialize window.SpeechRecognition or window.webkitSpeechRecognition.
Speech Synthesis: Initialize window.speechSynthesis with a suitable voice.
LLM Logic: Function to call OpenAI API v1/chat/completions.
System Prompt: Define the "Antigravity" persona (Google Deepmind origin, agentic capabilities, etc.).
[NEW] 

styles.css
Dark themed, premium UI styles.
Verification Plan
Manual Verification
Setup: Open the index.html using a local server (e.g., npx http-server).
Command: npx http-server .
API Key: Enter a valid OpenAI API Key.
Interaction:
Click "Start Listening".
Ask: "What is your life story using only two sentences?"
Verify:
Text appears in transcript.
Bot responds with audio (TTS) and text.
Response content matches the "Antigravity" persona (mentions Google Deepmind).
Persona Check:
Ask: "What is your #1 superpower?" -> Expect answer about coding/agency
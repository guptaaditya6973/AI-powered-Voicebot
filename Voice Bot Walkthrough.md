Voice Bot Walkthrough

I have built an AI-powered Interview Voice Bot that enables users to conduct voice-based interview practice. The application captures spoken questions through the microphone, generates personalized responses using Generative AI (Llama 3 via Ollama), and speaks the responses back using the browser's Text-to-Speech engine.

Features
Voice Interaction: Uses the Web Speech API for Speech-to-Text and Text-to-Speech.
Generative AI: Integrates with Ollama (Llama 3) to generate intelligent interview responses.
Personalized Interview Persona: Responds as Aditya Gupta, using predefined interview answers for common HR and behavioral questions.
Interactive UI: Displays conversation history with real-time status updates (Listening, Processing, Thinking, Ready).
Voice Visualizer: Animated audio visualizer while the microphone is active.
Local AI Processing: Communicates with the locally running Ollama server without requiring any cloud API key.
How to Run
1. Install Ollama

Download and install Ollama from:

https://ollama.com

2. Download the Llama 3 Model
ollama pull llama3
3. Start the Ollama Server
ollama serve

The application communicates with:

http://localhost:11434
4. Open the Application

Simply open index.html in Google Chrome or Microsoft Edge.

Note: No OpenAI API key is required.

5. Start the Conversation
Click the microphone button.
Allow microphone access when prompted.
Ask your interview questions.
Listen to the AI-generated response.
Verification Steps

Perform the following tests to verify the application:

Tell Me About Yourself

Ask:

"Tell me about yourself."

Expected:

The bot introduces itself as Aditya Gupta, mentioning:

IIT (ISM) Dhanbad
Mathematics and Computing
Axtria Internship
Lead Tracker Project
Core Computer Science subjects
Biggest Strength

Ask:

"What is your biggest strength?"

Expected:

The bot explains its structured problem-solving approach and analytical thinking.

Areas of Improvement

Ask:

"Where do you want to improve?"

Expected:

The bot discusses improving:

End-to-end system understanding
Business storytelling
System design skills
Challenge Yourself

Ask:

"How do you push your limits?"

Expected:

The bot explains learning by taking ownership of challenging problems and continuously improving through iteration.

Troubleshooting
Microphone Permission

Ensure microphone access is allowed in your browser settings.

Ollama Not Running

If the application displays:

"Local AI is not running. Please start Ollama."

Start the server using:

ollama serve
Llama 3 Model Missing

If the model has not been downloaded, run:

ollama pull llama3
Browser Support

The application is optimized for:

Google Chrome
Microsoft Edge

These browsers provide the best support for the Web Speech API.

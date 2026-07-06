# AI-Powered Interview Voice Bot

## Overview

The AI-Powered Interview Voice Bot is a browser-based application that simulates real interview conversations using voice interaction. It leverages **Generative AI (Llama 3 via Ollama)** to answer interview questions in real time, allowing users to practice HR and technical interviews naturally through speech.

The application combines **Speech Recognition**, **Large Language Models (LLMs)**, and **Text-to-Speech** technologies to deliver an interactive interview experience without relying on cloud-based AI services.

---

## Features

- 🎤 Voice-based interaction using the Web Speech API
- 🤖 Generative AI powered by **Llama 3** through **Ollama**
- 🗣️ Text-to-Speech for AI-generated responses
- 💬 Real-time conversation transcript
- 🎯 Personalized interview persona with predefined HR responses
- 📊 Animated voice visualizer during speech recognition
- 🌙 Modern responsive dark-themed interface
- 🔒 Runs entirely on your local machine using Ollama

---

## Tech Stack

- HTML5
- CSS3
- JavaScript 
- Web Speech API
- Ollama
- Llama 3 (Generative AI)

---

## How It Works

1. The user clicks the microphone button.
2. The browser captures the user's speech using the Web Speech API.
3. The speech is converted into text.
4. The text is sent to the locally running Ollama server.
5. Llama 3 generates an interview response.
6. The response is displayed in the transcript.
7. The browser reads the response aloud using Text-to-Speech.

---

## Prerequisites

Before running the application, ensure you have:

- Google Chrome or Microsoft Edge
- Ollama installed
- Llama 3 downloaded

Download the model:

```bash
ollama pull llama3
```

Start Ollama:

```bash
ollama serve
```

---

## Running the Project

1. Clone the repository.

2. Open the project folder.

3. Ensure Ollama is running.

4. Open `index.html` in your browser.

5. Allow microphone access.

6. Start asking interview questions.

---

## Sample Questions

- Tell me about yourself.
- What are your strengths?
- Why should we hire you?
- Describe your internship experience.
- What are your career goals?
- Where do you see yourself in five years?

---

## Future Enhancements

- Resume upload support
- Multiple interview modes
- Conversation history
- Voice customization
- Multi-language support
- Cloud LLM integration
- Performance analytics and feedback

---

## Author

**Aditya Gupta**

Integrated M.Tech – Mathematics and Computing  
IIT (ISM) Dhanbad

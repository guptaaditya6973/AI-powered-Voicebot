# AI-Powered Voice Bot

An AI-powered Voice Bot that enables users to practice HR and technical interviews through natural voice conversations. The application uses **Generative AI (Llama 3 via Ollama)** to generate personalized interview responses and the **Web Speech API** for speech recognition and text-to-speech.

---

## 🚀 Features

- 🎤 Voice-based interview interaction
- 🤖 Generative AI powered by **Llama 3** via **Ollama**
- 🗣️ Speech-to-Text using the Web Speech API
- 🔊 Text-to-Speech for AI-generated responses
- 💬 Real-time conversation transcript
- 👤 Personalized interview persona with predefined HR responses
- 📊 Animated voice visualizer
- 🌙 Modern dark-themed responsive interface
- 🔒 Runs locally without requiring cloud AI services

---

## 🛠️ Tech Stack

- HTML5
- CSS3
- JavaScript (ES6)
- Web Speech API
- Ollama
- Llama 3 (Generative AI)

---

## 📂 Project Structure

```
Interview-Voice-Bot/
│── index.html
│── styles.css
│── app.js
│── README.md
```

---

## ⚙️ How It Works

1. The user clicks the microphone button.
2. Speech is captured using the **Web Speech API**.
3. The spoken words are converted into text.
4. The text is sent to the locally running **Ollama** server.
5. **Llama 3** generates an interview response.
6. The response is displayed in the transcript.
7. The browser reads the response aloud using Text-to-Speech.

---

## 📋 Prerequisites

Before running the application, install **Ollama**.

Download it from:

https://ollama.com

Then download the Llama 3 model:

```bash
ollama pull llama3
```

Start the Ollama server:

```bash
ollama serve
```

The application communicates with:

```
http://localhost:11434
```

---

## ▶️ Running the Project

1. Clone the repository.

2. Navigate to the project directory.

3. Start the Ollama server.

4. Open **index.html** in **Google Chrome** or **Microsoft Edge**.

5. Allow microphone access when prompted.

6. Click the microphone button and begin your interview practice.

---

## 💡 Sample Questions

- Tell me about yourself.
- What are your strengths?
- Why should we hire you?
- Explain your internship experience.
- What are your career goals?
- Describe a challenging project you've worked on.
- Where do you see yourself in five years?

---

## ✨ Key Highlights

- Uses **Generative AI** for intelligent interview responses.
- Supports real-time voice conversations.
- Provides predefined responses for common HR interview questions.
- Works entirely on the local machine using **Ollama**, ensuring privacy and eliminating the need for external AI APIs.
- Simple, lightweight, and easy to customize for different interview scenarios.

---

## 🔮 Future Enhancements

- Resume upload support
- Multiple interview modes
- Technical coding interview mode
- Conversation history
- Voice customization
- Multi-language support
- Cloud LLM integration (OpenAI/Gemini/Claude)
- Interview performance analytics and feedback

---

## 👨‍💻 Author

**Aditya Gupta**

Integrated M.Tech, Mathematics and Computing  
IIT (ISM) Dhanbad


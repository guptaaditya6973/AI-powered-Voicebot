// =====================
// DOM ELEMENTS.        
// =====================
const micBtn = document.getElementById('mic-btn');
const statusText = document.getElementById('status');
const visualizer = document.getElementById('visualizer');
const transcriptArea = document.getElementById('transcript');

let isListening = false;
let recognition;
const synthesis = window.speechSynthesis;

// =====================
// SYSTEM PROMPT (YOU = THE BOT)
// =====================


const SYSTEM_PROMPT = `
You are speaking AS the user, not as an AI.
You must answer exactly as Aditya Gupta would in an interview.

Identity:
- Name: Aditya Gupta
- Degree: Mathematics and Computing
- College: IIT (ISM) Dhanbad
- Background: Non-metro background
- Experience: Internship at Axtria (healthcare analytics, US pharmaceutical client)

Strict rules:
- Never say you are an AI, chatbot, or language model.
- Never mention OpenAI, Google, DeepMind, or LLMs.
- Speak confidently, clearly, and naturally like a final-year student in interviews.
- Answers should be concise but complete, suitable for voice output.
- If a question closely matches one of the interview questions below, answer using the prepared response.

Prepared interview answers:

1. If asked:
"What should we know about your life story?"
"Tell me about your life story"
"Tell me about yourself"
"Walk me through your background"

Answer:
"I am Aditya Gupta, a final-year student in Mathematics and Computing at IIT (ISM) Dhanbad. I enjoy working at the intersection of data, problem-solving, and real-world impact.Recently, I interned at Axtria, where I worked on a topology view feature that provided a unified view of resources and their relationships, helping users better understand and analyze complex data.I have also built projects such as Lead Tracker, a Chrome extension that helps users save and manage important links while browsing the internet.Additionally, I have a strong foundation in Data Structures and Algorithms and core computer science subjects such as Object-Oriented Programming, Operating Systems, and Database Management Systems.
2. If asked:
"What is your superpower?"
"Whats your biggest strength?"
"Whats your number one strength?"

Answer:
"My biggest strength is breaking complex, messy problems into structured, solvable parts. Whether its building a predictive model from noisy prescription data during my internship or debugging a full-stack application, I stay calm, identify the right variables, and move step by step. This helps me deliver reliable solutions even when the problem statement is initially unclear."

3. If asked:
"What are the top three areas you want to grow in?"
"Where do you want to improve?"
"What skills do you want to develop?"

Answer:
"First, I want to deepen my understanding of end-to-end systems and models, especially deployment and monitoring. Second, Im working on improving my business storytelling so insights are clear to both technical and non-technical stakeholders. Third, I want to strengthen my system design skills to build scalable, production-ready applications."

4. If asked:
"What misconception do coworkers have about you?"
"How do people misunderstand you at work?"

Answer:
"Some people initially think I am quiet or reserved because I dont speak unless I have thought things through. But once Im comfortable, they realize Im very collaborative and proactive, especially when solving problems or discussing ideas. I prefer meaningful contributions over speaking just for the sake of it."

5. If asked:
"How do you push your limits?"
"How do you challenge yourself?"
"How do you step out of your comfort zone?"

Answer:
"I deliberately put myself into situations where the outcome isnt guaranteed. For example, during my internship, I took ownership of a model with class imbalance and performance constraints even though it was outside my comfort zone. I learn by building, failing fast, and iterating until the solution meets real-world standards."

If a question does not exactly match, answer in a way that best represents Aditya Guptas background, mindset, and experience.
`;


// =====================
// SPEECH RECOGNITION SETUP
// =====================
if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    recognition = new SpeechRecognition();

    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';

    recognition.onstart = () => {
        isListening = true;
        visualizer.classList.add('listening');
        micBtn.classList.add('active');
        statusText.textContent = "Listening...";
    };

    recognition.onend = () => {
        isListening = false;
        visualizer.classList.remove('listening');
        micBtn.classList.remove('active');
        if (statusText.textContent === "Listening...") {
            statusText.textContent = "Processing...";
        }
    };

    recognition.onresult = async (event) => {
        const transcript = event.results[0][0].transcript;

        addMessage(transcript, 'user-msg');
        statusText.textContent = "Thinking...";
        
        try {
            const aiResponse = await getAIResponse(transcript);
            addMessage(aiResponse, 'bot-msg');
            speak(aiResponse);
            statusText.textContent = "Ready to listen...";
        } catch (err) {
            console.error(err);
            const errorMsg = "Sorry, something went wrong. Please make sure Ollama is running.";
            addMessage(errorMsg, 'bot-msg');
            speak(errorMsg);
            statusText.textContent = "Error.";
        }
    };

    recognition.onerror = (event) => {
        console.error("Speech recognition error:", event.error);
        statusText.textContent = "Error: " + event.error;
        isListening = false;
        visualizer.classList.remove('listening');
        micBtn.classList.remove('active');
    };

} else {
    alert("Speech Recognition is not supported in this browser. Use Chrome or Edge.");
    micBtn.disabled = true;
}


// =====================
// OLLAMA (LOCAL AI) CALL
// =====================
async function getAIResponse(userText) {
    try {
        const response = await fetch("http://localhost:11434/api/generate", {
            //the frontend sends a request to http://localhost:11434/api/generate, where Ollama is running on the local machine
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                model: "llama3",
                prompt: `${SYSTEM_PROMPT}\nUser: ${userText}\nAssistant:`,
                stream: false
            })
        });

        if (!response.ok) {
            throw new Error("Ollama request failed");
        }

        const data = await response.json();
        return data.response.trim();

    } catch (error) {
        console.error(error);
        return "Local AI is not running. Please start Ollama.";
    }
}

// =====================
// SPEECH SYNTHESIS
// =====================
function speak(text) {
    if (synthesis.speaking) {
        synthesis.cancel();
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1;
    utterance.pitch = 1;
    synthesis.speak(utterance);
}

// =====================
// UI HELPERS.          
// =====================
function addMessage(text, className) {
    const div = document.createElement('div');
    div.classList.add('message', className);
    div.textContent = text;
    transcriptArea.appendChild(div);
    transcriptArea.scrollTop = transcriptArea.scrollHeight;
}

// =====================
// MIC BUTTON HANDLER
// =====================
micBtn.addEventListener('click', () => {
    if (!recognition) {
        alert("Speech recognition not available.");
        return;
    }

    if (isListening) {
        recognition.stop();
    } else {
        recognition.start();
    }
});

const quizData = [
    // PART 1 & 2 (Giữ nguyên phần nghe từ file bạn gửi)
    { p: "PART 1: LISTENING 1", q: "Question 1. The Thai people are the second largest ethnic group in Viet Nam.", options: ["True", "False"], correct: 0 },
    { p: "PART 1: LISTENING 1", q: "Question 2. They live mainly in the mountainous areas of the northwest.", options: ["True", "False"], correct: 0 },
    { p: "PART 1: LISTENING 1", q: "Question 3. Their traditional costumes are simple and have no colors.", options: ["True", "False"], correct: 1 },
    { p: "PART 1: LISTENING 1", q: "Question 4. The Thai people have their own language and writing system.", options: ["True", "False"], correct: 0 },
    { p: "PART 1: LISTENING 1", q: "Question 5. The 'Xoe' dance is a famous folk dance of the Thai people.", options: ["True", "False"], correct: 0 },
    { p: "PART 2: LISTENING 2", q: "Question 6. Where is the village located?", options: ["Near a big city", "In the mountains", "By the sea"], correct: 1 },
    { p: "PART 2: LISTENING 2", q: "Question 7. How do most people in the village travel?", options: ["By car", "By bus", "On foot or by bicycle"], correct: 2 },
    { p: "PART 2: LISTENING 2", q: "Question 8. What do the villagers usually do in the evening?", options: ["Go to the cinema", "Gather in the communal house", "Stay at home and watch TV"], correct: 1 },
    { p: "PART 2: LISTENING 2", q: "Question 9. What is the main food of the villagers?", options: ["Rice and vegetables", "Fast food", "Bread and butter"], correct: 0 },
    { p: "PART 2: LISTENING 2", q: "Question 10. How do the villagers feel about their life?", options: ["Bored and unhappy", "Peaceful and happy", "Stressed and busy"], correct: 1 },

    // --- CẬP NHẬT CHÍNH XÁC TỪ CÂU 11 ĐẾN 21 ---
    { p: "PART 3: LANGUAGE KNOWLEDGE", q: "Question 11. 'I’m not sure if I can finish the project on time.' - '__________'", options: ["I’m certain you will do it well.", "It’s my pleasure.", "I don’t think so.", "You’re welcome."], correct: 0 },
    { p: "PART 3: LANGUAGE KNOWLEDGE", q: "Question 12. 'I have a terrible headache.' - '__________'", options: ["You should take some rest.", "That’s a good idea.", "I’m sorry to hear that.", "You must go to the cinema."], correct: 0 },
    { p: "PART 3: LANGUAGE KNOWLEDGE", q: "Question 13. My father enjoys _______ models of small cars in his free time.", options: ["making", "doing", "playing", "taking"], correct: 0 },
    { p: "PART 3: LANGUAGE KNOWLEDGE", q: "Question 14. In the countryside, children often _______ the cattle in the fields.", options: ["feed", "herd", "catch", "follow"], correct: 1 },
    { p: "PART 3: LANGUAGE KNOWLEDGE", q: "Question 15. The farmers are _______ the rice and loading it onto carts.", options: ["sowing", "watering", "harvesting", "plucking"], correct: 2 },
    { p: "PART 3: LANGUAGE KNOWLEDGE", q: "Question 16. Nomadic people often live in a _______, which is easy to move.", options: ["cottage", "villa", "yurt", "stilt house"], correct: 2 },
    { p: "PART 3: LANGUAGE KNOWLEDGE", q: "Question 17. _______ do the Hmong people live? - In the mountainous regions.", options: ["What", "Where", "Why", "When"], correct: 1 },
    { p: "PART 3: LANGUAGE KNOWLEDGE", q: "Question 18. Is there _______ milk left in the fridge?", options: ["many", "any", "some", "a few"], correct: 1 },
    { p: "PART 3: LANGUAGE KNOWLEDGE", q: "Question 19. If we _______ more trees, the air will be fresher.", options: ["plant", "plants", "will plant", "planted"], correct: 0 },
    { p: "PART 3: LANGUAGE KNOWLEDGE", q: "Question 20. Look! The students _______ the traditional dance in the yard.", options: ["practice", "practiced", "are practicing", "will practice"], correct: 2 },
    { p: "PART 3: LANGUAGE KNOWLEDGE", q: "Question 21. My mother bought _______ orange and a loaf of bread this morning.", options: ["a", "an", "the", "x (zero article)"], correct: 1 },

    // --- CẬP NHẬT PHẦN ĐỌC 1 (22-26) ---
    { p: "PART 6: READING 1", q: "Question 22. My (22) _______ here have been very interesting.", options: ["experiences", "jobs", "lessons", "habits"], correct: 0 },
    { p: "PART 6: READING 1", q: "Question 23. Every morning, I wake up early to enjoy the fresh (23) _______.", options: ["air", "water", "wind", "sound"], correct: 0 },
    { p: "PART 6: READING 1", q: "Question 24. Last summer, I joined a local festival. I (24) _______ many traditional games.", options: ["played", "was playing", "play", "will play"], correct: 0 },
    { p: "PART 6: READING 1", q: "Question 25. If you (25) _______ my village one day...", options: ["visit", "visits", "visited", "will visit"], correct: 0 },
    { p: "PART 6: READING 1", q: "Question 26. ...you (26) _______ the peaceful life and the beauty of nature.", options: ["love", "will love", "loved", "are loving"], correct: 1 },

    // --- CẬP NHẬT PHẦN ĐỌC 2 (27-31) ---
    { p: "PART 7: READING 2", q: "Question 27. What is the main idea of the passage?", options: ["The history of Vietnam.", "Changes in Vietnamese lifestyle.", "How to use social media.", "The importance of Tet holiday."], correct: 1 },
    { p: "PART 7: READING 2", q: "Question 28. In the past, who did people live with?", options: ["Only their parents.", "Their friends.", "Extended families.", "Alone."], correct: 2 },
    { p: "PART 7: READING 2", q: "Question 29. The word 'They' in the passage refers to _______.", options: ["young people", "generations", "nuclear families", "people in extended families"], correct: 3 },
    { p: "PART 7: READING 2", q: "Question 30. Which is NOT mentioned as a traditional value?", options: ["Respecting elders.", "Family gatherings.", "Living in big cities.", "Helping each other."], correct: 2 },
    { p: "PART 7: READING 2", q: "Question 31. How has technology changed communication?", options: ["People meet more often.", "People use social media more.", "People stop talking.", "People only write letters."], correct: 1 },

    // --- CẬP NHẬT PHẦN VIẾT (32-35) - TRẮC NGHIỆM 4 ĐÁP ÁN ---
    { p: "PART 8: WRITING", q: "Question 32. Reorder: the / in / My / often / mountains / lives / grandmother.", 
      options: [
        "My grandmother often lives in the mountains.",
        "My grandmother lives often in the mountains.",
        "Often my grandmother lives in the mountains.",
        "In the mountains my grandmother often lives."
      ], correct: 0 },
    { p: "PART 8: WRITING", q: "Question 33. Reorder: you / If / hard / study / will / you / the / exam / pass.", 
      options: [
        "If you study hard, you will pass the exam.",
        "If you will study hard, you pass the exam.",
        "You will pass the exam if study hard you.",
        "If you study hard, you pass the will exam."
      ], correct: 0 },
    { p: "PART 8: WRITING", q: "Question 34. Reorder: is / stilt / house / Which / ethnic / group / famous / for /?", 
      options: [
        "Which ethnic group is famous for stilt house?",
        "Which house stilt is famous for ethnic group?",
        "Which ethnic group is for famous stilt house?",
        "Which famous ethnic group is for stilt house?"
      ], correct: 0 },
    { p: "PART 8: WRITING", q: "Question 35. Reorder: doesn't / She / like / in / the / city / living / noisy.", 
      options: [
        "She doesn't like living in the noisy city.",
        "She like doesn't living in the noisy city.",
        "She doesn't like in the noisy city living.",
        "She doesn't living like in the noisy city."
      ], correct: 0 }
];

// Giữ nguyên các hàm loadQuiz() và showResults() từ các phiên bản trước
let currentIndex = 0;
let score = 0;

function loadQuiz() {
    if (currentIndex >= quizData.length) {
        showResults();
        return;
    }
    const currentQuiz = quizData[currentIndex];
    document.getElementById('part-title').innerText = currentQuiz.p;
    document.getElementById('question-text').innerText = currentQuiz.q;
    document.getElementById('current-pos').innerText = currentIndex + 1;
    
    const optionsGrid = document.getElementById('options');
    optionsGrid.innerHTML = '';
    
    currentQuiz.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerText = opt;
        btn.onclick = () => {
            if (idx === currentQuiz.correct) score++;
            currentIndex++;
            loadQuiz();
            document.getElementById('score-correct').innerText = score;
        };
        optionsGrid.appendChild(btn);
    });
}

function showResults() {
    document.getElementById('quiz-section').style.display = 'none';
    const resultScreen = document.getElementById('result-screen');
    resultScreen.style.display = 'block';
    const finalScore = (score / quizData.length * 10).toFixed(1);
    document.getElementById('final-stats').innerHTML = `Đúng: ${score}/35. <br> <b>Điểm: ${finalScore}/10</b>`;
}

loadQuiz();
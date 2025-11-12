/* ========================= 
   CONFIG — unique school password
   Change this to your real password.
   ========================= */
const ACCESS_PASSWORD = "SCHOOL-2025";

/* =========================
   QUIZ BANK — per class & term
   Replace or extend as needed.
   ========================= */
const QUIZZES = {
  "Grade 1": {
    "1st": {
      topic: "GENERAL QUESTIONS (Nursery 1 — 1st Term)",
      durationSeconds: 2 * 60,
      questions: [
        { id:1, text:"What color are strawberries?", options:["Blue","Red","Black","Grey"], answerIndex:1 },
        { id:2, text:"What color are strawberries?", options:["Blue","Red","Black","Grey"], answerIndex:1 },
        { id:3, text:"What color are strawberries?", options:["Blue","Red","Black","Grey"], answerIndex:1 },
        { id:4, text:"What color are strawberries?", options:["Blue","Red","Black","Grey"], answerIndex:1 },
        { id:5, text:"What color are strawberries?", options:["Blue","Red","Black","Grey"], answerIndex:1 },
        { id:6, text:"What color are strawberries?", options:["Blue","Red","Black","Grey"], answerIndex:1 },
        { id:7, text:"What color are strawberries?", options:["Blue","Red","Black","Grey"], answerIndex:1 },
        { id:8, text:"What color are strawberries?", options:["Blue","Red","Black","Grey"], answerIndex:1 },
        { id:9, text:"What color are strawberries?", options:["Blue","Red","Black","Grey"], answerIndex:1 },
        { id:10, text:"What color are strawberries?", options:["Blue","Red","Black","Grey"], answerIndex:1 },
        { id:11, text:"What color are strawberries?", options:["Blue","Red","Black","Grey"], answerIndex:1 },
        { id:12, text:"What color are strawberries?", options:["Blue","Red","Black","Grey"], answerIndex:1 },
        { id:13, text:"What color are strawberries?", options:["Blue","Red","Black","Grey"], answerIndex:1 },
        { id:14, text:"What color are strawberries?", options:["Blue","Red","Black","Grey"], answerIndex:1 },
        { id:15, text:"What color are strawberries?", options:["Blue","Red","Black","Grey"], answerIndex:1 },
        { id:16, text:"What color are strawberries?", options:["Blue","Red","Black","Grey"], answerIndex:1 },
        { id:17, text:"What color are strawberries?", options:["Blue","Red","Black","Grey"], answerIndex:1 },
        { id:18, text:"What color are strawberries?", options:["Blue","Red","Black","Grey"], answerIndex:1 },
        { id:10, text:"What color are strawberries?", options:["Blue","Red","Black","Grey"], answerIndex:1 },
        { id:20, text:"Which of these is round?", options:["Triangle","Circle","Square","Line"], answerIndex:1 }
      ]
    },
    "2nd": {
      topic: "Colors & Simple Shapes (Nursery 1 — 2nd Term)",
      durationSeconds: 2 * 60,
      questions: [
        { id:1, text:"What color is grass?", options:["Yellow","Green","Pink","Purple"], answerIndex:1 }
      ]
    },
    "3rd": {
      topic: "Colors & Simple Shapes (Nursery 1 — 3rd Term)",
      durationSeconds: 2 * 60,
      questions: [
        { id:1, text:"What shape has 3 sides?", options:["Circle","Triangle","Square","Line"], answerIndex:1 }
      ]
    }
  },
  "Grade 2": {
    "1st": {
      topic: "Colors & Simple Shapes (Nursery 1 — 1st Term)",
      durationSeconds: 2 * 60,
      questions: [
        { id:1, text:"What color are strawberries?", options:["Blue","Red","Black","Grey"], answerIndex:1 },
        { id:2, text:"Which of these is round?", options:["Triangle","Circle","Square","Line"], answerIndex:1 }
      ]
    },
    "2nd": {
      topic: "Colors & Simple Shapes (Nursery 1 — 2nd Term)",
      durationSeconds: 2 * 60,
      questions: [
        { id:1, text:"What color is grass?", options:["Yellow","Green","Pink","Purple"], answerIndex:1 }
      ]
    },
    "3rd": {
      topic: "Colors & Simple Shapes (Nursery 1 — 3rd Term)",
      durationSeconds: 2 * 60,
      questions: [
        { id:1, text:"What shape has 3 sides?", options:["Circle","Triangle","Square","Line"], answerIndex:1 }
      ]
    }
  },
  
  "Grade 3": {
  "1st": {
    topic: "GST (GRADE 3 — 1st Term)",
    durationSeconds: 25 * 60,
    questions: [
      { id: 1, text: "Visual art is __?", options: ["An art form we can hear", "An art form we can see", "An art form we can taste", "An art form we can smell"], answerIndex: 1 },
      { id: 2, text: "_____ is an example of visual art", options: ["Music", "Singing", "Dancing", "Painting"], answerIndex: 3 },
      { id: 3, text: "A pattern made with circles and lines is called ________?", options: ["Curve pattern", "Mixed pattern", "Circular pattern", "Zigzag pattern"], answerIndex: 2 },
      { id: 4, text: "What is democracy?", options: ["A system where one person makes all the decisions", "A system where people choose their leader by voting", "Citizens not following any rules", "Only leaders making decisions"], answerIndex: 1 },
      { id: 5, text: "Which of these is not a right of citizens?", options: ["Right to commit offence", "Right to life", "Right to vote", "Right to property"], answerIndex: 0 },
      { id: 6, text: "How many hours are in one day?", options: ["12 hours", "48 hours", "24 hours", "60 hours"], answerIndex: 2 },
      { id: 7, text: "The development of tools and machines to help people accomplish tasks is known as _____________", options: ["Nature", "Art", "Technology", "Science fiction"], answerIndex: 2 },
      { id: 8, text: "Which of these is a component of soil?", options: ["Minerals", "Organic matter", "Air and water", "All of the above"], answerIndex: 3 },
      { id: 9, text: "What is marriage?", options: ["A legal and acceptable union between a man and a woman", "A coming together of a boy and girl", "A way of knowing a girl", "Talking to someone"], answerIndex: 0 },
      { id: 10, text: "Express 7/10 as a decimal", options: ["7.10", "0.7", "0.07", "0.007"], answerIndex: 1 },
      { id: 11, text: "Simplify ½ + ¾", options: ["1¼", "2¼", "3¼", "4¼"], answerIndex: 0 },
      { id: 12, text: "If there are 20 boys and 15 girls in a class, how many pupils are in the class altogether?", options: ["30", "35", "5", "25"], answerIndex: 1 },
      { id: 13, text: "All these states are found in South-West Nigeria EXCEPT ______", options: ["Ekiti", "Oyo", "Osun", "Delta"], answerIndex: 3 },
      { id: 14, text: "A person who discovers artefacts and digs them up is known as a/an ____", options: ["Archaeologist", "Egyptologist", "Historian", "Pharmacist"], answerIndex: 0 },
      { id: 15, text: "What was the primary purpose of early counting devices?", options: ["Communication", "Cooking", "Simple calculations and counting", "Entertainment"], answerIndex: 2 },
      { id: 16, text: "Who designed the Difference Machine?", options: ["Ada Lovelace", "Alan Turing", "Charles Babbage", "John Napier"], answerIndex: 2 },
      { id: 17, text: "In Microsoft Word, the SAVE function helps to ___________", options: ["Delete a document", "Store the document for future use", "Print a document", "Close the program"], answerIndex: 1 },
      { id: 18, text: "In a Christian family, who is considered the head?", options: ["The eldest child", "The father", "The mother", "The grandparents"], answerIndex: 1 },
      { id: 19, text: "Which tool is commonly used to measure length?", options: ["Thermometer", "Ruler", "Stopwatch", "Weighing scale"], answerIndex: 1 },
      { id: 20, text: "Which of these components serves as the brain of the computer?", options: ["Speaker", "Floppy disk", "Flash drive", "System Unit"], answerIndex: 3 }
    ]
  },
    "2nd": {
      topic: "Colors & Simple Shapes (Nursery 1 — 2nd Term)",
      durationSeconds: 2 * 60,
      questions: [
        { id:1, text:"What color is grass?", options:["Yellow","Green","Pink","Purple"], answerIndex:1 }
      ]
    },
    "3rd": {
      topic: "Colors & Simple Shapes (Nursery 1 — 3rd Term)",
      durationSeconds: 2 * 60,
      questions: [
        { id:1, text:"What shape has 3 sides?", options:["Circle","Triangle","Square","Line"], answerIndex:1 }
      ]
    }
  },
  "Grade 4": {
  "1st": {
    topic: "GST",
    durationSeconds: 25 * 60,
    questions: [
      { id: 1, text: "Which of these components serves as the brain of the computer?", options: ["Speaker", "Floppy disk", "Flash drive", "System Unit"], answerIndex: 3 },
      { id: 2, text: "An electronic device that accepts data, processes data, and gives out information is a ________", options: ["Computer", "Microwave", "Natural gas", "Electricity"], answerIndex: 0 },
      { id: 3, text: "What are the sons of your brother’s or sister’s children called?", options: ["Nephews", "Cousins", "Sisters", "Brothers"], answerIndex: 0 },
      { id: 4, text: "Which one of these is not an element of culture?", options: ["Language", "Childbirth", "Marriage practices", "Fighting"], answerIndex: 3 },
      { id: 5, text: "Who stopped the killing of twins in our tradition?", options: ["The Calabar women", "Mary Stella", "Mary Slessor", "The Festival and culture"], answerIndex: 2 },
      { id: 6, text: "Which is a way to promote and preserve our culture?", options: ["Eat foreign foods", "Being absent from cultural activities", "Wearing our native attire", "Speaking foreign languages"], answerIndex: 2 },
      { id: 7, text: "In absolute monarchy, who has the political power?", options: ["The monarch", "The Prime Minister", "The President", "The leader"], answerIndex: 0 },
      { id: 8, text: "The federal government is led by the?", options: ["Chairman", "Governor", "President", "Senator"], answerIndex: 2 },
      { id: 9, text: "Working together to achieve a common goal is?", options: ["Cooperation", "Harmony", "Education", "Unity"], answerIndex: 0 },
      { id: 10, text: "Which one of these is not a marital problem?", options: ["Misunderstanding", "Financial hardship", "Childlessness", "Honesty"], answerIndex: 3, image: "https://www.shutterstock.com/shutterstock/photos/2358714963/display_1500/stock-vector-slice-of-strawberry-cake-with-whipped-cream-vector-illustration-sweet-strawberry-pie-icon-vector-2358714963.jpg" },
      { id: 11, text: "Who was the first governor of Anambra State?", options: ["John Atom Kpera", "Mohammed Bello Khaliel", "Umaru Mohammed", "Murtala Nyako"], answerIndex: 0 },
      { id: 12, text: "The western region is dominated by the?", options: ["Igbos", "Yorubas", "Urhobos", "Benins"], answerIndex: 1 },
      { id: 13, text: "The mixture of two primary colours results in ________", options: ["Primary colours", "Tertiary colours", "Secondary colours", "Complementary colours"], answerIndex: 2 },
      { id: 14, text: "Nuclear family is ________?", options: ["The smallest family unit", "The largest family unit", "Medium family unit", "No family unit"], answerIndex: 0 },
      { id: 15, text: "Christians read the ______ in the church.", options: ["Quran", "Textbox", "Bible", "Letter"], answerIndex: 2 },
      { id: 16, text: "Art is a way of producing ________ objects.", options: ["Bad", "Rough", "Beautiful", "Nothing"], answerIndex: 2 },
      { id: 17, text: "Visual arts are art forms that appeal to our _____", options: ["Teeth", "Nose", "Ears", "Eyes"], answerIndex: 3 },
      { id: 18, text: "What is the Roman numeral of 59?", options: ["LIII", "LIX", "IXL", "XXIL"], answerIndex: 1 },
      { id: 19, text: "Subtract 400 from 788.", options: ["388", "288", "188", "88"], answerIndex: 0 },
      { id: 20, text: "What is 2345 in words?", options: ["Two thousand three hundred and forty-five", "Two thousand three hundred and forty", "Two thousand one hundred and forty-five", "Two thousand three hundred and forty"], answerIndex: 0 }
    ]
  },
    "2nd": {
      topic: "Colors & Simple Shapes (Nursery 1 — 2nd Term)",
      durationSeconds: 2 * 60,
      questions: [
        { id:1, text:"What color is grass?", options:["Yellow","Green","Pink","Purple"], answerIndex:1 }
      ]
    },
    "3rd": {
      topic: "Colors & Simple Shapes (Nursery 1 — 3rd Term)",
      durationSeconds: 2 * 60,
      questions: [
        { id:1, text:"What shape has 3 sides?", options:["Circle","Triangle","Square","Line"], answerIndex:1 }
      ]
    }
  },

  "Grade 5": {
  "1st": {
    "topic": "GST (GRADE 5 — 1st Term)",
    "durationSeconds": 25 * 60,
    "questions": [
      { "id": 1, "text": "Which is incorrect?", "options": ["A healthy environment is attractive", "A healthy environment is safe for living", "A healthy environment prevents diseases", "A healthy environment causes pollution"], "answerIndex": 3 },
      { "id": 2, "text": "Air pollution can lead to _______", "options": ["HIV", "Headache", "Lung infection", "Malaria"], "answerIndex": 2 },
      { "id": 3, "text": "A person born and raised in a particular community is called ?", "options": ["Non-indigene", "Indigene", "non-native", "foreigner"], "answerIndex": 1 },
      { "id": 4, "text": "Which of the following countries colonised Nigeria?", "options": ["France", "Italy", "Britain", "America"], "answerIndex": 2 },
      { "id": 5, "text": "The indirect rule was introduced in Nigeria in _____", "options": ["1906", "1905", "1960", "1986"], "answerIndex": 0 },
      { "id": 6, "text": "Which of the state in Nigeria was declared a colony in 1861?", "options": ["Lagos", "Benue", "Jos", "Abuja"], "answerIndex": 0 },
      { "id": 7, "text": "The aspects of the society that deals faith and beliefs is _________", "options": ["culture", "economy", "politics", "religion"], "answerIndex": 3 },
      { "id": 8, "text": "The legal separation between a husband and wife is ________", "options": ["betrayal", "desertion", "disengagement", "divorce"], "answerIndex": 3 },
      { "id": 9, "text": "A chemical substances used for fighting and preventing insects are called", "options": ["water", "insecticide", "herbicide", "Fire"], "answerIndex": 1 },
      { "id": 10, "text": "Consequences of poor services are all except?", "options": ["disorganization and confusion", "high cost of living", "frustration", "progress"], "answerIndex": 3 },
      { "id": 11, "text": "All of these are benefits of family relationship except?", "options": ["offering advice", "providing assistance", "provision of food and shelter", "disagreement among members of the family"], "answerIndex": 3 },
      { "id": 12, "text": "The processing of removing seedlings from the nursery bed to the permanent site is called ?", "options": ["planting", "pre-planting", "transplanting", "post-planting"], "answerIndex": 2 },
      { "id": 13, "text": "All of these are pre-planting activities except ?", "options": ["land clearing", "selection of farm land", "stamping", "harvesting"], "answerIndex": 3 },
      { "id": 14, "text": "How many change over arenas are there in a 4×100m relay race?", "options": ["2", "3", "4", "5"], "answerIndex": 2 },
      { "id": 15, "text": "All of these are skills in long distances race except________", "options": ["take off", "arm action", "finish", "dribbling"], "answerIndex": 3 },
      { "id": 16, "text": "The highest Jewish council is called _____", "options": ["Sanhedrin", "Judge", "Peter", "Paul"], "answerIndex": 0 },
      { "id": 17, "text": "What happened to Saul on his way to Damascus?", "options": ["A great light from heaven flashed around him", "water from sky splash around him", "force flash from heaven flash around him", "none of the above"], "answerIndex": 0 },
      { "id": 18, "text": "In whose image did God create man?", "options": ["Satan's image", "His own image", "animal's image", "Natural Image"], "answerIndex": 1 },
      { "id": 19, "text": "How many generations are computer classified into?", "options": ["2", "5", "3", "6"], "answerIndex": 1 },
      { "id": 20, "text": "A computer that calculate and perform logical operation is known as ?", "options": ["digital computer", "analogue computer", "hybrid computer", "Calculation computer"], "answerIndex": 0 }
    ]
    },
    "2nd": {
      topic: "Animals & Colors (Nursery 2 — 2nd Term)",
      durationSeconds: 3 * 60,
      questions: [
        { id:1, text:"Which of these is a baby cat?", options:["Puppy","Calf","Kitten","Foal"], answerIndex:2 }
      ]
    },
    "3rd": {
      topic: "Animals & Colors (Nursery 2 — 3rd Term)",
      durationSeconds: 3 * 60,
      questions: [
        { id:1, text:"What color are most bananas when ripe?", options:["Blue","Yellow","Red","Pink"], answerIndex:1 }
      ]
    }
  }
}; 
// 👉 You can extend the same way for Grade 3, 4, 5 etc.

/* =========================
   STATE & ELEMENTS
   ========================= */
const pages = {
  login: document.getElementById('loginPage'),
  prep: document.getElementById('prepPage'),
  quiz: document.getElementById('quizPage'),
  result: document.getElementById('resultPage')
};
const el = {
  // login
  loginForm: document.getElementById('loginForm'),
  pName: document.getElementById('pName'),
  pClass: document.getElementById('pClass'),
  pTerm: document.getElementById('pTerm'),   // ✅ NEW term dropdown
  pExam: document.getElementById('pExam'),
  pPass: document.getElementById('pPass'),
  demoBtn: document.getElementById('demoBtn'),
  // prep
  uName: document.getElementById('uName'),
  uClass: document.getElementById('uClass'),
  uExam: document.getElementById('uExam'),
  startQuizBtn: document.getElementById('startQuizBtn'),
  backToLoginBtn: document.getElementById('backToLoginBtn'),
  // quiz
  topicTitle: document.getElementById('topicTitle'),
  countBadge: document.getElementById('countBadge'),
  timeLeft: document.getElementById('timeLeft'),
  progressBar: document.getElementById('progressBar'),
  qnums: document.getElementById('qnums'),
  questionContainer: document.getElementById('questionContainer'),
  prevBtn: document.getElementById('prevBtn'),
  nextBtn: document.getElementById('nextBtn'),
  submitBtn: document.getElementById('submitBtn'),
  // result
  rName: document.getElementById('rName'),
  rClass: document.getElementById('rClass'),
  rExam: document.getElementById('rExam'),
  rTopic: document.getElementById('rTopic'),
  rDate: document.getElementById('rDate'),
  rScore: document.getElementById('rScore'),
  printBtn: document.getElementById('printBtn'),
  restartBtn: document.getElementById('restartBtn')
};

const state = {
  user: { name:"", class:"", examNo:"" },
  quiz: null,
  currentIndex: 0,
  answers: [],
  timeLeft: 0,
  timerId: null
};

/* =========================
   PAGE SWITCH HELPER
   ========================= */
function show(page){
  for(const p in pages){
    pages[p].style.display = (p === page) ? 'block' : 'none';
  }
}

/* =========================
   LOGIN FLOW
   ========================= */
el.demoBtn.addEventListener('click', ()=>{
  el.pName.value = "Test Pupil";
  el.pClass.value = "Grade 2";
  el.pTerm.value  = "1st"; // ✅ default demo term
  el.pExam.value = "NUR-2025-001";
  el.pPass.value = "";
});

el.loginForm.addEventListener('submit', (e)=>{
  e.preventDefault();
  const name = el.pName.value.trim();
  const cls  = el.pClass.value.trim();
  const term = el.pTerm.value.trim();   // ✅ NEW
  const exam = el.pExam.value.trim();
  const pass = el.pPass.value;

  if(!name || !cls || !term || !exam || !pass){ 
    alert("Please fill all fields."); 
    return; 
  }
  if(pass !== ACCESS_PASSWORD){ 
    alert("Incorrect password. Please check with your school."); 
    return; 
  }
  if(!QUIZZES[cls] || !QUIZZES[cls][term]){ 
    alert("No quiz found for the selected class and term."); 
    return; 
  }

  state.user = { name, class:cls + " (" + term + " Term)", examNo:exam };
  state.quiz = JSON.parse(JSON.stringify(QUIZZES[cls][term])); // ✅ copy quiz by class & term
  state.currentIndex = 0;
  state.answers = Array(state.quiz.questions.length).fill(null);
  state.timeLeft = state.quiz.durationSeconds;

  // prep page text
  el.uName.textContent = name;
  el.uClass.textContent = cls + " — " + term + " Term";
  el.uExam.textContent = exam;

  show('prep');
});

/* =========================
   PREP → QUIZ
   ========================= */
el.backToLoginBtn.addEventListener('click', ()=> show('login'));
el.startQuizBtn.addEventListener('click', ()=>{
  // init quiz header
  el.topicTitle.textContent = `Topic: ${state.quiz.topic}`;
  el.countBadge.textContent = `0/${state.quiz.questions.length}`;
  el.progressBar.style.width = '0%';
  renderQnums();
  renderQuestion();
  updateProgress();
  startTimer();
  show('quiz');
});

/* =========================
   QUIZ RENDERING
   ========================= */
function renderQnums(){
  el.qnums.innerHTML = '';
  state.quiz.questions.forEach((q, idx)=>{
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'qnum';
    b.textContent = idx + 1;
    b.addEventListener('click', ()=> { state.currentIndex = idx; renderQuestion(); updateProgress(); });
    el.qnums.appendChild(b);
  });
}
function renderQuestion(){
  const q = state.quiz.questions[state.currentIndex];
  const saved = state.answers[state.currentIndex];

  const wrapper = document.createElement('div');
  wrapper.className = 'question';
  const title = document.createElement('h3');
  title.className = 'q-title';
  title.textContent = `Q${state.currentIndex+1}. ${q.text}`;
  wrapper.appendChild(title);
  
    if(q.image){
  const img = document.createElement('img');
  img.src = q.image;
  img.alt = "Question Image";
  img.style.maxWidth = "220px";
  img.style.display = "block";
  img.style.margin = "10px 0";
  wrapper.appendChild(img);
}


  const choices = document.createElement('div');
  choices.className = 'choices';
  q.options.forEach((opt, idx)=>{
    const label = document.createElement('label');
    label.className = 'choice';
    const input = document.createElement('input');
    input.type = 'radio'; input.name = `q${q.id}`; input.value = idx;
    input.checked = saved === idx;
    input.addEventListener('change', ()=>{
      state.answers[state.currentIndex] = idx;
      updateProgress();
    });
    const span = document.createElement('span'); span.textContent = opt;
    label.appendChild(input); label.appendChild(span);
    choices.appendChild(label);
  });

  wrapper.appendChild(choices);
  el.questionContainer.innerHTML = '';
  el.questionContainer.appendChild(wrapper);

  el.prevBtn.disabled = state.currentIndex === 0;
  el.nextBtn.disabled = state.currentIndex === state.quiz.questions.length - 1;

  [...el.qnums.children].forEach((btn,i)=>btn.classList.toggle('active', i===state.currentIndex));
}
function updateProgress(){
  const answered = state.answers.filter(v => v !== null).length;
  const total = state.quiz.questions.length;
  el.countBadge.textContent = `${answered}/${total}`;
  el.progressBar.style.width = `${Math.round((answered/total)*100)}%`;
  [...el.qnums.children].forEach((btn,i)=>{
    btn.classList.toggle('answered', state.answers[i] !== null);
    btn.classList.toggle('active', i === state.currentIndex);
  });
}
el.prevBtn.addEventListener('click', ()=>{ if(state.currentIndex>0){ state.currentIndex--; renderQuestion(); updateProgress(); }});
el.nextBtn.addEventListener('click', ()=>{ if(state.currentIndex<state.quiz.questions.length-1){ state.currentIndex++; renderQuestion(); updateProgress(); }});

/* TIMER */
function formatTime(sec){
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${m}:${s.toString().padStart(2,'0')}`;
}
function startTimer(){
  clearInterval(state.timerId);
  el.timeLeft.textContent = formatTime(state.timeLeft);
  state.timerId = setInterval(()=>{
    state.timeLeft--;
    el.timeLeft.textContent = formatTime(Math.max(0,state.timeLeft));
    if(state.timeLeft <= 0){ clearInterval(state.timerId); submitQuiz(true); }
  }, 1000);
}

/* SUBMIT */
function computeScore(){
  let s = 0;
  state.quiz.questions.forEach((q,i)=>{ if(state.answers[i] === q.answerIndex) s++; });
  return s;
}
function submitQuiz(auto=false){
  clearInterval(state.timerId);
  const left = state.answers.filter(x=>x===null).length;
  if(!auto && left>0){
    const ok = confirm(`You have ${left} unanswered question(s). Submit anyway?`);
    if(!ok) return;
  }
  const score = computeScore();
  const total = state.quiz.questions.length;
  const pct = Math.round((score/total)*100);

  // populate results
  el.rName.textContent = state.user.name;
  el.rClass.textContent = state.user.class;
  el.rExam.textContent = state.user.examNo;
  el.rTopic.textContent = state.quiz.topic;
  el.rDate.textContent = new Date().toLocaleString();
  el.rScore.textContent = `${score} / ${total} (${pct}%)`;

  // 🔽 ADD THIS BLOCK (logo/brand at top of result)
  const resultPage = document.getElementById('resultPage');
  let brand = document.getElementById('resultBrand');
  if(!brand){
    brand = document.createElement('div');
    brand.id = 'resultBrand';
    brand.innerHTML = `<img src="mercy.jpg" alt="School Logo" style="max-height:80px; margin-bottom:15px;margin-left:470px;">`;
    resultPage.insertBefore(brand, resultPage.firstChild);
  }

  // 🔽 ADD THIS BLOCK (answers review)
  let detailsContainer = document.getElementById('answerDetails');
  if(!detailsContainer){
    detailsContainer = document.createElement('div');
    detailsContainer.id = 'answerDetails';
    resultPage.appendChild(detailsContainer);
  }
  detailsContainer.innerHTML = '<h3>Answer Review</h3>';

  state.quiz.questions.forEach((q, i) => {
    const chosenIndex = state.answers[i];
    const chosenText = chosenIndex !== null ? q.options[chosenIndex] : "Not answered";
    const correctText = q.options[q.answerIndex];

    const item = document.createElement('div');
    item.style.marginBottom = "12px";
    item.innerHTML = `
      <p><strong>Q${i+1}:</strong> ${q.text}</p>
      <p><span style="color:blue;">👉</span> Your answer: <span style="color:${chosenIndex === q.answerIndex ? 'green':'red'}">${chosenText}</span></p>
      <p><span style="color:green;">✅</span> Correct answer: ${correctText}</p>
    `;
    detailsContainer.appendChild(item);
  });

  show('result');
}

el.submitBtn.addEventListener('click', ()=> submitQuiz(false));

/* RESULT ACTIONS */
el.printBtn.addEventListener('click', ()=> window.print());
el.restartBtn.addEventListener('click', ()=>{
  show('login');
  el.loginForm.reset();
});


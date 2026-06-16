// Quiz State Variables
let quizMode = 'practice'; // 'practice' or 'mock'
let currentCategory = 'all';
let currentQuestionIndex = 0;
let currentQuestionsList = [];
let userAnswersState = {}; // { questionId: [selectedOptionIndices] }
let checkedQuestionsState = {}; // { questionId: true/false } (Practice mode check state)

// Mock Exam Specific State
let mockExamActive = false;
let mockExamSubmitted = false;
let mockSecondsLeft = 0;
let timerInterval = null;
const SECONDS_PER_QUESTION = 60; // 1 minute per question for mock exam

// Core Initialization
document.addEventListener('DOMContentLoaded', () => {
  // Load settings from LocalStorage
  loadStateFromLocalStorage();
  
  // Set up themes
  const savedTheme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  
  // Setup question list
  filterQuestions();
  
  // Render layout components
  renderCategoryList();
  renderQuestionNav();
  renderActiveQuestion();
  updateStats();
  
  // Keypress navigation support (ArrowLeft / ArrowRight)
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
      prevQuestion();
    } else if (e.key === 'ArrowRight') {
      nextQuestion();
    }
  });
});

// Filter questions by Category
function filterQuestions() {
  if (currentCategory === 'all') {
    currentQuestionsList = [...questionBank];
  } else {
    currentQuestionsList = questionBank.filter(q => q.category === currentCategory);
  }
  
  // Check index bounds
  if (currentQuestionIndex >= currentQuestionsList.length) {
    currentQuestionIndex = 0;
  }
}

// Render Category Sidebar
function renderCategoryList() {
  const listEl = document.getElementById('categoryList');
  if (!listEl) return;
  
  // Calculate question counts per category
  const counts = { all: questionBank.length };
  questionBank.forEach(q => {
    counts[q.category] = (counts[q.category] || 0) + 1;
  });
  
  // Get unique categories list
  const categories = ['all', ...new Set(questionBank.map(q => q.category))];
  
  listEl.innerHTML = '';
  categories.forEach(cat => {
    const item = document.createElement('div');
    item.className = `category-item ${cat === currentCategory ? 'active' : ''}`;
    item.onclick = () => setCategory(cat);
    
    // Formatting category display text
    let displayTitle = cat;
    if (cat === 'all') {
      displayTitle = 'All Question Database';
    }
    
    item.innerHTML = `
      <span>${displayTitle}</span>
      <span class="category-badge">${counts[cat]}</span>
    `;
    listEl.appendChild(item);
  });
}

// Filter category setting
function setCategory(cat) {
  currentCategory = cat;
  currentQuestionIndex = 0;
  
  // Retain stats but update active set
  filterQuestions();
  renderCategoryList();
  renderQuestionNav();
  renderActiveQuestion();
  updateProgressBar();
}

// Render Question Navigation Grid (dots)
function renderQuestionNav() {
  const gridEl = document.getElementById('questionNavGrid');
  if (!gridEl) return;
  
  gridEl.innerHTML = '';
  currentQuestionsList.forEach((q, index) => {
    const dot = document.createElement('button');
    dot.className = 'nav-dot';
    dot.innerText = index + 1;
    dot.setAttribute('aria-label', `Go to Question ${index + 1}`);
    
    // Style dots based on state
    if (index === currentQuestionIndex) {
      dot.classList.add('active');
    }
    
    const answers = userAnswersState[q.id];
    const isAnswered = answers && answers.length > 0;
    
    if (quizMode === 'practice') {
      const isChecked = checkedQuestionsState[q.id];
      if (isChecked && isAnswered) {
        const isCorrect = checkAnswerCorrectness(q, answers);
        dot.classList.add(isCorrect ? 'correct' : 'incorrect');
      } else if (isAnswered) {
        dot.classList.add('answered');
      }
    } else { // Mock Mode
      if (mockExamSubmitted && isAnswered) {
        const isCorrect = checkAnswerCorrectness(q, answers);
        dot.classList.add(isCorrect ? 'correct' : 'incorrect');
      } else if (isAnswered) {
        dot.classList.add('answered');
      }
    }
    
    dot.onclick = () => {
      currentQuestionIndex = index;
      renderActiveQuestion();
      renderQuestionNav();
    };
    
    gridEl.appendChild(dot);
  });
}

// Helper: Check if answers array matches correctAnswers array exactly
function checkAnswerCorrectness(question, chosenIndices) {
  if (!chosenIndices || chosenIndices.length !== question.correctAnswers.length) {
    return false;
  }
  const sortedChosen = [...chosenIndices].sort((a, b) => a - b);
  const sortedCorrect = [...question.correctAnswers].sort((a, b) => a - b);
  return sortedChosen.every((val, i) => val === sortedCorrect[i]);
}

// Render active question details
function renderActiveQuestion() {
  const q = currentQuestionsList[currentQuestionIndex];
  if (!q) return;
  
  // UI selectors
  document.getElementById('questionCategory').innerText = q.category;
  
  const typeBadge = document.getElementById('questionTypeBadge');
  typeBadge.innerText = q.type.toUpperCase();
  typeBadge.className = `question-type-badge ${q.type}`;
  
  document.getElementById('questionText').innerText = q.questionText;
  
  // Render options form
  const formEl = document.getElementById('optionsForm');
  formEl.innerHTML = '';
  
  const userSelections = userAnswersState[q.id] || [];
  const isPracticeChecked = quizMode === 'practice' && checkedQuestionsState[q.id];
  const isMockSubmitted = quizMode === 'mock' && mockExamSubmitted;
  const isLocked = isPracticeChecked || isMockSubmitted;
  
  q.options.forEach((optText, idx) => {
    const label = document.createElement('label');
    label.className = 'option-label';
    
    const input = document.createElement('input');
    input.type = q.type === 'mcq' ? 'radio' : 'checkbox';
    input.name = `question_${q.id}`;
    input.className = 'option-input';
    input.value = idx;
    input.disabled = isLocked;
    
    // Mark as selected if stored
    const isSelected = userSelections.includes(idx);
    input.checked = isSelected;
    if (isSelected) {
      label.classList.add(q.type === 'maq' ? 'maq-selected' : 'selected');
    }
    
    // Setup event listener for selection
    input.onchange = (e) => {
      if (isLocked) return;
      handleOptionSelect(q.id, idx, e.target.checked, q.type);
    };
    
    const indicator = document.createElement('span');
    indicator.className = 'option-indicator';
    
    const textSpan = document.createElement('span');
    textSpan.className = 'option-text';
    textSpan.innerText = optText;
    
    label.appendChild(input);
    label.appendChild(indicator);
    label.appendChild(textSpan);
    
    // Add visual correct/incorrect feedback in review states
    if (isLocked) {
      const isCorrectIndex = q.correctAnswers.includes(idx);
      if (isCorrectIndex) {
        label.classList.add('correct-choice');
      } else if (isSelected) {
        label.classList.add('incorrect-choice');
      }
    }
    
    formEl.appendChild(label);
  });
  
  // Explanation Panel control
  const expContainer = document.getElementById('explanationContainer');
  if (isLocked) {
    document.getElementById('explanationText').innerText = q.explanation || "No explanation provided.";
    expContainer.style.display = 'flex';
  } else {
    expContainer.style.display = 'none';
  }
  
  // Set up Action Button (Check / Submit / Next / Restart)
  updateActionButton(q, isLocked, userSelections);
  
  // Update header/nav progress
  updateProgressBar();
}

// Update Action button states dynamically
function updateActionButton(question, isLocked, userSelections) {
  const btn = document.getElementById('btnAction');
  if (!btn) return;
  
  btn.disabled = false;
  
  if (quizMode === 'practice') {
    if (isLocked) {
      // Current is checked, change button to "Next Question" or "View Results"
      if (currentQuestionIndex < currentQuestionsList.length - 1) {
        btn.innerText = 'Next Question';
        btn.className = 'btn btn-primary';
      } else {
        btn.innerText = 'Review Completed Set';
        btn.className = 'btn btn-primary';
      }
    } else {
      // Waiting for check
      btn.innerText = 'Check Answer';
      btn.className = 'btn btn-primary';
      if (userSelections.length === 0) {
        btn.disabled = true; // Block click if no input selection
      }
    }
  } else { // Mock Mode
    if (mockExamSubmitted) {
      btn.innerText = 'Retake Mock Exam';
      btn.className = 'btn btn-primary';
    } else {
      if (currentQuestionIndex === currentQuestionsList.length - 1) {
        btn.innerText = 'Submit Exam';
        btn.className = 'btn btn-primary';
      } else {
        btn.innerText = 'Next Question';
        btn.className = 'btn';
      }
    }
  }
}

// Handling Option Selections
function handleOptionSelect(qId, index, isChecked, type) {
  if (!userAnswersState[qId]) {
    userAnswersState[qId] = [];
  }
  
  if (type === 'mcq') {
    // Single choice
    userAnswersState[qId] = isChecked ? [index] : [];
  } else {
    // Multi choice
    if (isChecked) {
      if (!userAnswersState[qId].includes(index)) {
        userAnswersState[qId].push(index);
      }
    } else {
      userAnswersState[qId] = userAnswersState[qId].filter(i => i !== index);
    }
  }
  
  saveStateToLocalStorage();
  
  // Re-render display states
  renderActiveQuestion();
  renderQuestionNav();
  updateStats();
}

// Next/Prev Buttons
function nextQuestion() {
  if (currentQuestionIndex < currentQuestionsList.length - 1) {
    currentQuestionIndex++;
    renderActiveQuestion();
    renderQuestionNav();
  }
}

function prevQuestion() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    renderActiveQuestion();
    renderQuestionNav();
  }
}

// Handle action button clicking
function handleActionButtonClick() {
  const q = currentQuestionsList[currentQuestionIndex];
  if (!q) return;
  
  const userSelections = userAnswersState[q.id] || [];
  const isPracticeChecked = quizMode === 'practice' && checkedQuestionsState[q.id];
  
  if (quizMode === 'practice') {
    if (isPracticeChecked) {
      // Go to next question
      nextQuestion();
    } else {
      // Check answer
      if (userSelections.length > 0) {
        checkedQuestionsState[q.id] = true;
        saveStateToLocalStorage();
        
        // Visual effects check
        const isCorrect = checkAnswerCorrectness(q, userSelections);
        const cardEl = document.getElementById('questionCard');
        
        if (!isCorrect && cardEl) {
          cardEl.classList.add('shake-animation');
          setTimeout(() => cardEl.classList.remove('shake-animation'), 400);
        }
        
        renderActiveQuestion();
        renderQuestionNav();
        updateStats();
      }
    }
  } else { // Mock Mode
    if (mockExamSubmitted) {
      resetQuizState();
    } else {
      if (currentQuestionIndex === currentQuestionsList.length - 1) {
        // Submit mock exam
        submitMockExam();
      } else {
        nextQuestion();
      }
    }
  }
}

// Stats tracking
function updateStats() {
  let totalCorrect = 0;
  let totalAttempted = 0;
  
  if (quizMode === 'practice') {
    questionBank.forEach(q => {
      const answers = userAnswersState[q.id];
      const isChecked = checkedQuestionsState[q.id];
      if (isChecked && answers && answers.length > 0) {
        totalAttempted++;
        if (checkAnswerCorrectness(q, answers)) {
          totalCorrect++;
        }
      }
    });
  } else { // Mock Mode
    if (mockExamSubmitted) {
      questionBank.forEach(q => {
        const answers = userAnswersState[q.id];
        if (answers && answers.length > 0) {
          totalAttempted++;
          if (checkAnswerCorrectness(q, answers)) {
            totalCorrect++;
          }
        }
      });
    } else {
      // In active mock, show completed selection counts
      questionBank.forEach(q => {
        const answers = userAnswersState[q.id];
        if (answers && answers.length > 0) {
          totalAttempted++;
        }
      });
      document.getElementById('statScore').innerText = `${totalAttempted} / ${questionBank.length}`;
      document.getElementById('statAccuracy').innerText = 'Active';
      return;
    }
  }
  
  document.getElementById('statScore').innerText = `${totalCorrect} / ${totalAttempted}`;
  const accuracy = totalAttempted > 0 ? Math.round((totalCorrect / totalAttempted) * 100) : 0;
  document.getElementById('statAccuracy').innerText = `${accuracy}%`;
}

// Update header and card progress elements
function updateProgressBar() {
  const total = currentQuestionsList.length;
  const currentNum = currentQuestionIndex + 1;
  
  document.getElementById('progressText').innerText = `Question ${currentNum} of ${total}`;
  
  // Count how many of current category are completed
  let completed = 0;
  currentQuestionsList.forEach(q => {
    const answers = userAnswersState[q.id];
    if (quizMode === 'practice') {
      if (checkedQuestionsState[q.id] && answers && answers.length > 0) {
        completed++;
      }
    } else {
      if (answers && answers.length > 0) {
        completed++;
      }
    }
  });
  
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
  document.getElementById('progressPercent').innerText = `${percentage}% Completed`;
  document.getElementById('progressBarFill').style.width = `${percentage}%`;
}

// Mode Switching (Practice vs Mock)
function setMode(mode) {
  if (quizMode === mode) return;
  
  if (mode === 'mock') {
    // Confirm entering timed mock exam
    const confirmVal = confirm("Ready to start a timed mock exam? This resets all current selections and starts a timer.");
    if (!confirmVal) return;
    
    quizMode = 'mock';
    document.getElementById('modePractice').classList.remove('active');
    document.getElementById('modeMock').classList.add('active');
    
    // Clear responses and activate mock
    userAnswersState = {};
    checkedQuestionsState = {};
    mockExamSubmitted = false;
    mockExamActive = true;
    
    // Reset to index 0 on 'all'
    currentCategory = 'all';
    currentQuestionIndex = 0;
    filterQuestions();
    
    // Start Timer
    startMockTimer();
  } else {
    // Switching back to Practice Mode
    clearInterval(timerInterval);
    document.getElementById('timerContainer').style.display = 'none';
    
    quizMode = 'practice';
    document.getElementById('modeMock').classList.remove('active');
    document.getElementById('modePractice').classList.add('active');
    
    // Restore empty states or keep answers for learning
    mockExamActive = false;
    mockExamSubmitted = false;
    userAnswersState = {};
    checkedQuestionsState = {};
  }
  
  saveStateToLocalStorage();
  renderCategoryList();
  renderQuestionNav();
  renderActiveQuestion();
  updateStats();
}

// Timed Mock Exam Engine
function startMockTimer() {
  clearInterval(timerInterval);
  const timerContainer = document.getElementById('timerContainer');
  timerContainer.style.display = 'flex';
  timerContainer.classList.remove('warning');
  
  mockSecondsLeft = currentQuestionsList.length * SECONDS_PER_QUESTION; // e.g., 95 minutes for 95 questions
  
  updateTimerText();
  
  timerInterval = setInterval(() => {
    mockSecondsLeft--;
    updateTimerText();
    
    // Warn when less than 5 minutes remaining
    if (mockSecondsLeft <= 300) {
      timerContainer.classList.add('warning');
    }
    
    if (mockSecondsLeft <= 0) {
      clearInterval(timerInterval);
      alert("Time is up! Your mock exam is being submitted.");
      submitMockExam();
    }
  }, 1000);
}

function updateTimerText() {
  const mins = Math.floor(mockSecondsLeft / 60);
  const secs = mockSecondsLeft % 60;
  
  const minsStr = mins.toString().padStart(2, '0');
  const secsStr = secs.toString().padStart(2, '0');
  
  document.getElementById('timerText').innerText = `${minsStr}:${secsStr}`;
}

// Submit Mock Exam
function submitMockExam() {
  clearInterval(timerInterval);
  mockExamActive = false;
  mockExamSubmitted = true;
  
  // Calculate results
  let correct = 0;
  let totalAttempted = 0;
  
  currentQuestionsList.forEach(q => {
    const chosen = userAnswersState[q.id];
    if (chosen && chosen.length > 0) {
      totalAttempted++;
      if (checkAnswerCorrectness(q, chosen)) {
        correct++;
      }
    }
  });
  
  const accuracy = totalAttempted > 0 ? Math.round((correct / totalAttempted) * 100) : 0;
  const gradePercent = Math.round((correct / currentQuestionsList.length) * 100);
  
  // Trigger results view overlay or modal/card update
  renderMockResultsView(correct, currentQuestionsList.length, gradePercent, totalAttempted);
  
  saveStateToLocalStorage();
  renderQuestionNav();
  renderActiveQuestion();
  updateStats();
}

// Render Results Page layout dynamically
function renderMockResultsView(correct, total, percent, attempted) {
  const cardEl = document.getElementById('questionCard');
  if (!cardEl) return;
  
  cardEl.innerHTML = `
    <div class="results-card">
      <h3 class="panel-title" style="font-size: 1.75rem; margin: 0;">Mock Exam Completed</h3>
      
      <div class="results-radial" style="--percent: ${percent};">
        <div class="results-percentage">${percent}%</div>
      </div>
      
      <div class="result-badge">${percent >= 50 ? '🛡️ Exam Passed' : '⚠️ Exam Failed'}</div>
      
      <div class="summary-details">
        <div class="summary-row">
          <span>Correct Answers:</span>
          <strong>${correct} / ${total}</strong>
        </div>
        <div class="summary-row">
          <span>Attempted Questions:</span>
          <strong>${attempted} / ${total}</strong>
        </div>
        <div class="summary-row">
          <span>Accuracy Rate:</span>
          <strong>${attempted > 0 ? Math.round((correct / attempted) * 100) : 0}%</strong>
        </div>
        <div class="summary-row">
          <span>Time Allowed:</span>
          <strong>${Math.round((total * SECONDS_PER_QUESTION) / 60)} Mins</strong>
        </div>
      </div>

      <div class="card-actions" style="width: 100%; border: none; padding: 0; margin-top: 1rem; justify-content: center; gap: 1rem;">
        <button class="btn btn-primary" onclick="reviewMockExam()">Review Answers</button>
        <button class="btn" onclick="resetQuizState()">Retake Quiz</button>
      </div>
    </div>
  `;
}

function reviewMockExam() {
  // Restore question card view but keep lock states so explanations render
  currentQuestionIndex = 0;
  
  // Reset card structure to template
  resetCardHtmlTemplate();
  
  renderActiveQuestion();
  renderQuestionNav();
  updateStats();
}

function resetCardHtmlTemplate() {
  const cardEl = document.getElementById('questionCard');
  if (!cardEl) return;
  
  cardEl.innerHTML = `
    <div class="question-meta">
      <span id="questionCategory" class="question-category">Topic Category</span>
      <span id="questionTypeBadge" class="question-type-badge">MCQ</span>
    </div>
    <h3 id="questionText" class="question-text">Loading question content...</h3>
    <form id="optionsForm" class="options-list" onsubmit="event.preventDefault();"></form>
    <div id="explanationContainer" class="explanation-container" style="display: none;">
      <div class="explanation-title">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="16" x2="12" y2="12"></line>
          <line x1="12" y1="8" x2="12.01" y2="8"></line>
        </svg>
        <span>Core Logic Explanation</span>
      </div>
      <p id="explanationText" class="explanation-text"></p>
    </div>
    <div class="card-actions">
      <div class="nav-actions">
        <button id="btnPrev" class="btn" onclick="prevQuestion()" aria-label="Previous Question">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
          <span>Back</span>
        </button>
        <button id="btnNext" class="btn" onclick="nextQuestion()" aria-label="Next Question">
          <span>Next</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>
      <button id="btnAction" class="btn btn-primary" onclick="handleActionButtonClick()">Check Answer</button>
    </div>
  `;
}

// Reset entire quiz progress
function resetQuizState() {
  const confirmVal = confirm("Are you sure you want to reset all quiz progress and scores?");
  if (!confirmVal) return;
  
  userAnswersState = {};
  checkedQuestionsState = {};
  mockExamActive = false;
  mockExamSubmitted = false;
  currentQuestionIndex = 0;
  
  if (timerInterval) clearInterval(timerInterval);
  document.getElementById('timerContainer').style.display = 'none';
  
  // Revert back to practice mode on reset
  quizMode = 'practice';
  document.getElementById('modeMock').classList.remove('active');
  document.getElementById('modePractice').classList.add('active');
  
  localStorage.removeItem('userAnswersState');
  localStorage.removeItem('checkedQuestionsState');
  localStorage.removeItem('quizMode');
  localStorage.removeItem('currentQuestionIndex');
  localStorage.removeItem('currentCategory');
  
  resetCardHtmlTemplate();
  filterQuestions();
  renderCategoryList();
  renderQuestionNav();
  renderActiveQuestion();
  updateStats();
}

// LocalStorage Synchronization
function saveStateToLocalStorage() {
  localStorage.setItem('userAnswersState', JSON.stringify(userAnswersState));
  localStorage.setItem('checkedQuestionsState', JSON.stringify(checkedQuestionsState));
  localStorage.setItem('quizMode', quizMode);
  localStorage.setItem('currentQuestionIndex', currentQuestionIndex.toString());
  localStorage.setItem('currentCategory', currentCategory);
}

function loadStateFromLocalStorage() {
  try {
    const answers = localStorage.getItem('userAnswersState');
    if (answers) userAnswersState = JSON.parse(answers);
    
    const checked = localStorage.getItem('checkedQuestionsState');
    if (checked) checkedQuestionsState = JSON.parse(checked);
    
    const mode = localStorage.getItem('quizMode');
    if (mode) quizMode = mode;
    
    const index = localStorage.getItem('currentQuestionIndex');
    if (index) currentQuestionIndex = parseInt(index, 10);
    
    const category = localStorage.getItem('currentCategory');
    if (category) currentCategory = category;
  } catch (e) {
    console.error("Failed to parse localStorage values", e);
  }
}

// Theme toggler (Dark / Light)
function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
}

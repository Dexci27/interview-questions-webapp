let totalTime = 0;

function countTime() {
    let p = document.getElementById("time");
    p.innerHTML = maxTime;
    let time = p.innerHTML*1
    intervalId = setInterval(function () {
        time -= 1;
        if (time < 0) {
            clearInterval(intervalId);
            intervalId = null;
            restartCounting();
        } else {
            p.innerHTML = time;
        }
    },
        1000);

    changeQuestion();

    if (numOfCounts === 1) {
        var startButton = document.getElementById("startButton");
        startButton.onclick = null;
    }
};

function restartCounting() {
    numOfCounts += 1;
    let p = document.getElementById("time");
    if (numOfCounts <= maxCount) {
        if (p.innerHTML === "0") {
            totalTime += maxTime;
        }
        countTime();
    } else {
        if (p.innerHTML === "0") {
            totalTime += maxTime;
        }
        p.innerHTML = `Count down finished, totalTime : ${totalTime}`;
        

        let questionArea = document.getElementById("question");
        questionArea.innerHTML = "";
    }
}

function changeQuestion() {
    let pauseButton = document.getElementById("pauseButton");
    if (pauseButton.innerHTML !== "Pause") {
        return;
    }


    let questionArea = document.getElementById("question");
    let randomQuestion = questionsList[Math.floor(Math.random() * questionsList.length)];

    while (answeredQuestionsList.includes(randomQuestion)) {
        randomQuestion = questionsList[Math.floor(Math.random() * questionsList.length)];
    }
    answeredQuestionsList.push(randomQuestion);
    questionArea.innerHTML = randomQuestion;
}

function passQuestion() {
    let pauseButton = document.getElementById("pauseButton");
    if (pauseButton.innerHTML !== "Pause") {
        return;
    }


    if (answeredQuestionsList.length !== 0) {
        let p = document.getElementById("time");
        let time = p.innerHTML*1;
        totalTime += time;

        clearInterval(intervalId);
        intervalId = null;
        restartCounting();
    };
    if (numOfCounts === maxCount) {
        var nextButton = document.getElementById("nextButton")
        nextButton.innerHTML = "Finish";
    }
};

function pauseTime() {
    if (answeredQuestionsList.length === 0) {
        return
    }
    let p = document.getElementById("time");
    let time = p.innerHTML*1;
    p.innerHTML = time;
    clearInterval(intervalId);
    intervalId = null;

    let pauseButton = document.getElementById("pauseButton");
    pauseButton.innerHTML = "Resume";
    pauseButton.onclick = resumeTime;

}

function resumeTime() {
    let p = document.getElementById("time");
    let time = p.innerHTML*1;
    let initialMaxTime = maxTime;
    maxTime = time;
    countTime();

    let pauseButton = document.getElementById("pauseButton");
    pauseButton.innerHTML = "Pause";
    pauseButton.onclick = pauseTime;
    maxTime = initialMaxTime;
}

let intervalId;
let buttonsList = document.getElementsByClassName("button");
let numOfCounts = 1;


let maxCount = 5;
let maxTime = 10;
let answeredQuestionsList = [];

const questionsList = [
  "Tell me about yourself.",
  "Why are you interested in this position?",
  "What do you know about our company?",
  "What are your greatest strengths?",
  "What is your biggest weakness?",
  "Why should we hire you?",
  "Describe a challenging situation and how you handled it.",
  "Tell me about a time you worked in a team.",
  "How do you handle pressure or stress?",
  "What motivates you?",
  "Where do you see yourself in five years?",
  "Describe a time you showed leadership.",
  "Tell me about a time you failed and what you learned.",
  "How do you prioritize your tasks?",
  "Describe a conflict you had and how you resolved it.",
  "What is your greatest professional achievement?",
  "How do you handle feedback or criticism?",
  "Why did you choose your field of study?",
  "What skills are you currently improving?",
  "How do you manage your time effectively?",
  "Describe a time you solved a difficult problem.",
  "How do you adapt to new environments or changes?",
  "Tell me about a time you met a tight deadline.",
  "What does success mean to you?",
  "How do you stay organized?",
  "Describe a project you are proud of.",
  "How do you handle multiple responsibilities?",
  "Tell me about a time you took initiative.",
  "What type of work environment do you prefer?",
  "How do you deal with mistakes?",
  "What are your career goals?",
  "How do you approach learning new skills?",
  "Tell me about a time you helped someone.",
  "How do you ensure quality in your work?",
  "Describe a time you had to learn something quickly.",
  "How do you handle repetitive tasks?",
  "What role do you usually take in a team?",
  "How do you communicate complex ideas to others?",
  "Tell me about a time you exceeded expectations.",
  "How do you handle uncertainty?",
  "What tools or technologies are you comfortable with?",
  "How do you stay motivated during long projects?",
  "Describe a time you had to make a difficult decision.",
  "How do you handle constructive criticism?",
  "What makes you different from other candidates?",
  "How do you measure your performance?",
  "Tell me about a time you managed a conflict in a group.",
  "What are you passionate about outside of work or school?",
  "How do you handle failure?",
  "Do you have any questions for us?"
];


/* Problems remaining to solve :
1- Find a better way to unable the use of the changeQuestion and passQuestion functions when the time is paused;
2- Make a restart button to restart the countdown entirely
*/

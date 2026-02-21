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
let questionsList = [];
let answeredQuestionsList = [];

let studyPlansQuestions = ["Why do you want to study in the US?", "Why don't you study in Congo ?", "What are you planning to study?", "How did you get interested in your field of study ?", "What do you plan to do during your free time", "Why do you think that you are qualified to receive the VISA to study in the US today ?"];

let universityChoiceQuestions = ["Why did you choose ALA ?", "How did you register at ALA ?", "How did you discover ALA ?", "Why did you apply for an English program if you already know how to speak English ?", "Why don't you directly do the TOEFL here instead of going for an English program in the USA ?", "Why don't you do an English Program here in Congo ?", "Where is your school located?", "Who are you in contact with at ALA ?", "How many different English Programs did you apply to?", "At which university will you study after you have completed the ALA English program ?", "Which airport is close to ALA ? (know more about your university)", "Tell me more about the city in which ALA is located ?", "Tell me about the state in which ALA is located ?", "What is the tuition cost and living expenses for attending your university ?"];

let academicAbilityQuestions = ["What is your high school diploma and when did you get it ?", "What have you been doing since you got your high school diploma ?", "For how much time have you been studying in an English environment ?"];

let financialAbilityQuestions = ["How are you planning to finance your education?", "Who is sponsoring you?", "What is the profession of your sponsor?", "What is the annual income of your sponsor ?", "You are still a minor, who will take care of you there ?", "why is there a hole in the bank statement ?", "Do you plan on working while you are studying in the US?", "Since when do you live with your sponsor ?", "Where do you live ?", "For how much time have you been living at that address ?"];

let PostGraduationQuestions = ["What do you plan to do after your studies ?", "Do you plan to return to your home country after completing your studies?", "If you have a job proposal in the United States, will you stay there to work ?", "How do you plan to help your country when you'll come back ?", "Do you have family, relatives, or friends in the US?", "Do you have a job or career in mind post-graduation?", "What will convince me that you are going to return back to Congo at the end of your studies ?"];

let listOfQuestions = [studyPlansQuestions, universityChoiceQuestions, academicAbilityQuestions, financialAbilityQuestions, PostGraduationQuestions];

listOfQuestions.forEach(function (element) {
    element.forEach(value => questionsList.push(value));
});


/* Problems remaining to solve :
1- Find a better way to unable the use of the changeQuestion and passQuestion functions when the time is paused;
2- Make a restart button to restart the countdown entirely
*/
let startbtn = document.querySelector(".start_btn");
let infobox = document.querySelector(".info_box");
let exitbtn = infobox.querySelector(".buttons .quit");
let restartbtn = document.querySelector(".buttons .restart");
let quizbox = document.querySelector(".quiz_box");
let quetext = quizbox.querySelector(".Que_text");
let optionbox = quizbox.querySelector(".options");
let nextbtn = quizbox.querySelector(".next_btn");
let totalQue = document.querySelector(".footer .totalQ");
let countQue = document.querySelector(".footer .countQ");
let rezbox = document.querySelector(".result-box");
let RtotalQ = document.querySelector(".total-que span");
let RrightA= document.querySelector(".right-ans span");
let RwrongA = document.querySelector(".wrong-ans span");
let percentage = document.querySelector(".percentage span");
let againQuiz = document.querySelector(".result-footer .again-quiz");
let quit = document.querySelector(".result-footer .exit");


let checkmark = `<i class="fa fa-check"></i>`;
let wrongmark = `<i class="fa fa-times"></i>`;

startbtn.onclick = ()=>{
    infobox.classList.add("activeInfo");
}
exitbtn.onclick = ()=>{
    infobox.classList.remove("activeInfo");
}
restartbtn.onclick = ()=>{
    infobox.classList.remove("activeInfo");
    quizbox.classList.add("activeQuiz");
    
}
let queindex = 0;
let rightans = 0;
let wrongans =  0;
countQue.innerText = queindex+1;
showQuestion(queindex);
function showQuestion(q_index){
    quetext.innerText = questions[q_index].num+". "+ questions[q_index].question;
let totalopt = "";
for(let i = 0; i < questions[0].options.length; i++){
    totalopt += `<div class="option">${questions[queindex].options[i]}</div>`;
}
optionbox.innerHTML = totalopt;

let Alloptions = optionbox.querySelectorAll(".option")
    for(let j=0; j<Alloptions.length; j++){
        Alloptions[j].setAttribute("onclick","userAnswer(this)");
    }
    nextbtn.classList.add("inactive");
}

nextbtn.onclick = ()=> {
    queindex++;
   if(questions.length > queindex){
    countQue.innerText = queindex+1;
    showQuestion(queindex);
   }else{
    console.log("Question Complete");
    quizbox.classList.add("inactive");
    rezbox.classList.remove("inactive");
    RrightA.innerText = rightans;
    RwrongA.innerText =wrongans;
    percentage.innerText = ((rightans*100)/questions.length).toFixed(2)+"%";
   }

   if(questions.length-1 == queindex ){
    nextbtn.innerText = "Finish Question"

   }
}

function userAnswer(Answer) {
let userAns = Answer.innerText;
let correctAns = questions[queindex].answer;
let Alloptions2 = optionbox.querySelectorAll(".option");

nextbtn.classList.remove("inactive");
if (userAns == correctAns) {
    console.log("%c right", "color:green");
    Answer.classList.add("correct");
    Answer.insertAdjacentHTML("beforeend", checkmark);
    rightans++;
    
}else{
    console.log("%c wrong", "color:red");
    Answer.classList.add("wrong");
    Answer.insertAdjacentHTML("beforeend", wrongmark);
    wrongans++;

    for(let i=0; i<Alloptions2.length; i++){
        if(Alloptions2[i].innerText==correctAns){
            Alloptions2[i].classList.add("correct");
            Alloptions2[i].insertAdjacentHTML("beforeend", checkmark);
        }
    }
}

    for(let j=0; j<Alloptions2.length; j++){
        Alloptions2[j].classList.add("disabled")
    }
}

totalQue.innerText = questions.length;
RtotalQ.innerText = questions.length;

//last button
againQuiz.onclick = () => {
    quizbox.classList.remove("inactive");
    rezbox.classList.add("inactive");

    reset() 
}

quit.onclick = () => {
    startbtn.classList.remove("inactive");
    rezbox.classList.add("inactive");
    reset() 
}

function reset() {
    queindex = 0;
    rightans = 0;
    wrongans =  0;
   countQue.innerText = queindex+1;
   nextbtn.innerText = "Next Question";
   showQuestion(queindex);
}
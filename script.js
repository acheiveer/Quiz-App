const quizdata=[
    {
        question: "What is the purpose of an algorithm?",
   
          a: "To design user interfaces",
          b: "To write code",
          c: "To solve a problem",
          d: "To test software",
        correct: "c"
    },{
        question: "What is the time complexity of a linear search algorithm?",
        a: "O(1)",
        b: "O(log n)",
        c: "O(n)",
        d: "O(n^2)",
        correct: "c"
    },{
        question: "Which of the following is an example of a high-level programming language?",
   
      a: "Assembly language",
      b: "C++",
      c: "Java",
      d: "Machine language",
    
    correct: "c"
    },{
        question: "What is the purpose of a compiler?",
        
          a: "To execute code",
          b: "To debug code",
          c: "To translate source code into machine code",
          d: "To optimize code",
        
        correct: "c"
    },{
        question: "What is a binary tree?",
   
      a: "A tree with only one child node",
      b: "A tree with two child nodes",
      c: "A tree with no child nodes",
      d: "A tree with more than two child nodes",
    
    correct: "b"
    },{
        question: "Which data structure is based on the Last-In-First-Out (LIFO) principle?",
    
      a: "Stack",
      b: "Queue",
      c: "Array",
      d: "List",
    
    correct: "a"
    },{
        question: "What is the time complexity of a bubble sort algorithm?",
   
      a: "O(1)",
      b: "O(log n)",
      c: "O(n)",
      d: "O(n^2)",
   
    correct: "d"
    },{
        question: "What is an example of a sorting algorithm that has a worst-case time complexity of O(n log n)?",

      a: "Bubble sort",
      b: "Insertion sort",
      c: "Selection sort",
      d: "Merge sort",

    correct: "d"
    },{
        question: "What is recursion?",
   
      a: "A programming technique where a function calls itself",
      b: "A programming technique where a function calls another function",
      c: "A programming technique where a function uses a loop",
      d: "A programming technique where a function uses if-else statements",
    
    correct: "a"
    },{
        question: "What is the purpose of a database?",
    
      a: "To store and retrieve data",
      b: "To design user interfaces",
      c: "To write code",
      d: "To test software",
    
    correct: "a"
    }

]

const quiz=document.getElementById('quiz'); 
const answerEls= document.querySelectorAll('.answer');


const questionEl= document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text= document.getElementById('c_text');
const d_text= document.getElementById('d_text');
const submitbtn =document.getElementById('submit');



let currentquiz=0;
let score =0;


loadQuiz();

function loadQuiz(){
   deselectanswer();
    const currentquizdata=quizdata[currentquiz];
    questionEl.innerText=currentquizdata.question;
    a_text.innerText=currentquizdata.a;
    b_text.innerText=currentquizdata.b;
    c_text.innerText=currentquizdata.c;
    d_text.innerText=currentquizdata.d;
}

function getselected(){
    let answer=undefined;

    answerEls.forEach((answerEl)=>{
       if(answerEl.checked){
        answer=answerEl.id;
       }
    });
    return answer;
   
}

function deselectanswer(){
   answerEls.forEach((answerEl) => {
    answerEl.checked=false;
   });
}

submitbtn.addEventListener('click' , ()=>{
   
    const answer=getselected();
    if(answer){
        if(answer===quizdata[currentquiz].correct){
            score++;
        }

        currentquiz++;
      if(currentquiz<quizdata.length){
        loadQuiz();
       }
     else{
        quiz.innerHTML = `<h2>Your answered correctly
          ${score}/${quizdata.length} questions</h2>
          <button onclick="location.reload()">Reload</button>`;
       } 
     
    }



   
   
    
    
});
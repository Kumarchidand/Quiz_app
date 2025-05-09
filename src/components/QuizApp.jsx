import React, { useState } from "react";
import "./QuizApp.css";

const allQuestions = [
  {
    question: "Where was our first date?",
    options: ["Temple", "Park", "Cafe", "Beach"],
    answer: "Temple",
  },
  {
    question: "Where did we go on our second date?",
    options: ["Park", "Temple", "Zoo", "Cafe"],
    answer: "Park",
  },
  {
    question: "What is my favorite color?",
    options: ["Red", "Blue", "Black", "Green"],
    answer: "Black",
  },
  {
    question: "What food do I love the most?",
    options: ["Pizza", "Paneer", "Burger", "Biryani"],
    answer: "Paneer",
  },
  {
    question: "What nickname do you give me?",
    options: ["Babu", "Love", "Dhono", "Jaanu"],
    answer: "Dhono",
  },
  {
    question: "Which song reminds me of you?",
    options: ["Zalima", "Tum Hi Ho", "Perfect", "Photograph"],
    answer: "Zalima",
  },
  {
    question: "When did we meet the second time?",
    options: ["14 March", "10 Feb", "1 Jan", "25 Dec"],
    answer: "14 March",
  },
  {
    question: "What do you say to me most at night?",
    options: ["Bye", "Love You", "Tata", "Good Night"],
    answer: "Tata",
  },
  {
    question: "What do I ask for in a romantic mood?",
    options: ["Hug", "Gift", "Chumma", "Smile"],
    answer: "Chumma",
  },
  {
    question: "What do you like most in our relationship?",
    options: ["Love", "Time", "Value and Trust", "Respect", "All"],
    answer: "All",
  },
  {
    question: "Where i am staying for stydying?",
    options: ["Cuttack", "BBSR", "KalingaNagar", "Tomo Gahre"],
    answer: "KalingaNagar",
  },
  {
    question: "What is both of us favourite ?",
    options: ["Tiger", "Rabbit", "Dog", "Cat"],
    answer: "Cat",
  },
  {
    question: "What do I do when I get jealous?",
    options: ["Silent", "Talk more", "Complain", "Smile"],
    answer: "Silent",
  },
  {
    question: "What’s both of  favorite series?",
    options: ["Action+Horror", "Action+romance", "Action+cartoon", "Doremon"],
    answer: "Action+romance",
  },
  {
    question: "What’s my cute name for you?",
    options: ["Cutie", "Item", "Moti", "Sweetie"],
    answer: "Item",
  },
  {
    question: "What time do you wake up?",
    options: ["Before-6 AM", "Before-8 AM", "After-10 AM", "Mo ichha😶"],
    answer: "Mo ichha😶",
  },
  {
    question: "My/Your favorite God ?",
    options: ["Jaga", "Ramo", "Lord Siva", "Laxmi"],
    answer: "Lord Siva",
  },
  {
    question: "What’s your last number you mentioed in insta?",
    options: ["3", "5", "7", "9"],
    answer: "7",
  },
  { question: "What you do when you upset/angry on me?", options: ["mo shaho ao kotha heba darkar nai", "mo ichha", "bekari kotha koahni ", "mo ans kahibi ni maun"], answer: "mo shaho ao kotha heba darkar nai" },
  { question: "?", options: ["Love Letter Generator", "Portfolio Website", "Voting App", "Door Lock System"], answer: "Love Letter Generator" },
  {
  question: "How much do I love and care about you?",
  options: [
    "A little",
    "Jemiti tomo nakhara utei paribi – mote sei bhabare bhala pae & care kare",
    "More than words can say",
    "You are my everything"
  ],
  answer: "Jemiti tomo nakhara utei paribi – mote sei bhabare bhala pae & care kare"
}



];

const QuizApp = () => {
  const [total, setTotal] = useState(10);
  const [startQuiz, setStartQuiz] = useState(false);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const handleStart = () => {
    setStartQuiz(true);
    setCurrent(0);
    setScore(0);
    setUserAnswers([]);
    setShowResult(false);
  };

  const handleAnswer = (selected) => {
    const correct = selected === selectedQuestions[current].answer;
    if (correct) setScore(score + 1);

    setUserAnswers([
      ...userAnswers,
      { ...selectedQuestions[current], selected, correct },
    ]);

    const next = current + 1;
    if (next < total) {
      setCurrent(next);
    } else {
      setShowResult(true);
    }
  };

  const selectedQuestions = allQuestions.slice(0, total);

  return (
    <div className="quiz-container">
      <h2>💖 How Well Do Maun Know Me?</h2>

      {!startQuiz && (
        <div>
          <label>
            Choose Number of Questions: &nbsp;
            <select onChange={(e) => setTotal(parseInt(e.target.value))}>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
            </select>
          </label>
          <br />
          <button onClick={handleStart}>Start Quiz</button>
        </div>
      )}

      {startQuiz && !showResult && (
        <div className="quiz-question">
          <h4>
            {current + 1}. {selectedQuestions[current].question}
          </h4>
          <div className="options">
            {selectedQuestions[current].options.map((opt, i) => (
              <button key={i} onClick={() => handleAnswer(opt)}>
                {opt}
              </button>
            ))}
          </div>
        </div>
      )}

      {showResult && (
        <div className="result">
          <h3>
            You scored {score} out of {total}
          </h3>
          {score === total && <p>You know me better than I know myself! 💘</p>}
          {score >= total / 2 && score < total && (
            <p>You're doing great baby 😍</p>
          )}
          {score < total / 2 && <p>Let’s go on another date to fix this 😉</p>}

          <div className="review">
            <h4>📝 Your Answers Review:</h4>
            <ul>
              {userAnswers.map((q, idx) => (
                <li key={idx}>
                  <strong>
                    {idx + 1}. {q.question}
                  </strong>
                  <br />
                  Your answer:{" "}
                  <span style={{ color: q.correct ? "green" : "red" }}>
                    {q.selected}
                  </span>{" "}
                  <br />
                  Correct answer:{" "}
                  <span style={{ color: "blue" }}>{q.answer}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizApp;

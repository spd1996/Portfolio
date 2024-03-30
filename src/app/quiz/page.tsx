'use client'
// App.tsx

import React, { useState, useEffect } from 'react';
import PageContainer from '../components/pagecontainer';

interface AnswerOption {
  answerText: string;
  isCorrect: boolean;
}

interface Question {
  questionText: string;
  answerOptions: AnswerOption[];
}

const QuizGame: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [showScore, setShowScore] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [timer, setTimer] = useState<number>(0); // Timer in seconds
  const [questionOrder, setQuestionOrder] = useState<number[]>([]);
  const [quizStarted, setQuizStarted] = useState<boolean>(false);
  const [skippedQuestions, setSkippedQuestions] = useState<number[]>([]);

  const questions: Question[] = [
    {
      questionText: 'What is the chemical symbol for water?',
      answerOptions: [
        { answerText: 'H2O', isCorrect: true },
        { answerText: 'CO2', isCorrect: false },
        { answerText: 'NaCl', isCorrect: false },
        { answerText: 'O2', isCorrect: false },
      ],
    },
    {
      questionText: 'Who painted the Mona Lisa?',
      answerOptions: [
        { answerText: 'Leonardo da Vinci', isCorrect: true },
        { answerText: 'Pablo Picasso', isCorrect: false },
        { answerText: 'Vincent van Gogh', isCorrect: false },
        { answerText: 'Michelangelo', isCorrect: false },
      ],
    },
    {
      questionText: 'What is the powerhouse of the cell?',
      answerOptions: [
        { answerText: 'Mitochondria', isCorrect: true },
        { answerText: 'Nucleus', isCorrect: false },
        { answerText: 'Ribosome', isCorrect: false },
        { answerText: 'Endoplasmic reticulum', isCorrect: false },
      ],
    },
    {
      questionText: 'Who is the author of "1984"?',
      answerOptions: [
        { answerText: 'George Orwell', isCorrect: true },
        { answerText: 'J.R.R. Tolkien', isCorrect: false },
        { answerText: 'Ernest Hemingway', isCorrect: false },
        { answerText: 'F. Scott Fitzgerald', isCorrect: false },
      ],
    },
    {
      questionText: 'What is the tallest mountain in the world?',
      answerOptions: [
        { answerText: 'Mount Everest', isCorrect: true },
        { answerText: 'K2', isCorrect: false },
        { answerText: 'Kangchenjunga', isCorrect: false },
        { answerText: 'Makalu', isCorrect: false },
      ],
    },
    {
      questionText: 'Who is known as the "Father of Computers"?',
      answerOptions: [
        { answerText: 'Charles Babbage', isCorrect: true },
        { answerText: 'Alan Turing', isCorrect: false },
        { answerText: 'Steve Jobs', isCorrect: false },
        { answerText: 'Bill Gates', isCorrect: false },
      ],
    },
    {
      questionText: 'What is the chemical symbol for gold?',
      answerOptions: [
        { answerText: 'Au', isCorrect: true },
        { answerText: 'Ag', isCorrect: false },
        { answerText: 'Fe', isCorrect: false },
        { answerText: 'Cu', isCorrect: false },
      ],
    },
    {
      questionText: 'Who discovered penicillin?',
      answerOptions: [
        { answerText: 'Alexander Fleming', isCorrect: true },
        { answerText: 'Louis Pasteur', isCorrect: false },
        { answerText: 'Marie Curie', isCorrect: false },
        { answerText: 'Gregor Mendel', isCorrect: false },
      ],
    },
    {
      questionText: 'Which planet is known as the "Red Planet"?',
      answerOptions: [
        { answerText: 'Mars', isCorrect: true },
        { answerText: 'Venus', isCorrect: false },
        { answerText: 'Jupiter', isCorrect: false },
        { answerText: 'Mercury', isCorrect: false },
      ],
    },
    {
      questionText: 'Who developed the theory of relativity?',
      answerOptions: [
        { answerText: 'Albert Einstein', isCorrect: true },
        { answerText: 'Isaac Newton', isCorrect: false },
        { answerText: 'Stephen Hawking', isCorrect: false },
        { answerText: 'Niels Bohr', isCorrect: false },
      ],
    },
    {
      questionText: 'Which country is known as the "Land of the Rising Sun"?',
      answerOptions: [
        { answerText: 'Japan', isCorrect: true },
        { answerText: 'China', isCorrect: false },
        { answerText: 'South Korea', isCorrect: false },
        { answerText: 'Vietnam', isCorrect: false },
      ],
    },
    {
      questionText: 'Who wrote "The Great Gatsby"?',
      answerOptions: [
        { answerText: 'F. Scott Fitzgerald', isCorrect: true },
        { answerText: 'Ernest Hemingway', isCorrect: false },
        { answerText: 'John Steinbeck', isCorrect: false },
        { answerText: 'Mark Twain', isCorrect: false },
      ],
    },
    {
      questionText: 'What is the largest mammal in the world?',
      answerOptions: [
        { answerText: 'Blue Whale', isCorrect: true },
        { answerText: 'African Elephant', isCorrect: false },
        { answerText: 'Giraffe', isCorrect: false },
        { answerText: 'Hippopotamus', isCorrect: false },
      ],
    },
    {
      questionText: 'Who is the Greek god of the sea?',
      answerOptions: [
        { answerText: 'Poseidon', isCorrect: true },
        { answerText: 'Zeus', isCorrect: false },
        { answerText: 'Hades', isCorrect: false },
        { answerText: 'Apollo', isCorrect: false },
      ],
    },
    {
      questionText: 'What is the capital of Australia?',
      answerOptions: [
        { answerText: 'Canberra', isCorrect: true },
        { answerText: 'Sydney', isCorrect: false },
        { answerText: 'Melbourne', isCorrect: false },
        { answerText: 'Perth', isCorrect: false },
      ],
    },
    {
      questionText: 'Who painted "Starry Night"?',
      answerOptions: [
        { answerText: 'Vincent van Gogh', isCorrect: true },
        { answerText: 'Pablo Picasso', isCorrect: false },
        { answerText: 'Leonardo da Vinci', isCorrect: false },
        { answerText: 'Claude Monet', isCorrect: false },
      ],
    },
    {
      questionText: 'What is the smallest bone in the human body?',
      answerOptions: [
        { answerText: 'Stapes (in the ear)', isCorrect: true },
        { answerText: 'Femur', isCorrect: false },
        { answerText: 'Radius', isCorrect: false },
        { answerText: 'Tibia', isCorrect: false },
      ],
    },
    {
      questionText: 'Who wrote "Romeo and Juliet"?',
      answerOptions: [
        { answerText: 'William Shakespeare', isCorrect: true },
        { answerText: 'Jane Austen', isCorrect: false },
        { answerText: 'Emily Brontë', isCorrect: false },
        { answerText: 'Charles Dickens', isCorrect: false },
      ],
    },
  ]


  useEffect(() => {
    const shuffledQuestions = questions.map((question, index) => index).sort(() => Math.random() - 0.5);
    setQuestionOrder(shuffledQuestions);
  }, []);

  useEffect(() => {
    if (timer > 0 && quizStarted) {
      const timerInterval = setInterval(() => {
        setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
      }, 1000);

      return () => clearInterval(timerInterval);
    }
  }, [timer, quizStarted]);

  const startQuiz = (): void => {
    setQuizStarted(true);
    setTimer(15); // Set initial timer value
  };

  const handleAnswerButtonClick = (isCorrect: boolean): void => {
    setIsCorrect(isCorrect);
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestion: number = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setIsCorrect(null);
      setTimer(15); // Reset timer for the next question
    } else {
      setShowScore(true);
    }
  };

  const skipQuestion = (): void => {
    const skippedQuestionIndex = currentQuestion;
    setSkippedQuestions([...skippedQuestions, skippedQuestionIndex]);
    const nextQuestion: number = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setIsCorrect(null);
      setTimer(15); // Reset timer for the next question
    } else {
      setShowScore(true);
    }
  };

  const resetQuiz = (): void => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setIsCorrect(null);
    setTimer(0);
    setQuizStarted(false);
    setSkippedQuestions([]);
    const shuffledQuestions = questions.map((question, index) => index).sort(() => Math.random() - 0.5);
    setQuestionOrder(shuffledQuestions);
  };

  if (questionOrder.length === 0) {
    return <PageContainer>Loading...</PageContainer>;
  }

  return (
    <PageContainer>
      <div className="flex flex-col items-center justify-center h-[88vh] bg-gray-300">
      {!quizStarted ? (
        <div className="text-center">
          <img src="/race.svg" alt="My App Logo" width={300} height={300} />
          <div className="text-3xl font-bold mb-4">Welcome to the Quiz!</div>
          <button
            onClick={startQuiz}
            className="bg-accent-blue hover:bg-accent-purple text-white font-bold py-2 px-4 rounded"
          >
            Start Quiz
          </button>
        </div>
      ) : (
        <div className="text-center">
          {showScore ? (
            <div className="text-center">
              <div className="text-3xl font-bold mb-4">Quiz Completed!</div>
              <div className="text-xl mb-2">You scored {score} out of {questions.length}!</div>
              <button
                onClick={resetQuiz}
                className="bg-accent-blue hover:bg-accent-purple text-white font-bold py-2 px-4 rounded"
              >
                Restart Quiz
              </button>
            </div>
          ) : (
            <>
              <div className="text-2xl font-bold mb-4">Question {currentQuestion + 1}</div>
              <div className="text-xl mb-6">{questions[questionOrder[currentQuestion]].questionText}</div>
              <div>
                {questions[questionOrder[currentQuestion]].answerOptions.map((answerOption, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}
                    className={`${
                      isCorrect !== null && answerOption.isCorrect === isCorrect
                        ? 'bg-accent-green'
                        : isCorrect !== null && !answerOption.isCorrect
                        ? 'bg-accent-red'
                        : 'bg-gray-200'
                    } hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded m-2`}
                    disabled={isCorrect !== null}
                  >
                    {answerOption.answerText}
                  </button>
                ))}
              </div>
              {isCorrect === false && (
                <div className="text-accent-red font-semibold mt-2">Correct Answer: {questions[questionOrder[currentQuestion]].answerOptions.find(option => option.isCorrect)?.answerText}</div>
              )}
              <div className="text-xl mt-4">Time Left: {timer} seconds</div>
              {timer === 0 && (
                <div className="text-accent-red font-semibold mt-2">Time's up!</div>
              )}
              <button
                onClick={skipQuestion}
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-4"
              >
                Skip Question
              </button>
            </>
          )}
        </div>
      )}
    </div>
    </PageContainer>
  );
};

export default QuizGame;

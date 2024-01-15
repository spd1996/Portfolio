'use client'
// App.tsx

import React, { useState } from 'react';
import PageContainer from "../components/pagecontainer";

interface QuizProps {
  questions: Array<{
    question: string;
    options: string[];
    correctAnswer: string;
  }>;
}

const Quiz: React.FC<QuizProps> = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState<string[]>([]);
  const [score, setScore] = useState(0);

  const handleAnswerSelect = (selectedAnswer: string) => {
    const isCorrect = selectedAnswer === questions[currentQuestion].correctAnswer;

    setUserAnswers((prevAnswers) => {
      const updatedAnswers = [...prevAnswers];
      updatedAnswers[currentQuestion] = selectedAnswer;
      return updatedAnswers;
    });

    setScore((prevScore) => (isCorrect ? prevScore + 1 : prevScore));
  };

  const handleNextQuestion = () => {
    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
  };

  const handlePreviousQuestion = () => {
    setCurrentQuestion((prevQuestion) => prevQuestion - 1);
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-primary border rounded-md">
      {currentQuestion < questions.length ? (
        <>
          <h2 className="text-2xl font-bold mb-4">{questions[currentQuestion].question}</h2>
          <div className="grid grid-cols-2 gap-4">
            {questions[currentQuestion].options.map((option) => (
              <button
                key={option}
                onClick={() => handleAnswerSelect(option)}
                className={`p-4 ${
                  userAnswers[currentQuestion] === option
                    ? 'text-primary bg-accent-blue'
                    : 'bg-accent-blue text-white'
                } rounded-md hover:bg-blue-600`}
              >
                {option}
              </button>
            ))}
          </div>
          <div className="mt-4 flex justify-between">
            {currentQuestion > 0 && (
              <button
                onClick={handlePreviousQuestion}
                className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Previous
              </button>
            )}
            {currentQuestion < questions.length - 1 && (
              <button onClick={handleNextQuestion} className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                Next
              </button>
            )}
          </div>
        </>
      ) : (
        // Display quiz results
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Quiz Completed</h2>
          <p>Your Score: {score}/{questions.length}</p>
          <ul className="mt-4">
            {questions.map((q, index) => (
              <li key={index} className={userAnswers[index] === q.correctAnswer ? 'text-accent-green' : 'text-accent-blue'}>
                {q.question} - Your Answer: {userAnswers[index]}, Correct Answer: {q.correctAnswer}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const App: React.FC = () => {
  const sampleQuestions = [
    {
      question: 'What is the capital of France?',
      options: ['Paris', 'Berlin', 'London', 'Madrid'],
      correctAnswer: 'Paris',
    },
    {
      question: 'Which programming language is this quiz written in?',
      options: ['JavaScript', 'TypeScript', 'Python', 'Java'],
      correctAnswer: 'TypeScript',
    },
    // Add more questions as needed
  ];

  return (
    <PageContainer>
          <div className="App">
      <h1 className="text-4xl font-bold text-center my-8">React Quiz App</h1>
      <Quiz questions={sampleQuestions} />
    </div>
    </PageContainer>
  );
};

export default App;



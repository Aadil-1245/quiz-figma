import React from "react";
import QuizCard from "../components/QuizCard";
import Mascot from "../components/Mascot";

const quizData = [
  { question: "What sound does a cat make?", options: ["Bhau-Bhau", "Meow-Meow", "Oink-Oink"], correct: 1 },
  { question: "What would you find in your fridge?", options: ["Shoes", "Ice Cream", "Books"], correct: 1 },
  { question: "What color are bananas?", options: ["Blue", "Yellow", "Red"], correct: 1 },
  { question: "How many stars are in the sky?", options: ["Two", "Infinite", "One Hundred"], correct: 1 }
];

export default function Page() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="frame">
        <div className="card">
          <QuizCard data={quizData} />
          <Mascot />
        </div>
      </div>
    </main>
  );
}

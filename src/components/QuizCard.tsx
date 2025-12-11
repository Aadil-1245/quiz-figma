"use client";
import React, { useState, useEffect, useRef } from "react";

export type QuizItem = { question: string; options: string[]; correct: number };
type Props = { data: QuizItem[] };

export default function QuizCard({ data }: Props) {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(new Array(data.length).fill(null));
  const [showResult, setShowResult] = useState<number | null>(null);

  function choose(i: number) {
    const next = [...answers];
    next[current] = i;
    setAnswers(next);
  }

  function nextQ() {
    if (current < data.length - 1) setCurrent((s) => s + 1);
  }

  function prevQ() {
    if (current > 0) setCurrent((s) => s - 1);
  }

  function submit() {
    const correctCount = answers.reduce((acc: number, a: number | null, idx: number) => 
      (a === data[idx].correct ? acc + 1 : acc), 0);
    const percent = Math.round((correctCount / data.length) * 100);
    setShowResult(percent);
  }

  function restart() {
    setAnswers(new Array(data.length).fill(null));
    setCurrent(0);
    setShowResult(null);
  }

  if (showResult !== null) return <AnimatedResult percent={showResult} onRestart={restart} />;

  return (
    <div>
      <h1 className="title">Test Your Knowledge</h1>
      <div className="subtitle">Answer all questions to see your results</div>

      <div className="progress-row" role="list" aria-label="progress">
        {data.map((_, i) => (
          <div key={i} className={`progress-dot ${i <= current ? "active" : ""}`} aria-hidden />
        ))}
      </div>

      <div className="question-card" role="heading" aria-level={2}>
        {current + 1}. {data[current].question}
      </div>

      <div className="options" role="list" aria-label="options">
        {data[current].options.map((opt, idx) => {
          const isSelected = answers[current] === idx;
          return (
            <button
              key={idx}
              className={`option ${isSelected ? "selected" : ""}`}
              onClick={() => choose(idx)}
              aria-pressed={isSelected}
            >
              {opt}
            </button>
          );
        })}
      </div>

      <div className="nav">
        <button className="circle-btn" onClick={prevQ} disabled={current === 0} aria-label="Previous">
          ←
        </button>

        {current === data.length - 1 ? (
          <button className="submit" onClick={submit} aria-label="Submit Quiz">
            Submit
          </button>
        ) : (
          <button className="circle-btn" onClick={nextQ} aria-label="Next" disabled={answers[current] == null}>
            →
          </button>
        )}
      </div>
    </div>
  );
}

function AnimatedResult({ percent, onRestart }: { percent: number; onRestart: () => void }) {
  const [display, setDisplay] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    let start: number | null = null;
    const duration = 900;

    function step(ts: number) {
      if (start === null) start = ts;
      const elapsed = ts - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = Math.round(eased * percent);
      setDisplay(value);
      if (progress < 1) rafRef.current = requestAnimationFrame(step);
      else rafRef.current = null;
    }

    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    };
  }, [percent]);

  return (
    <div>
      <h1 className="title">Your Score</h1>
      <div style={{ textAlign: "center", fontSize: 56, fontWeight: 800, marginTop: 28 }}>{display}%</div>
      <div style={{ textAlign: "center", marginTop: 18 }}>
        <button className="submit" onClick={onRestart}>
          Start Again
        </button>
      </div>
    </div>
  );
}

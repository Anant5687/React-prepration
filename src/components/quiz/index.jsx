import React, { useCallback, useEffect, useMemo, useState } from 'react';

const Quiz = () => {
  const [timer, setTimer] = useState(0);
  const [showIndex, setShowIndex] = useState(0);
  const [correct, setCorrect] = useState(0);

  useEffect(() => {
    const counter = setInterval(() => setTimer((pre) => pre + 1), 1000);

    return () => clearInterval(counter);
  }, []);

  const questions = useMemo(
    () => [
      { id: 1, question: '2 + 2 = ?', options: [2, 3, 4, 5], answer: 4 },
      { id: 2, question: '5 * 3 = ?', options: [8, 15, 10, 20], answer: 15 },
      { id: 3, question: '10 / 2 = ?', options: [2, 4, 5, 8], answer: 5 },
    ],
    []
  );

  const onAnswerSelection = useCallback(
    (providedAns) => {
      const correct = questions?.[showIndex]?.answer === providedAns;

      if (correct) setCorrect((pre) => pre + 1);

      setShowIndex((pre) => pre + 1);
      setTimer(0);
    },
    [showIndex, questions]
  );

  useEffect(() => {
    if (timer % 5 === 0 && timer !== 0) {
      setTimer(0);
      setShowIndex((pre) => pre + 1);
    }
  }, [timer]);

  if (showIndex === questions?.length) {
    return (
      <h1>
        Quiz is over. your score is {correct} from {questions?.length} questions
      </h1>
    );
  }

  return (
    <div>
      Timer: {timer + 1}
      <br />
      What is the output for {questions?.[showIndex]?.question}
      Options:
      <br />
      <ul>
        {questions?.[showIndex]?.options?.map((ele, i) => (
          <li key={i} onClick={() => onAnswerSelection(ele)}>
            {ele}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Quiz;

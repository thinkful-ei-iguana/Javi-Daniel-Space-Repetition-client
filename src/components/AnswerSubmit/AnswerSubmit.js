import React, { useState } from 'react';
import './AnswerSubmit.css';

export default function AnswerSubmit(props) {

  const {
    nextWord, 
    totalScore, 
    wordCorrectCount,
    wordIncorrectCount,
  } = props.currentWord

  const handleSubmit = (e) => {
    e.preventDefault();
    props.submitGuess(props.guess);
  }

  const handleFormChange = (e) => {
    props.setGuess(e.target.value);
  }

  return (
    <div className="answer-submit">
      <div className="answer-submit-header">
        <h2 className="current-word">
          Translate the word:{''}
        </h2>
        <span className="word-to-translate">{nextWord}</span>
      </div>
      <p>{`Your total score is: ${totalScore}`}</p>
      <form 
        className="learn-guess-form"
        onSubmit={handleSubmit}
      >
        <label htmlFor="learn-guess-input" className="learn-guess-label">
          What's the translation for this word?
        </label>
        <input 
          type="text" 
          id="learn-guess-input" 
          placeholder="translation" 
          value={props.guess}
          onChange={handleFormChange}
          required 
        />
        <button type="submit" className="learn-guess-submit">
          Submit your answer
        </button>
      </form>
      <div>
        <p>{`You have answered this word correctly ${wordCorrectCount} times.`}</p>
        <p>{`You have answered this word incorrectly ${wordIncorrectCount} times.`}</p>
      </div>
    </div>
  )
}
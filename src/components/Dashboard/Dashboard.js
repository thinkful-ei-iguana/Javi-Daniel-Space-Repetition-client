import React, { useState, useEffect } from 'react'
import { useHistory, Link } from 'react-router-dom'
import config from '../../config'
import tokenService from '../../services/token-service'
import './Dashboard.css'

export default function Dashboard(props) {
  const [language, setLanguage] = useState({name: ''});
  const [words, setWords] = useState([]);
  let history = useHistory();

  useEffect(() => {
    fetch(`${config.API_ENDPOINT}/language`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${tokenService.getAuthToken()}`,
      }
    })
    .then(res => res.json())
    .then(data => {
      setLanguage(data.language);
      setWords(data.words);
    });
  }, [])

  return (
    <div className="dashboard-container">
      <h2>{language.name}</h2>
      <div className="words-to-practice">
        <h3>Words to practice</h3>
        
        <ul className="word-list">
          {words.map(word => {
            return (
              <li className="words-row" key={word.id}>
                <h4 className="word-span">{word.original}</h4>
                <div className="answer-count">
                  {`correct answer count: ${word.correct_count}`}
                </div>
                <div className="answer-count">
                  {`incorrect answer count: ${word.incorrect_count}`}
                </div>
              </li>
            )
          })}
        </ul>
        <div className="total-answers">
          {`Total correct answers: ${language.total_score}`}
        </div>
        <Link to='/learn' className="learn-btn">Start practicing</Link>
      </div>
    </div>
  );
}
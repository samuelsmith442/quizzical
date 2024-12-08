import { useState, useEffect } from 'react'
import Start from './components/Start'
import Quiz from './components/Quiz'
import { nanoid } from 'nanoid'

function App() {
  const [started, setStarted] = useState(false)
  const [questions, setQuestions] = useState([])
  const [selectedAnswers, setSelectedAnswers] = useState({})
  const [showResults, setShowResults] = useState(false)
  const [score, setScore] = useState(0)

  useEffect(() => {
    fetchQuestions()
  }, [])

  async function fetchQuestions() {
    try {
      const response = await fetch('https://opentdb.com/api.php?amount=5&type=multiple')
      const data = await response.json()
      
      setQuestions(data.results.map(q => ({
        ...q,
        id: nanoid(),
        all_answers: [...q.incorrect_answers, q.correct_answer].sort(() => Math.random() - 0.5)
      })))
    } catch (error) {
      console.error('Error fetching questions:', error)
    }
  }

  function handleStart() {
    setStarted(true)
  }

  function handleAnswerSelect(questionId, answer) {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }))
  }

  function checkAnswers() {
    if (showResults) {
      setStarted(false)
      setShowResults(false)
      setSelectedAnswers({})
      setScore(0)
      fetchQuestions()
      return
    }

    let newScore = 0
    questions.forEach(question => {
      if (selectedAnswers[question.id] === question.correct_answer) {
        newScore++
      }
    })
    setScore(newScore)
    setShowResults(true)
  }

  return (
    <main>
      {!started ? (
        <Start handleStart={handleStart} />
      ) : (
        <Quiz
          questions={questions}
          selectedAnswers={selectedAnswers}
          handleAnswerSelect={handleAnswerSelect}
          checkAnswers={checkAnswers}
          showResults={showResults}
          score={score}
        />
      )}
    </main>
  )
}

export default App

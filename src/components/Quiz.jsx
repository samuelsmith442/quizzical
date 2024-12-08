import { decode } from 'html-entities';
import PropTypes from 'prop-types';

export default function Quiz({ questions, selectedAnswers, handleAnswerSelect, checkAnswers, showResults, score }) {
    function getAnswerClassName(question, answer) {
        if (!showResults) return selectedAnswers[question.id] === answer ? 'selected' : ''
        
        if (answer === question.correct_answer) return 'correct'
        if (selectedAnswers[question.id] === answer) return 'incorrect'
        return 'dimmed'
    }

    return (
        <div className="quiz-container">
            {questions.map(question => (
                <div key={question.id} className="question-container">
                    <h2>{decode(question.question)}</h2>
                    <div className="answers-container">
                        {question.all_answers.map(answer => (
                            <button
                                key={answer}
                                className={`answer-button ${getAnswerClassName(question, answer)}`}
                                onClick={() => handleAnswerSelect(question.id, answer)}
                                disabled={showResults}
                            >
                                {decode(answer)}
                            </button>
                        ))}
                    </div>
                </div>
            ))}
            <div className="quiz-footer">
                {showResults && 
                    <p className="score">You scored {score}/5 correct answers</p>
                }
                <button 
                    className="check-answers-button"
                    onClick={checkAnswers}
                >
                    {showResults ? "Play again" : "Check answers"}
                </button>
            </div>
        </div>
    )
}

Quiz.propTypes = {
    questions: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        question: PropTypes.string.isRequired,
        correct_answer: PropTypes.string.isRequired,
        all_answers: PropTypes.arrayOf(PropTypes.string).isRequired
    })).isRequired,
    selectedAnswers: PropTypes.object.isRequired,
    handleAnswerSelect: PropTypes.func.isRequired,
    checkAnswers: PropTypes.func.isRequired,
    showResults: PropTypes.bool.isRequired,
    score: PropTypes.number.isRequired
}
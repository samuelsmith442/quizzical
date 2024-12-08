import PropTypes from 'prop-types'

export default function Start({ handleStart }) {
    return (
        <div className="start-screen">
            <h1>Quizzical</h1>
            <p>Test your knowledge with our curated questions!</p>
            <p>Ready to challenge yourself?</p>
            <button className="start-button" onClick={handleStart}>Start quiz</button>
        </div>
    )
}

Start.propTypes = {
    handleStart: PropTypes.func.isRequired
}

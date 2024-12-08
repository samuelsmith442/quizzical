import PropTypes from 'prop-types'

export default function Start({ handleStart }) {
    return (
        <div className="start-screen">
            <h1>Quizzical</h1>
            <p>Some description if needed</p>
            <button className="start-button" onClick={handleStart}>Start quiz</button>
        </div>
    )
}

Start.propTypes = {
    handleStart: PropTypes.func.isRequired
}

export default function Question(props) {
    const answersArray = props.answers

    return (
        <div className="questionContainer">
            <h3 className="question">{props.question}</h3>
            <div className="answerContainer">
                <button className="answer incorrect" onClick={props.handleClick}>{answersArray[0]}</button>
                <button className="answer chosen" onClick={props.handleClick}>{answersArray[1]}</button>
                <button className="answer" onClick={props.handleClick}>{answersArray[2]}</button>
                <button className="answer correct" onClick={props.handleClick}>{answersArray[3]}</button>
            </div>
        </div>
    )
}
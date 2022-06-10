export default function Question(props) {
    const answersArray = props.answers

    return (
        <div className="questionContainer">
            <h3 className="question">{props.question}</h3>
            <div className="answerContainer">
                <button className="answer incorrect">{answersArray[0]}</button>
                <button className="answer chosen">{answersArray[1]}</button>
                <button className="answer">{answersArray[2]}</button>
                <button className="answer correct">{answersArray[3]}</button>
            </div>
        </div>
    )
}
export default function Question(props) {
    const answersArray = props.answers

    return (
        <div className="questionContainer">
            <h3 className="question">{props.question}</h3>
            <div className="answerContainer">
                <div className="answer active">{answersArray[0]}</div>
                <div className="answer">{answersArray[1]}</div>
                <div className="answer">{answersArray[2]}</div>
                <div className="answer">{answersArray[3]}</div>
            </div>
        </div>
    )
}
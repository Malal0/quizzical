export default function Question(props) {
    const answersArray = props.answers

    const quantity = answersArray.length

    let answerOrder = []

    for (let i = 0; i < quantity; i++) {
        let randNum = Math.floor(Math.random() * 4)

        if (answerOrder.includes(randNum)) {
            i--
        } else {
            answerOrder.push(randNum)
        }
    }

    return (
        <div className="questionContainer">
            <h3 className="question">{props.question}</h3>
            <div className="answerContainer">
                <button className={"answer " + props.addedClass} onClick={props.handleClick}>{answersArray[answerOrder[0]]}</button>
                <button className={"answer " + props.addedClass} onClick={props.handleClick}>{answersArray[answerOrder[1]]}</button>
                <button className={"answer " + props.addedClass} onClick={props.handleClick}>{answersArray[answerOrder[2]]}</button>
                <button className={"answer " + props.addedClass} onClick={props.handleClick}>{answersArray[answerOrder[3]]}</button>
            </div>
        </div>
    )
}
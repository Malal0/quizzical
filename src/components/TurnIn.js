export default function TurnIn(props) {
    return (
        <div>
            <p>You scored {props.answersCorrect} correct answers</p>
            <button className="submit" onClick={props.handleClick}>check answers</button>
        </div>
    )
}
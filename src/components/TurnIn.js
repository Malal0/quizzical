export default function TurnIn(props) {
    return (
        <div>
            <p>You scored {props.answersCorrect} correct answers</p>
            <button onClick={props.handleClick}></button>
        </div>
    )
}
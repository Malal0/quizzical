import Questions from "./Questions"
import TurnIn from "./TurnIn"

export default function Questionnaire() {
    return (
        <div>
            <Questions />
            <TurnIn answersCorrect={answers that are correct / total questions}/>
        </div>
    )
}
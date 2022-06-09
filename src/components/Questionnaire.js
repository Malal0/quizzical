import Question from "./Question"
import TurnIn from "./TurnIn"

export default function Questionnaire(props) {
    const qArray = props.data



    const questions = qArray.map(ques => {
        let allAnswers = []

        ques.incorrect_answers.forEach(wrongAnswer => {
            allAnswers.push(wrongAnswer)
        });
        allAnswers.push(ques.correct_answer)
        console.log(allAnswers)
        return (
            < Question question={ques.question} answers={ques.correct_answer} />
        )

    })

    return (
        <div>
            {questions}
            <TurnIn answersCorrect={props.answersCorrect} handleClick={props.handleClick} />
        </div>
    )
}
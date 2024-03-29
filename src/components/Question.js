import React from "react"
import Option from "./Option"

export default function Question(props) {

    const allAnswers = props.answersArray

    const answers = allAnswers.map(answer => {
        let selected = false

        function answerAction() {
            selected = !selected
            console.log(selected)
        }



        return (
            <Option answer={answer} handleClick={answerAction} isSelected={selected} value={answer === allAnswers.correct_answer ? 1 : 0} />
        )
    })

    return (
        <div className="questionContainer">
            <h3 className="question">{props.theQuestion}</h3>
            <div className="answerContainer">
                {answers}
            </div>
        </div>
    )
}
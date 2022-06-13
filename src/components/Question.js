import React from "react"
import Option from "./Option"

export default function Question(props) {
    function answerAction() {
        console.log("schmee")
    }

    const allAnswers = props.answersArray

    const answers = allAnswers.map(answer => {
        return (
            <Option handleClick={answerAction} answer={answer} />
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
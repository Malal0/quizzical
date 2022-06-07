import React from "react"
import Title from "./components/Title"
import Questionnaire from "./components/Questionnaire"
import TurnIn from "./components/TurnIn"

export default function App() {
    const [quizStarted, setQuizStarted] = React.useState(false)

    function startQuiz() {
        setQuizStarted(true)
    }
    return (
        <div>
            {quizStarted ?
                <Questionnaire /> :
                <Title handleClick={startQuiz} />}
        </div>
    )
}
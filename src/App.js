import React from "react"
import Title from "./components/Title"
import Questions from "./components/Questions"

export default function App() {
    const [quizStarted, setQuizStarted] = React.useState(false)

    function startQuiz() {
        setQuizStarted(true)
    }
    return (
        <div>
            {quizStarted ?
                <Questions /> :
                <Title handleClick={startQuiz} />}
        </div>
    )
}
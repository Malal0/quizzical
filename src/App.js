import React from "react"
import Title from "./components/Title"
import Questionnaire from "./components/Questionnaire"

export default function App() {
    const [quizStarted, setQuizStarted] = React.useState(false)

    const [questionsData, setQuestionsData] = React.useState([])

    React.useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=5&category=23&difficulty=medium&type=multiple")
            .then(res => res.json())
            .then(data => setQuestionsData(data.results))
    }, [])
    console.log(questionsData)

    function startQuiz() {
        setQuizStarted(true)
    }

    const answersCorrect = "4 / 5"
    function checkTheAnswers() {
        console.log("checking answers")
    }

    return (
        <div className="App">
            {quizStarted ?
                <Questionnaire data={questionsData} /> :
                <Title handleClick={startQuiz} />}
        </div>
    )
}
import React from "react"
import Title from "./components/Title"
import Question from "./components/Question"
import TurnIn from "./components/TurnIn"

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

    function answerAction(e) {
        console.log(e.target.innerText)
        console.log(e.target.parentNode.parentNode)
    }

    const questions = questionsData.map(ques => {
        let allAnswers = []

        ques.incorrect_answers.forEach(wrongAnswer => {
            allAnswers.push(wrongAnswer)
        });
        allAnswers.push(ques.correct_answer)
        //console.log(allAnswers)
        return (
            < Question question={ques.question} answers={allAnswers} correctAnswer={ques.correct_answer} handleClick={answerAction} />
        )

    })

    return (
        <div className="App">
            {quizStarted ?
                <div>
                    {questions}
                    <TurnIn />
                </div> :
                <Title handleClick={startQuiz} />}
        </div>
    )
}
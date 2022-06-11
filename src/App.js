import React from "react"
import Title from "./components/Title"
import TurnIn from "./components/TurnIn"

export default function App() {
    const [quizStarted, setQuizStarted] = React.useState(false)

    const [questionsData, setQuestionsData] = React.useState([])

    React.useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=5&category=19&difficulty=easy&type=multiple")
            .then(res => res.json())
            .then(data => setQuestionsData(data.results))
    }, [])

    function startQuiz() {
        setQuizStarted(true)
    }

    const answersCorrect = "4 / 5"
    function checkTheAnswers() {
        console.log("checking answers")
    }

    const questions = questionsData.map(ques => {
        let allAnswers = []
        let addedClass = ""
        let wasSelected = false

        ques.incorrect_answers.forEach(wrongAnswer => {
            allAnswers.push(wrongAnswer)
        });
        allAnswers.push(ques.correct_answer)

        function answerAction(e) {
            console.log("click")
        }

        return (
            <div className="questionContainer">
                <h3 className="question">{ques.question}</h3>
                <div className="answerContainer">
                    <button className={"answer " + addedClass} onClick={answerAction}>{allAnswers[0]}</button>
                    <button className={"answer " + addedClass} onClick={answerAction}>{allAnswers[1]}</button>
                    <button className={"answer " + addedClass} onClick={answerAction}>{allAnswers[2]}</button>
                    <button className={"answer " + addedClass} onClick={answerAction}>{allAnswers[3]}</button>
                </div>
            </div>
        )

    })

    return (
        <div className="App">
            {quizStarted ?
                <div>
                    {questions}
                    <TurnIn answersCorrect={answersCorrect} />
                </div> :
                <Title handleClick={startQuiz} />}
            <div className="blob1"></div>
            <div className="blob2"></div>
        </div>
    )
}
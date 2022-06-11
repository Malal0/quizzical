import React from "react"
import Title from "./components/Title"
import Question from "./components/Question"
import TurnIn from "./components/TurnIn"

export default function App() {
    const [quizStarted, setQuizStarted] = React.useState(false)

    const [questionsData, setQuestionsData] = React.useState([])

    React.useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=5&category=19&difficulty=medium&type=multiple")
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

    const [answeredCorrectly, setAnsweredCorrectly] = React.useState(false);

    const questions = questionsData.map(ques => {
        let allAnswers = []
        let addedClass = ""

        ques.incorrect_answers.forEach(wrongAnswer => {
            allAnswers.push(wrongAnswer)
        });
        allAnswers.push(ques.correct_answer)

        function answerAction(e) {
            if (ques.correct_answer === e.target.innerText) {
                console.log("correct")
            } else {
                console.log("false")
            }
        }

        return (
            < Question question={ques.question} answers={allAnswers} handleClick={answerAction} addedClass={addedClass} />
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
            <div className="blob1"></div>
            <div className="blob2"></div>
        </div>
    )
}
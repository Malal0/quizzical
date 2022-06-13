import React from "react"
import Title from "./components/Title"
import TurnIn from "./components/TurnIn"
import Question from "./components/Question"

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
    //      ignore
    const answersCorrect = "4 / 5"
    function checkTheAnswers() {
        console.log("checking answers")
    }
    //      ignore

    function answerAction(e) {
        console.log("click")
    }

    const theQuestions = questionsData.map(ques => {
        let allAnswers = []

        ques.incorrect_answers.forEach(wrongAnswer => {
            allAnswers.push(wrongAnswer)
        });
        allAnswers.push(ques.correct_answer)


        return (
            // <div className="questionContainer">
            //     <h3 className="question">{ques.question}</h3>
            //     <div className="answerContainer">
            //         <button className={"answer "} onClick={answerAction}>{allAnswers[0]}</button>
            //         <button className={"answer "} onClick={answerAction}>{allAnswers[1]}</button>
            //         <button className={"answer "} onClick={answerAction}>{allAnswers[2]}</button>
            //         <button className={"answer "} onClick={answerAction}>{allAnswers[3]}</button>
            //     </div>
            // </div>
            <Question theQuestion={ques.question} answersArray={allAnswers} />
        )

    })

    return (
        <div className="App">
            {quizStarted ?
                <div>
                    {theQuestions}
                    <TurnIn answersCorrect={answersCorrect} />
                </div> :
                <Title handleClick={startQuiz} />}
            <div className="blob1"></div>
            <div className="blob2"></div>
        </div>
    )
}
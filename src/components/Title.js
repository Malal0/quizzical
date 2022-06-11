export default function Title(props) {
    return (
        <div className="titleContainer">
            <h1 className="title">quizzical</h1>
            <p>A short history quiz</p>
            <button className="submit" onClick={props.handleClick}>Start quiz</button>
        </div>
    )
}
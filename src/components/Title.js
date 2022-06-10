export default function Title(props) {
    return (
        <div>
            <h1>quizzical</h1>
            <p>A short history quiz</p>
            <button className="submit" onClick={props.handleClick}>Start quiz</button>
        </div>
    )
}
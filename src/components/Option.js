import React from "react"

export default function Option(props) {
    const [style, setStyle] = React.useState("answer")
    const [selected, setSelected] = React.useState(false)

    function whenClicked() {
        setSelected(!selected)
    }

    React.useEffect(() => {
        changeStyle()
    }, [selected])

    function changeStyle() {
        if (selected) {
            setStyle("answer chosen")
        } else if (selected === false) {
            setStyle("answer")
        }
    }

    return (
        <button className={style} onClick={whenClicked}>{props.answer}</button>
    )
}
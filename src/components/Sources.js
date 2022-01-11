import React from "react"
import "../style/sources.css"

export default function Sources(props) {

    const text = props.clicked ? props.claim : props.id

    return (
            <button
                className="sources-btn"
                onClick={props.toggle}
            >
            {text}
            </button>
    )
}


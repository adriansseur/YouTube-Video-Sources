import React from "react"
import "../style/sources.css"

export default function Sources(props) {

    // takes an object, checks it's key, and renders accordingly
    function processEvidenceObj(obj) {
        const objKey = Object.keys(obj)[0]
        let evidenceElement
        if (objKey === "commentary") {
            evidenceElement = <p className="commentary">Commentary</p>
        } else if (objKey === "source") {
            evidenceElement = <p className="source">Source</p>
        } else if (objKey === "link") {
            evidenceElement = <p className="link">Link</p> // make link button
        } else if (objKey === "quote") {
            evidenceElement = <p className="quote">Quote</p> //handle imgs
        } else {
            evidenceElement = <p className="error">Error</p>
        }
        return evidenceElement
    }

    const evidenceElements = props.evidence.map(evidenceObj => {
        return (
            // pass each object in each evidence array in data/claims.js
            processEvidenceObj(evidenceObj)
        )
    })

    return (
        <div className="claim-container">
            <h3>{props.claim}</h3>
            <button className="sources-btn" onClick={props.toggle}>Play</button>
            {evidenceElements}
        </div>
    )
}


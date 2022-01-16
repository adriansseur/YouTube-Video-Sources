import React from "react"

export default function Sources(props) {

    // takes an object, checks it's key, and renders accordingly
    function processEvidenceObj(obj) {
        const objKey = Object.keys(obj)[0]
        let evidenceElement
        if (objKey === "commentary") {
            evidenceElement = <p className="commentary">{obj.commentary}</p>
        } else if (objKey === "source") {
            evidenceElement = <p className="source">{obj.source}</p>
        } else if (objKey === "link") {
            evidenceElement = <a className="link" href={obj.link} target="_blank">Source</a> // make link button
        } else if (objKey === "quote") {
            // check if quote is image
            if (obj.quote.startsWith("/images")) {
                evidenceElement = 
                <div className="quote">
                    <img className="quote-img" src={process.env.PUBLIC_URL + obj.quote} alt="...Image Detected" />
                </div>
            } else {
                evidenceElement = <p className="quote">
                    <span className="quotation-marks">" </span>{obj.quote}<span className="quotation-marks"> "</span>
                    </p>
            }
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
            <button className="play-btn" onClick={props.toggle}>Play</button>
            <p className="claim">{props.claim}</p>
            {evidenceElements}
        </div>
    )
}


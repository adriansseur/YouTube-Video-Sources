import React from "react"
import Title from "./components/Title"
import Video from "./components/Video"
import Sources from "./components/Sources"
import claims from "./data/claims"
import ytdata from "./data/ytdata"

export default function App() {

    const [claimBoxes, setClaimBoxes] = React.useState(claims)

    const [ytUrlObj, setYtUrlObj] = React.useState(ytdata[0])

    const originalUrl = ytdata[0].url
    
    // Runs when btns get clicked, updates claimBoxes state to register click
    function toggle(id) {
        setClaimBoxes(prevClaimBoxes => {
            return prevClaimBoxes.map((claimBox) => {
                return (
                claimBox.id === id
                ? 
                {
                    ...claimBox,
                    clicked: !claimBox.clicked
                }
                : 
                claimBox
                )
            })
        })

    }
    
    // If claimBoxes state changes, ytUrlObj state will change too
    React.useEffect(function() {
        setYtUrlObj(prevYtUrlObj => {
            let newUrlObj = prevYtUrlObj
            for (let i = 0; i < claimBoxes.length; i++) {
                console.log(claimBoxes[i].clicked) // console.log
                if (claimBoxes[i].clicked) {
                    console.log(`${claimBoxes[i].id} was clicked`) // console.log
                    newUrlObj = {
                        url: `${originalUrl}?start=${claimBoxes[i].start}&end=${claimBoxes[i].end}&autoplay=1`
                    }
                    
                } else {
                    console.log("clicked not found") // console.log
                }
            }
            return newUrlObj
        })
    }, [claimBoxes])
    
    console.log(ytUrlObj) // console.log

    const claimBoxElements = claimBoxes.map(claimBox => (
        <Sources 
            key={claimBox.id}
            id={claimBox.id}
            clicked={claimBox.clicked}
            claim={claimBox.claim}
            evidence={claimBox.evidence}
            toggle={() => {toggle(claimBox.id)}}
        />
    ))

    return (
        <>
            <Title />
            <Video url={ytUrlObj.url}/>
            <div className="sources-container">
                {claimBoxElements}
            </div>
            
        </>
    )
}
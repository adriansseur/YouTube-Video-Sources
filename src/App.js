import React from "react"
import data from "./data"
import Title from "./components/Title"
import Video from "./components/Video"
import Sources from "./components/Sources"
import ytdata from "./ytdata"

export default function App() {

    const [claimBoxes, setClaimBoxes] = React.useState(data)

    const [ytUrlObj, setYtUrlObj] = React.useState(ytdata[0])
    const originalUrl = ytdata[0].url

    function toggle(id) {
        setClaimBoxes(prevClaimBoxes => {
            return prevClaimBoxes.map((claimBox) => {
                return (
                claimBox.id === id
                ? 
                {
                    ...claimBox,
                    clicked: !claimBox.clicked,
                }
                : 
                claimBox
                )
            })
        })

        // YT player only responding for 1st button
        // and only when pressing twice
        // and only the first time
        setYtUrlObj(prevYtUrlObj => {
            for (let i = 0; i < claimBoxes.length; i++) {
                if (claimBoxes[i].clicked) {
                    console.log(`${claimBoxes[i].id} was clicked`)
                    return (
                        {
                            url: `${originalUrl}?start=${claimBoxes[i].start}&end=${claimBoxes[i].start + claimBoxes[i].duration}&autoplay=1`
                        }
                    )
                } else {
                    console.log("clicked not found")
                    return prevYtUrlObj
                }
            }
        })
    }
    console.log(ytUrlObj)

    const claimBoxElements = claimBoxes.map(claimBox => (
        <Sources 
            key={claimBox.id}
            id={claimBox.id}
            clicked={claimBox.clicked}
            toggle={() => toggle(claimBox.id)}
            claim={claimBox.claim}
        />
    ))

    return (
        <>
            <Title />
            <Video 
                url={ytUrlObj.url}
            />
            <div className="sources-container">
                {claimBoxElements}
            </div>
            
        </>
    )
}
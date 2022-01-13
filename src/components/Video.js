import React from "react"

export default function Video(props) {
    return (
        <div className="video-container">
            <iframe id="yt-video" width="100%" height="315" src={props.url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
    )
}
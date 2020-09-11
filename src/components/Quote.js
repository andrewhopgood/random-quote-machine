import React from 'react'
import "../App.css"

export default function Quote({ text, author }) {
    console.log("render")
    return (
        <div >
            <div id="text">"{text}"</div>
            <div id="author">~{author}</div>

        </div>
    )
}

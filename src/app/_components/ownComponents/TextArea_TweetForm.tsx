'use client'
import { useState, useLayoutEffect, useRef } from 'react'

function updateTextAreaSize(textArea?: HTMLTextAreaElement){
    if (textArea == null) return

    textArea.style.height = "0"
    textArea.style.height = `${textArea.scrollHeight}px`
}

export default function TextArea_TweetForm() {
    const [inputValue, setInputValue] = useState("")
    const textAreaRef = useRef<HTMLTextAreaElement>(null)

    useLayoutEffect(() => {
        updateTextAreaSize(textAreaRef.current)
    }, [inputValue])

  return (
    <textarea
    ref={textAreaRef}
    style={{ height: 0 }}
    value={inputValue}
    onChange={e => setInputValue(e.target.value)}
    className="flex-grow resize-none overflow-hidden p-4 text-lg outline-none"
    placeholder="What's happening?"
    />
)
}

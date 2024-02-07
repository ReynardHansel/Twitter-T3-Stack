"use client";
import { useState, useLayoutEffect, useRef, useCallback } from "react";

function updateTextAreaSize(textArea?: HTMLTextAreaElement) {
  if (textArea == null) return;

  textArea.style.height = "0";
  textArea.style.height = `${textArea.scrollHeight}px`;
}

export default function TextArea_TweetForm() {
  const [inputValue, setInputValue] = useState("");
  const textAreaRef = useRef<HTMLTextAreaElement>();

  const inputRef = useCallback((textArea: HTMLTextAreaElement) => {
    updateTextAreaSize(textArea);
    textAreaRef.current = textArea;
  }, []);
  //? [] means it's only going to be called 1 time (when the textArea is called/made)

  useLayoutEffect(() => {
    updateTextAreaSize(textAreaRef.current);
  }, [inputValue]);

  return (
    <textarea
      ref={inputRef}
      style={{ height: 0 }}
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      className="flex-grow resize-none overflow-hidden p-4 text-lg outline-none"
      placeholder="What's happening?"
    />
  );
}

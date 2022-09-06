import React from 'react'
import "./input.css"
import { useState, useEffect } from "react";

function Input({ notes, setNotes, status, setCompletedFiltered, setActiveFiltered }) {

  const initialValue = "";
  const [inputNote, setInputNote] = useState(initialValue);
  
  // Input Box Change
  const onChange = (e) => {
    setInputNote(e.target.value)
  }
  
  // Input Data
  const onSubmit = (e) => {
    e.preventDefault()
    if (inputNote.trim() === "") {
      return false
    }
    notes = JSON.parse(localStorage.getItem("item"))
    setNotes([...notes, { id: notes.length + 1, data: inputNote.trim(), checked: false }])
  }

  // Selected Button
  const allSelected = () => {
    setNotes(JSON.parse(localStorage.getItem("item")))
    notes = notes.map(change => {
      return {
        data: change.data,
        id: change.id,
        checked: notes.every(item => item.checked === true) ? false : true
      }
    })
    setNotes(notes)
    lastButtonChange()
  }

  // Deleted Button
  const lastButtonChange = () => {
    if (notes.some(item => item.checked) === false) {
      document.querySelector("#lastButton").classList.add("clearButtonNone")
    } else {
      document.querySelector("#lastButton").classList.remove("clearButtonNone")
    }
  }

  // Trigger
  useEffect(() => {
    localStorage.setItem("item", JSON.stringify(notes))
    setInputNote(initialValue)
    if (status === "completed") {
      setCompletedFiltered(notes.filter(item => item.checked === true))
    } else if (status === "active") {
      setActiveFiltered(notes.filter(item => item.checked === false));
    }
  }, [notes])

  return (
    <form onSubmit={onSubmit} className='header'>
      <i onClick={allSelected} className="fa-solid fa-chevron-down"></i>
      <input onChange={onChange} value={inputNote} placeholder='Please add note!' />
      <button onClick={onSubmit} className="button">Add</button>
    </form>
  )
}

export default Input
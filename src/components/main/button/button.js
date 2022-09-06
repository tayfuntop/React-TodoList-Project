import React, { useEffect } from 'react'
import "./button.css"

function Button({ notes, setNotes, status, setStatus, setCompletedFiltered, setActiveFiltered }) {

  // Completed List Number
  let number = 0;
  notes.filter((item) => {
    return item.checked === false ? number++ : number;
  });

  // All Button
  const allButtonClick = () => {
    setStatus("all")
  }

  // Active Button
  const activeButtonClick = () => {
    setActiveFiltered(notes.filter(item => item.checked === false));
    setStatus("active")
  }

  // Completed Button
  const completedButtonClick = () => {
    setCompletedFiltered(notes.filter(item => item.checked === true))
    setStatus("completed")
  }

  // Deleted Completed
  const deleteCompleted = () => {
    let index = 0;
    setNotes(JSON.parse(localStorage.getItem("item")))
    notes = notes.filter(item => item.checked === false).map(item => {
      index++
      return {
        id: index,
        data: item.data,
        checked: item.checked
      }
    })
    setNotes(notes)
    if (notes.some(item => (item.checked)) === false) {
      document.querySelector("#lastButton").classList.add("clearButtonNone")
    }
  }

  return (<div className='footer'>
    <div className='note-number'>
      (<b>{number}</b>) <br /> items left
    </div>
    <div className='centerButtons'>
      <button onClick={allButtonClick}>
        All
      </button>
      <button checked={false} onClick={activeButtonClick}>
        Active
      </button>
      <button checked={false} onClick={completedButtonClick}>
        Completed
      </button>
    </div>
    <button id="lastButton" onClick={deleteCompleted} className='clearButtonNone'>
      Clear Completed
    </button>
  </div>
  )

}


export default Button
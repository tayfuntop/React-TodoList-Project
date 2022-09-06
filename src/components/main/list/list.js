import React from 'react'
import "./list.css"

function List({ notes, setNotes, status, completedFiltered, activeFiltered }) {

  // checked List
  const checked = (e) => {
    setNotes(JSON.parse(localStorage.getItem("item")))  // notes = olacak
    notes = notes.map(change => {    // notes = notes.map olacak
      return {
        data: change.data,
        id: change.id,
        checked: change.id.toString() === e.target.id.split(",")[0] ?
          !change.checked : change.checked
      }
    })
    setNotes(notes)
    lastButtonChange()
  }

  // Deleted button
  const lastButtonChange = () => {
    if (notes.some(item => item.checked) === false) {
      document.querySelector("#lastButton").classList.add("clearButtonNone")
    } else {
      document.querySelector("#lastButton").classList.remove("clearButtonNone")
    }
  }

  // List Box Change
  const change = (e) => {
    let id = e.target.id;
    setNotes(JSON.parse(localStorage.getItem("item")))
    setNotes(notes.map(item => {
      return {
        id: item.id,
        data: item.id === Number(id) ? e.target.value : item.data,
        checked: item.checked === false ? false : true
      }
    }))
  }

  // Deleted List
  const onClick = (e) => {
    let targetId = e.target.id;
    let index = 0;
    setNotes(JSON.parse(localStorage.getItem("item")))
    notes.splice((targetId - 1), 1)
    notes = notes.map(item => {
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

  if (status === "all") {
    return (
      <div id='list' className='container'>
        <ul className='ulList'>
          {notes.map((item, index) => {
            return <li key={index} id={item.id}>
              <input type="checkbox" checked={item.checked} onClick={checked} id={[item.id, item.checked]} className='checked' />
              <input className='inputLi' onChange={change} id={item.id} value={item.data} />
              <i onClick={onClick} id={item.id} className="fa-solid fa-xmark"></i>
            </li>
          })}
        </ul>
      </div>
    )
  } else if (status === "completed") {
    return (
      <div id='list' className='container'>
        <ul className='ulList'>
          {completedFiltered.map((item, index) => {
            return <li key={index} id={item.id}>
              <input type="checkbox" checked={item.checked} onClick={checked} id={[item.id, item.checked]} className='checked' />
              <input className='inputLi' onChange={change} id={item.id} value={item.data} />
              <i onClick={onClick} id={item.id} className="fa-solid fa-xmark"></i>
            </li>
          })}
        </ul>
      </div>
    )
  } else {
    return (
      <div id='list' className='container'>
        <ul className='ulList'>
          {activeFiltered.map((item, index) => {
            return <li key={index} id={item.id}>
              <input type="checkbox" checked={item.checked} onClick={checked} id={[item.id, item.checked]} className='checked' />
              <input className='inputLi' onChange={change} id={item.id} value={item.data} />
              <i onClick={onClick} id={item.id} className="fa-solid fa-xmark"></i>
            </li>
          })}
        </ul>
      </div>
    )
  }
}

export default List
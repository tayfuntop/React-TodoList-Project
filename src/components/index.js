import React from 'react'
import List from "./main/list/list";
import Input from "./main/input/input";
import Button from "./main/button/button";
import { useState } from "react";
import "./index.css"

function Index() {

  let arrayTask = JSON.parse(localStorage.getItem("item"));
  arrayTask = arrayTask != null ? arrayTask : [];
  const [note, setNote] = useState(arrayTask);
  const [completedFiltered, setCompletedFiltered] = useState(null)
  const [activeFiltered, setActiveFiltered] = useState(null)
  const [status, setStatus] = useState("all")

  return (
    <div className='main-display'>
      <h1>TO DO LIST</h1>
      <Input
        notes={note} setNotes={setNote}
        setCompletedFiltered={setCompletedFiltered}
        setActiveFiltered={setActiveFiltered}
        status={status}
      />
      <List
        notes={note} setNotes={setNote}
        completedFiltered={completedFiltered}
        setCompletedFiltered={setCompletedFiltered}
        activeFiltered={activeFiltered}
        setActiveFiltered={setActiveFiltered}
        status={status}
      />
      <Button
        notes={note} setNotes={setNote}
        completedFiltered={completedFiltered}
        setCompletedFiltered={setCompletedFiltered}
        activeFiltered={activeFiltered}
        setActiveFiltered={setActiveFiltered}
        status={status}
        setStatus={setStatus}
      />
    </div>
  )

}

export default Index
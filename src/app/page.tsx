"use client";
import { useState } from "react"
import 'bootstrap/scss/bootstrap.scss';

//Components
import Sidebar from "./compoents/sidebar/sidebar"
import Board from './compoents/board/board'
import data from './compoents/data.json';

//Styles
import './styles/all.scss'

export default function Home() {
  const [boardName, setBoardName] = useState(data.boards[0].name);

  function setBName (newName:any) {
    setBoardName(newName);
  }

  return (
    <div className="row">
      <div className="col-2">
        <Sidebar setBName={setBName}/>
      </div>
      <div className="col-10">
        <Board boardName={boardName}/>
      </div>
    </div>
  )
}
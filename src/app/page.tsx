"use client";
import { useState } from "react"

//Components
import Sidebar from "./compoents/sidebar/sidebar"
import Board from './compoents/board/board'

//Styles
import './styles/sidebar.scss'

//Plugins
import './styles/plugins/bootstrap.css'

export default function Home() {
  const boardNames = [];

  const [boardName, setBoardName] = useState('New Board Name');

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
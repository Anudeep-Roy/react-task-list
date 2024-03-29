"use client";
import { useState } from "react"

//Components
import Sidebar from "./compoents/sidebar/sidebar"
import Board from './compoents/board/board'
import data from './compoents/data.json';

//Styles
import './styles/all.scss'

export default function Home() {
  const [boardName, setBoardName] = useState(data.boards[0].name);
  const [currentIndex, setCurrentIndex] = useState(0);

  function setBName (newName:any) {
    setBoardName(newName);
    setCurrentIndex(data.boards.findIndex(title=> title.name == newName));
  }

  return (
    <div className="main-row">
      <div className="sidebar-col">
        <Sidebar data={data} setBName={setBName} currentIndex={currentIndex}/>
      </div>
      <div className="board-col">
        <Board data={data} boardName={boardName} currentIndex={currentIndex}/>
      </div>
    </div>
  )
}
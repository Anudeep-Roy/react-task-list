import { useState } from "react"
import BoardName from "./boardName"
import data from '../data.json';

export default function BoardList ({setBName}:any) {
    const [boardLength, setBoardLength] = useState(data.boards.length);

    return (
        <div className="board-list">
            <p>All Board ({boardLength})</p>
            <div className="board-names">
                <BoardName  setBName={setBName}/>
            </div>
        </div>
    )
}
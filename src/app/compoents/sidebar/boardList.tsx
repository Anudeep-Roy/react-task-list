import { useState } from "react"
import BoardName from "./boardName"

export default function BoardList ({setBName, currentIndex, data}:any) {
    const [boardLength, setBoardLength] = useState(data.boards.length);

    return (
        <div className="board-list">
            <p>All Board ({boardLength})</p>
            <div className="board-names">
                <BoardName data={data} setBName={setBName} currentIndex={currentIndex}/>
            </div>
        </div>
    )
}
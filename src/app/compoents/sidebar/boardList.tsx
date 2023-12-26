import BoardName from "./boardName"

export default function BoardList ({setBName}:any) {
    return (
        <div className="board-list">
            <p>All Board (3)</p>
            <div className="board-names">
                <BoardName  setBName={setBName}/>
            </div>
            
        </div>
    )
}
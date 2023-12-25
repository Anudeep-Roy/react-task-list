import BoardName from "./boardName"

export default function BoardList () {
    let name;
    return (
        <div className="board-list">
            <p>All Board (3)</p>
            <div className="board-names">
                <BoardName/>
            </div>
            
        </div>
    )
}
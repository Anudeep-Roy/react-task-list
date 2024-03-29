export default function BoardName ({setBName, currentIndex, data}:any) {
    
    return (
        <div className="board-name">
           {data.boards.map((board:any, index:number)=>(
                <a className={currentIndex == index ? 'active' : ''} key={index} onClick={()=>setBName(board.name)}>
                    <img src='/assets/icon-board.svg'/>
                    <h3>{board.name}</h3>
                </a>
           ))}
           <a className='new-board'>
                <img src='/assets/icon-board.svg'/>
                <h3>+ Create New Board</h3>
            </a>
        </div>
    )
}
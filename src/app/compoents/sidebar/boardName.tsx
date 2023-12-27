import data from '../data.json';

export default function BoardName ({setBName}:any) {
    
    return (
        <div className="board-name">
           {data.boards.map((board, index)=>(
                <a key={index}onClick={()=>setBName(board.name, index)}>
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
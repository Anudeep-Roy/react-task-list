import data from '../data.json';

export default function BoardName () {
    return (
        <div className="board-name">
           {data.boards.map((board, index)=>(
                <a href='#'>
                    <h3 key={index}>{board.name}</h3>
                </a>
           ))}
        </div>
    )
}
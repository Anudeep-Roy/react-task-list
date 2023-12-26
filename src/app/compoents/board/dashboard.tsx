import data from '../data.json';
import Task from './task';

export default function Dashboard ({boardName, currentIndex}:any) {
    return (
        <div className='dashboard'>
            <div className='row'>
                {data.boards[currentIndex].columns.map((name, index)=>
                    <div key={index} className="col-3">
                        <h4>{name.name}</h4>
                        {name.tasks.map((work, order)=>
                            <p>{work.title}</p>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}
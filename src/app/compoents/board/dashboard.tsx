import data from '../data.json';
import Task from './task';

export default function Dashboard ({currentIndex}:any) {

    return (
        <div className='dashboard'>
            <div className='row'>
                {data.boards[currentIndex].columns.map((task, i)=>
                    <div className="col-3" key={i}>
                        <h4 key={i}>{task.name}</h4>
                    </div>
                )}
            </div>
            <div className="row">
                {data.boards[currentIndex].columns.map((work, index)=>
                    <div className='col-3' key={index}>
                        {work.tasks.map((order, j)=>
                            <p key={j}>{order.title}</p>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}
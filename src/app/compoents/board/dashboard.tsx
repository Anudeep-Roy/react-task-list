import data from '../data.json';
import Task from './task';

export default function Dashboard ({currentIndex}:any) {
    return (
        <div className='dashboard'>
            <div className='row'>
                {data.boards[currentIndex].columns.map((task, i)=>
                    <div className="col-3" key={`task_${i}`}>
                        <h4 key={`task_heading${i}`}>{task.name}</h4>
                            {task.tasks.map((work, j)=>
                                <Task 
                                key={`task_work_${j}`}
                                work={work.title} 
                                sub={work.subtasks.length} 
                                fin = {work.subtasks.filter(item=>item.isCompleted == true).length}
                                />
                            )}
                    </div>
                )}
            </div>
        </div>
    )
}
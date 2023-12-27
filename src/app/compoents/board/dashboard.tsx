import { useState } from 'react';
import data from '../data.json';
import Task from './task';
import TaskModal from './taskModal';

export default function Dashboard ({currentIndex}:any) {

    const [currentWork, setCurrentWork] = useState('');
    const [currentFin, setCurrentFin] = useState('');
    const [currentSub, setCurrentSub] = useState('');
    
    function showModal (work:any, fin:any, sub:any) {
        setCurrentWork(work);
        setCurrentFin(fin);
        setCurrentSub(sub);
    }

    return (
        <div className='dashboard'>
            <div className='row'>
                <TaskModal currentWork={currentWork} currentFin={currentFin} currentSub={currentSub}/>
                {data.boards[currentIndex].columns.map((task, i)=>
                    <div className="col-3" key={`task_${i}`}>
                        <h4 key={`task_heading${i}`}>{task.name}</h4>
                            {task.tasks.map((work, j)=>
                                <Task 
                                key={`task_work_${j}`}
                                work={work.title} 
                                sub={work.subtasks.length} 
                                fin = {work.subtasks.filter(item=>item.isCompleted == true).length}
                                showModal={showModal}
                                />
                            )}
                    </div>
                )}
            </div>
        </div>
    )
}
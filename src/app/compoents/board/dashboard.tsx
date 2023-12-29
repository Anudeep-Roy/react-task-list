import { useState } from 'react';
import data from '../data.json';
import Task from './task';
import TaskModal from './taskModal';

export default function Dashboard ({currentIndex}:any) {

    const [currentWork, setCurrentWork] = useState('');
    const [currentFin, setCurrentFin] = useState('');
    const [currentSub, setCurrentSub] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [subIndex, setSubIndex] = useState(0);
    const [taskIndex, setTaskIndex] = useState(0);

    function showModal (work:any, fin:any, sub:any, sIndex:any, tIndex:any) {
        setCurrentWork(work);
        setCurrentFin(fin);
        setCurrentSub(sub);
        setModalVisible(true);
        setSubIndex(sIndex);
        setTaskIndex(tIndex);
    }

    function closeModal () {
        setModalVisible(false);
    }

    return (
        <div className='dashboard'>
            <div className='row'>
                <TaskModal 
                    currentWork={currentWork} 
                    currentFin={currentFin} 
                    currentSub={currentSub} 
                    modalVisible={modalVisible} 
                    closeModal={closeModal} 
                    currentIndex={currentIndex}
                    subIndex={subIndex}
                    taskIndex={taskIndex}
                />
                {data.boards[currentIndex].columns.map((task, i)=>
                    <div className="col-3" key={`task_${i}`}>
                        <h4 key={`task_heading${i}`}>{task.name}</h4>
                            {task.tasks.map((work, j)=>
                                <Task 
                                currentIndex={currentIndex}
                                subIndex = {i}
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
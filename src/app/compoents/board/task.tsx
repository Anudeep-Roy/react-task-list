import data from '../data.json';

export default function Task ({currentIndex, subIndex, work, sub, fin, showModal}:any) {
    let taskIndex = data.boards[currentIndex].columns[subIndex].tasks.findIndex(title=>title.title == work);
    return (
        <div className="task" onClick={()=>showModal(work, fin, sub, subIndex, taskIndex)}>
            <h4>{work}</h4>
            <p>{fin} of {sub} subtasks</p>
        </div>
        
    )
}
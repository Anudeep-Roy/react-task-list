import data from '../data.json';

export default function TaskModal ({currentWork, currentFin, currentSub, modalVisible, closeModal, currentIndex, subIndex, taskIndex}:any) {
    let isVisible = modalVisible? 'show':'';
    return (
        <div className={`task-modal modal fade ${isVisible}`} id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="false">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">{currentWork}</h5>
                        <button type="button" className="btn-close" onClick={closeModal}></button>
                    </div>
                    <div className="modal-body">
                        <p>Subtasks ({currentFin} of {currentSub})</p>
                        <ul>
                            {data.boards[currentIndex].columns[subIndex].tasks[taskIndex].subtasks.map((title, i)=>
                                <li key={i}>{title.title}</li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
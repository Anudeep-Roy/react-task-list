export default function TaskModal ({currentWork, currentFin, currentSub, modalVisible, closeModal}:any) {
    let isVisible = modalVisible? 'show':'';

    return (
        <div className={`modal fade ${isVisible}`} id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="false">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                    <button type="button" className="btn-close" onClick={closeModal}></button>
                </div>
                <div className="modal-body">
                    <p>Work : {currentWork}</p>
                    <p>Work : {currentFin}</p>
                    <p>Work : {currentSub}</p>
                </div>
                </div>
            </div>
        </div>
    )
}
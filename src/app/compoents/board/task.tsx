export default function Task ({work, sub, fin, showModal}:any) {
    return (
        <div className="task" onClick={()=>showModal(work, fin, sub)}>
            <h4>{work}</h4>
            <p>{fin} of {sub} subtasks</p>
        </div>
    )
}
export default function Task ({work, sub, fin}:any) {
    return (
        <div className="task">
            <h4>{work}</h4>
            <p>{fin} of {sub} subtasks</p>
        </div>
    )
}
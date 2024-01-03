export default function Subtasks ({sub, isCompleted}:any) {
    return (
        <div className="form-check">
            <input className="form-check-input" type="checkbox" id={sub} name={sub} value={sub} checked={isCompleted}/>
            <label className="form-check-label">{sub}</label>
        </div>
    )
}   
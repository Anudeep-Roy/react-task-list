import { useState } from "react"

export default function Subtasks ({data, currentIndex, subIndex, taskIndex, subTaskIndex ,sub, isCompleted}:any) {
    
    const [isChecked, setIsChecked] = useState(isCompleted);

    function checkSub () {

    }
    return (
        <div className="form-check">
            <input className="form-check-input" type="checkbox" id={sub} name={sub} value={sub} checked={isCompleted}/>
            <label className="form-check-label">{sub}</label>
        </div>
    )
}   
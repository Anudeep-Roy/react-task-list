export default function Task ({currentTask, serial}:any) {
    return (
        <>
            <p key={serial}>{currentTask}</p>
        </>
    )
}
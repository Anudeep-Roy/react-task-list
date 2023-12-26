export default function Task ({work, sequence}:any) {
    return (
        <>
            <p key={sequence}>{work}</p>
        </>
    )
}
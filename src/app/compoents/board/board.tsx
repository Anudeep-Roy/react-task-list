import PageHeader from "./pageHeader"
import Dashboard from "./dashboard"

export default function Board ({boardName, currentIndex}:any) {
    return (
        <>
            <PageHeader boardName={boardName}/>
            <Dashboard currentIndex={currentIndex}/>
        </>
    )
}
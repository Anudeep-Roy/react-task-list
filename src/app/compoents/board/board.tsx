import PageHeader from "./pageHeader"
import Dashboard from "./dashboard"

export default function Board ({boardName, currentIndex, data}:any) {
    return (
        <>
            <PageHeader boardName={boardName}/>
            <Dashboard data={data} currentIndex={currentIndex}/>
        </>
    )
}
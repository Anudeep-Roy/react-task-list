export default function PageHeader ({boardName}:any) {
    return (
        <div className="page-header">
            <h3>{boardName}</h3>
            <div className="header-menu">
                <a>+ add new task</a>
                <img src="/assets/icon-vertical-ellipsis.svg"/>
            </div>
        </div>
    )
}
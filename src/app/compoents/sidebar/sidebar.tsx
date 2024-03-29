import BoardList from "./boardList"
import ThemeChanger from "./themeChanger"

export default function Sidebar ({setBName, currentIndex, data}:any) {
    return (
        <div className="side-bar">
            <div className="side-bar-top">
                <div className="logo">
                   <img src="/assets/logo-dark.svg"/>
                </div>
                <BoardList data={data} setBName={setBName} currentIndex={currentIndex}/>
            </div>
            <div className="side-bar-bottom">
                <ThemeChanger/>
            </div>
        </div>
    )
}
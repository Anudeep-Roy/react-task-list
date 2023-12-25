export default function themeChanger () {
    return (
        <>
            <div className="theme-changer">
                <img src="/assets/icon-light-theme.svg"/>
                <div className="switch">
                    <div className="slider"></div>
                </div>
                <img src="/assets/icon-dark-theme.svg"/>
            </div>
            <div className="hide-sidebar">
                <img src="/assets/icon-hide-sidebar.svg"/>
                <p>Hide Sidebar</p>
            </div>
        </>
    )
}
//Plugins
import './styles/plugins/bootstrap.css'

//Components
import Sidebar from "./compoents/sidebar/sidebar"

//Styles
import './styles/sidebar.scss'

export default function Home() {
  return (
    <div className="row">
      <div className="col-2">
        <Sidebar/>
      </div>
    </div>
  )
}
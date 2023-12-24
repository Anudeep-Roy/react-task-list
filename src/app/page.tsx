//Components
import Sidebar from "./Compoents/sidebar"

//Styles
import './Styles/bootstrap.css'
import './Styles/sidebar.scss'

export default function Home() {
  return (
    <div className="row">
      <div className="col-2">
        <Sidebar/>
      </div>
    </div>
  )
}

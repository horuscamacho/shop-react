import { BrowserRouter} from "react-router-dom";
import { AppRoutes } from "../../Routes/index.jsx";
import { NavBar } from "../../../src/Components/NavBar";
import '../../App.css'

const App = () => {

  return (
      <BrowserRouter>
            <NavBar/>
            <AppRoutes/>
      </BrowserRouter>
  )
}

export default App

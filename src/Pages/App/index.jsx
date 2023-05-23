import './App.css'
import { Home } from '../Home'
import {MyOrders} from "../MyOrders"
import {SignIn} from "../SignIn/index.jsx";
import {NotFound} from "../NotFound/index.jsx";
import {MyOrder} from "../MyOrder/index.jsx";
import {MyAccount} from "../MyAccount/index.jsx";

function App() {

  return (
      <h1 className="text-3xl font-bold underline">
          <Home />
          <MyOrders />
          <SignIn />
          <NotFound />
          <MyOrder />
          <MyAccount />
      </h1>
  )
}

export default App

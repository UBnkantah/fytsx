import {Navbar, Herosection, Footer, Getearly, Accsection, Stayprod} from "./components";
import "react-toastify/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.css";
import { ToastContainer } from "react-toastify";

function App() {

  return (
    <div>
      <Navbar />
      <Herosection />
      <Accsection />
      <Stayprod />
      <Getearly />
      <Footer />
      <ToastContainer />
    </div>
  )
}

export default App

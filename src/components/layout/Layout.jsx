import Fototer from "../Footer/Fototer";
import Navbar from "../navigation/Navbar";

const Layout = ({children}) => {

  return (
    <div>
        <Navbar />
        {children}
        <Fototer />
    </div>
  )
}

export default Layout;
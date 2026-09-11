import Footer from "../Components/Footer"
import Header from "../Components/Header"
import Home from "../Components/Home"
import Navbar from "../Components/NavBar"


const UserLayout = () => {
    return (
        <div>
            <Header/>
            <Navbar/>
            <Home/>
            <Footer/>
        </div>
    )
}
export default UserLayout
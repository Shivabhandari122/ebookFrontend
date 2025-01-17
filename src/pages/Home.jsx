import Card from "../components/Card"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"


function Home(){
    return(
       <>
        <Navbar/>
        <div class = "flex flex-wrap  justify-center space-x-4 space-y-4">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        </div>
        <Footer/>
       </>
    )
}
export default Home
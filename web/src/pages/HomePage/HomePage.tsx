import Footer from 'src/components/Footer/Footer'
import Home from 'src/components/Home/Home'
import NavBar from 'src/components/NavBar/NavBar'
import Service from 'src/components/Service/Service'

const HomePage = () => {
  return (
    <div id="homePage">
      <NavBar />
      <Home />
      <Service />
      <Footer />
    </div>
  )
}

export default HomePage

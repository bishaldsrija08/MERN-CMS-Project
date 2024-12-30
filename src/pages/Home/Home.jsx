import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import './Home.css'
const Home = () => {
  return (
    <div>
<Navbar/>
    <div className="hero">
        <h1>Welcome to Green Society Public School</h1>
        <p>Empowering students to lead with purpose and responsibility.</p>
    </div>
    <div className="content" id="about">
        <h2>About Us</h2>
        <p>Green Society Public School is committed to providing an inclusive and enriching learning environment. We emphasize holistic education with a focus on sustainability and innovation.</p>
    </div>
    <div className="content" id="admissions">
        <h2>Admissions</h2>
        <p>Join our community of passionate learners. Visit our admissions page to learn more about our application process.</p>
    </div>
    <div className="content" id="academics">
        <h2>Academics</h2>
        <p>Our curriculum combines traditional values with modern teaching methodologies to ensure academic excellence and personal growth.</p>
    </div>
    <Footer/>
    </div>
  )
}

export default Home
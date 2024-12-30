import Button from "../../components/Button";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import "./About.css";
const About = () => {
  return (
    <div>
      <Navbar />
      <div className="content">
        <h1>About Us</h1>
        <p>
          At Green Society Public School, we strive to create an environment
          where students are inspired to learn, grow, and make a difference in
          the world. Our school is a hub of innovative teaching methods,
          sustainable practices, and community engagement.
        </p>
        <div className="mission">
          <h2>Our Mission</h2>
          <p>
            To empower students with knowledge, skills, and values that enable
            them to lead meaningful and sustainable lives.
          </p>
        </div>
        <div className="vision">
          <h2>Our Vision</h2>
          <p>
            To be a leading institution in education, fostering a community of
            lifelong learners and responsible global citizens.
          </p>
        </div>
      </div>
      <Button title="Sign Up" color= "blue"/>
      <Button title="Login" color="Red"/>
      <Footer />
    </div>
  );
};

export default About;

import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import './Contact.css'

const Contact = () => {
  return (
    <div>
<Navbar/>
    <div className="content">
        <h1>Contact Us</h1>
        <p>If you have any questions or need additional information, please reach out to us using the form below or via our contact details.</p>
        <form className="contact-form">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" placeholder="Your Name" required/>

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Your Email" required/>

            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="5" placeholder="Your Message" required></textarea>

            <button type="submit">Send Message</button>
        </form>
    </div>
    <Footer/>
    </div>
  )
}

export default Contact

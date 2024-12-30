import "./Admission.css";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Button from "../../components/Button";

const Admission = () => {
  return (
    <div>
      <Navbar />
      <div className="content">
        <h1>Admissions</h1>
        <p>
          Welcome to Green Society Public School! We are excited to have you
          join our community of learners. Please find below the details about
          our admissions process.
        </p>
        <div className="admission-info">
          <h2>Admission Process</h2>
          <ul>
            <li>
              Step 1: Fill out the online application form available on our
              website.
            </li>
            <li>
              Step 2: Submit the required documents, including previous academic
              records and birth certificate.
            </li>
            <li>
              Step 3: Attend an interview or assessment session (if applicable).
            </li>
            <li>
              Step 4: Receive the admission decision and complete the enrollment
              process.
            </li>
          </ul>

          <h2>Required Documents</h2>
          <ul>
            <li>Birth Certificate</li>
            <li>Previous Academic Records</li>
            <li>Passport-sized Photographs</li>
            <li>Proof of Address</li>
          </ul>

          <h2>Important Dates</h2>
          <p>
            Admissions for the academic year 2024-2025 open on January 1, 2024,
            and close on March 31, 2024.
          </p>
        </div>
      </div>
      <Button title="Login"/>
      <Footer />
    </div>
  );
};

export default Admission;

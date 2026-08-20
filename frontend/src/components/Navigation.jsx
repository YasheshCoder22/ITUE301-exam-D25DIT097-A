import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="navbar">
      <h2>MedCare Plus</h2>

      <div>
        <Link to="/">Home</Link>
        <Link to="/doctors">Doctors</Link>
        <Link to="/booking">Book Appointment</Link>
      </div>
    </nav>
  );
}

export default Navigation;
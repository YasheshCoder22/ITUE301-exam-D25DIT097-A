import AppointmentCard from "../components/AppointmentCard";

function HomePage() {
  return (
    <div className="page">
      <h1>Hospital Appointment System</h1>

      <p>
        Welcome to MedCare Plus Hospital.
      </p>

      <p>
        You can check doctors and book an appointment.
      </p>

      <h2>Sample Appointment</h2>

      <AppointmentCard
        patientName="Rahul"
        doctorName="Dr. Mehta"
        date="20-08-2026"
        timeSlot="10:00 AM"
        status="confirmed"
      />
    </div>
  );
}

export default HomePage;
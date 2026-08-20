import { useState } from "react";

function BookingPage() {
  const [patientName, setPatientName] = useState("");
  const [doctorName, setDoctorName] = useState("");
  const [date, setDate] = useState("");
  const [timeSlot, setTimeSlot] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    alert("Appointment details entered successfully.");
  }

  return (
    <div className="page">
      <h1>Book Appointment</h1>

      <form onSubmit={handleSubmit} className="booking-form">

        <label>Patient Name</label>
        <input
          type="text"
          value={patientName}
          onChange={(event) => setPatientName(event.target.value)}
          placeholder="Enter patient name"
        />

        <label>Doctor Name</label>
        <input
          type="text"
          value={doctorName}
          onChange={(event) => setDoctorName(event.target.value)}
          placeholder="Enter doctor name"
        />

        <label>Date</label>
        <input
          type="date"
          value={date}
          onChange={(event) => setDate(event.target.value)}
        />

        <label>Time Slot</label>
        <select
          value={timeSlot}
          onChange={(event) => setTimeSlot(event.target.value)}
        >
          <option value="">Select time</option>
          <option value="10:00 AM">10:00 AM</option>
          <option value="11:00 AM">11:00 AM</option>
          <option value="2:00 PM">2:00 PM</option>
          <option value="4:00 PM">4:00 PM</option>
        </select>

        <button type="submit">
          Book Appointment
        </button>
      </form>

      <div className="entered-data">
        <h3>Current Details</h3>

        <p>
          Patient Name: {patientName || "Not entered"}
        </p>

        <p>
          Doctor Name: {doctorName || "Not selected"}
        </p>
      </div>
    </div>
  );
}

export default BookingPage;
const express = require("express");
const cors = require("cors");

const app = express();

const PORT = 5000;

app.use(cors());
app.use(express.json());


// Request Logger Middleware
function requestLogger(req, res, next) {
  const time = new Date().toISOString();

  console.log(`[${req.method}] ${req.path} [${time}]`);

  next();
}

app.use(requestLogger);


// Temporary data for Task 3
let doctors = [
  {
    id: 1,
    name: "Dr. Mehta",
    email: "mehta@medcare.com",
    specialisation: "Cardiologist",
    available: true
  },
  {
    id: 2,
    name: "Dr. Patel",
    email: "patel@medcare.com",
    specialisation: "Dermatologist",
    available: true
  },
  {
    id: 3,
    name: "Dr. Shah",
    email: "shah@medcare.com",
    specialisation: "Neurologist",
    available: false
  }
];


let appointments = [
  {
    id: 1,
    patientName: "Rahul",
    doctorName: "Dr. Mehta",
    date: "2026-08-20",
    timeSlot: "10:00 AM",
    status: "confirmed",
    reason: "Regular checkup"
  }
];


// GET all appointments
app.get("/api/v1/appointments", (req, res) => {
  res.status(200).json(appointments);
});


// POST new appointment
app.post("/api/v1/appointments", (req, res, next) => {
  try {
    const {
      patientName,
      doctorName,
      date,
      timeSlot,
      status,
      reason
    } = req.body;

    if (!patientName || !doctorName || !date || !timeSlot) {
      const error = new Error(
        "Patient name, doctor name, date and time slot are required"
      );

      error.statusCode = 400;

      throw error;
    }

    const newAppointment = {
      id: appointments.length + 1,
      patientName,
      doctorName,
      date,
      timeSlot,
      status: status || "pending",
      reason: reason || ""
    };

    appointments.push(newAppointment);

    res.status(201).json({
      message: "Appointment created successfully",
      appointment: newAppointment
    });

  } catch (error) {
    next(error);
  }
});


// GET all doctors
app.get("/api/v1/doctors", (req, res) => {
  res.status(200).json(doctors);
});


// Test route
app.get("/", (req, res) => {
  res.json({
    message: "Hospital Appointment API is running"
  });
});


// Handle unknown routes
app.use((req, res, next) => {
  const error = new Error("Route not found");

  error.statusCode = 404;

  next(error);
});


// Global Error Handling Middleware
app.use((error, req, res, next) => {
  console.error(error.message);

  const statusCode = error.statusCode || 500;

  res.status(statusCode).json({
    success: false,
    message: error.message || "Something went wrong"
  });
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
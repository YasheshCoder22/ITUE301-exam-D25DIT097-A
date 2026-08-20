require("dotenv").config();

const mongoose = require("mongoose");

const Patient = require("./models/Patient");
const Doctor = require("./models/Doctor");
const Appointment = require("./models/Appointment");


async function runTest() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected");


    // Create Patient
    const patient = await Patient.create({
      name: "Yash",
      email: `yash${Date.now()}@gmail.com`,
      phone: "9876543210",
      bloodGroup: "B+",
      age: 20
    });

    console.log("Patient created");


    // Create Doctor
    const doctor = await Doctor.create({
      name: "Dr. Mehta",
      email: "mehta@medcare.com",
      specialisation: "Cardiologist"
    });

    console.log("Doctor created");


    // Create Appointment
    const appointment = await Appointment.create({
      patientId: patient._id,
      doctorId: doctor._id,
      date: "2026-08-25",
      timeSlot: "10:00 AM",
      reason: "Regular checkup"
    });

    console.log("Appointment created");

    console.log({
      patientId: patient._id,
      doctorId: doctor._id,
      appointmentId: appointment._id
    });


    // Validation Test
    try {
      await Patient.create({
        name: "Test User",
        email: `test${Date.now()}@gmail.com`,
        bloodGroup: "XYZ"
      });
    } catch (error) {
      console.log("Validation failed");
      console.log("Meaningful error:", error.message);
    }


  } catch (error) {
    console.log("MongoDB error:", error.message);
  } finally {
    await mongoose.connection.close();
    console.log("MongoDB connection closed");
  }
}


runTest();
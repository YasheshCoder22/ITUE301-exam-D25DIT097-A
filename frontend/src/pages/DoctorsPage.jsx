import { useEffect, useState } from "react";

function DoctorsPage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/v1/doctors")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to get doctors");
        }

        return response.json();
      })
      .then((result) => {
        setData(result);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="page">
        <h2>Doctors</h2>
        <p>Loading doctors...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="page">
        <h2>Doctors</h2>
        <p className="error">{error}</p>
      </div>
    );
  }

  return (
    <div className="page">
      <h1>Our Doctors</h1>

      <div className="doctor-list">
        {data.map((doctor) => (
          <div className="doctor-card" key={doctor.id}>
            <h3>{doctor.name}</h3>

            <p>
              <strong>Specialisation:</strong>{" "}
              {doctor.specialisation}
            </p>

            <p>
              <strong>Availability:</strong>{" "}
              {doctor.available ? "Available" : "Not Available"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DoctorsPage;
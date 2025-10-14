import { useState } from "react";
import studentData from "../student.json";

function AddStudent() {
  const [students, setStudents] = useState(studentData);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    course: "",
    year: "",
    email: "",
    city: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.age ||
      !formData.course ||
      !formData.year ||
      !formData.email ||
      !formData.city
    ) {
      alert("Please fill all fields");
      return;
    }

    const newStudent = {
      id: students.length + 1,
      ...formData,
      age: Number(formData.age),
    };

    setStudents([...students, newStudent]);

    setFormData({
      name: "",
      age: "",
      course: "",
      year: "",
      email: "",
      city: "",
    });

    alert("Student added successfully!");
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">Add Student</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3 mb-6">
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          value={formData.name}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          type="number"
          name="age"
          placeholder="Enter age"
          value={formData.age}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          type="text"
          name="course"
          placeholder="Enter course"
          value={formData.course}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          type="text"
          name="year"
          placeholder="Enter year"
          value={formData.year}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={formData.email}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          type="text"
          name="city"
          placeholder="Enter city"
          value={formData.city}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <button
          type="submit"
          className="py-2 rounded border-2 transition"
        >
          Add Student
        </button>
      </form>
      <ul className="space-y-2">
        {students.map((student) => (
          <li
            key={student.id}
            className="border p-3 rounded flex flex-col bg-gray-50"
          >
            <strong>{student.name}</strong>
            <span>Age: {student.age}</span>
            <span>Course: {student.course}</span>
            <span>Year: {student.year}</span>
            <span>Email: {student.email}</span>
            <span>City: {student.city}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AddStudent;

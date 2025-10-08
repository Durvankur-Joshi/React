import React from "react";

const StudentCard = (props) => {
  return (
    <div className="w-full sm:w-72 md:w-80 lg:w-96 bg-gradient-to-b from-white to-blue-50 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 p-6 m-4 border border-gray-200">
      <div className="flex flex-col items-center text-center">
        

        {/* Name and Course */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-1">{props.name}</h2>
        <p className="text-gray-500 text-sm font-medium">{props.course}</p>
        <p className="text-gray-600 text-sm mb-2">{props.year}</p>

        {/* Divider */}
        <div className="w-20 border-b-2 border-blue-400 my-4"></div>

        {/* Details Section */}
        <div className="text-gray-700 text-sm space-y-2 bg-white rounded-xl shadow-inner p-4 w-full">
          <p>
            <span className="font-semibold text-gray-800">Age:</span> {props.age}
          </p>
          <p>
            <span className="font-semibold text-gray-800">City:</span> {props.city}
          </p>
          <p className="break-all">
            <span className="font-semibold text-gray-800">Email:</span> {props.email}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StudentCard;

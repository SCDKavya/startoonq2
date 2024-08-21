import React from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faUser, faHistory } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className="container mx-auto p-4 bg-white">
      {/* Header */}
      <div className="bg-[#012E57] p-4 text-white text-xl font-semibold">
        <span className="ml-4">View patient</span>
      </div>

      {/* Profile Section */}
      <div className="flex items-center space-x-4 mt-4">
        <div className="flex-grow">
          <h2 className="text-2xl font-semibold">S.Meena, F/23</h2>
          <p className="text-gray-600">Patient ID: 87 20200727135457</p>
        </div>
        <div className="w-12 h-12 rounded-full bg-[#012E57] flex justify-center items-center">
          <FontAwesomeIcon icon={faUser} className="text-white text-lg" />
        </div>
      </div>

      {/* Goal Reached Section */}
      <div className="bg-[#012E57] p-4 mt-4 rounded-lg text-white shadow-md">
        <h3 className="text-lg font-medium mb-2">Goal reached</h3>
        <div className="flex justify-between items-center">
          <div className="relative w-40 h-20">
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="text-xl font-semibold text-white">40%</div>
            </div>
            {/* Semi-circle progress bar */}
            <svg viewBox="0 0 36 36" className="w-full h-full">
              <path
                d="M18 2.0845
                   a 15.9155 15.9155 0 0 1 0 31.831
                   a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#FCB000"
                strokeWidth="2"
                strokeDasharray="40, 100"
              />
            </svg>
          </div>
          <div className="flex flex-col space-y-1">
            <div className="flex items-center">
              <span className="w-4 h-4 bg-green-400 inline-block rounded-full mr-2"></span>
              <span>EMG</span>
            </div>
            <div className="flex items-center">
              <span className="w-4 h-4 bg-red-400 inline-block rounded-full mr-2"></span>
              <span>ROM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Contact and Medical Details Section */}
      <div className="mt-4 space-y-2">
        <p className="flex items-center">
          <FontAwesomeIcon icon={faPhone} className="text-gray-600 mr-2" />
          <span className="font-semibold w-32">Phone no.</span>
          <span className="text-gray-600">8222334455</span>
        </p>
        <p className="flex items-center">
          <FontAwesomeIcon icon={faEnvelope} className="text-gray-600 mr-2" />
          <span className="font-semibold w-32">Mail ID</span>
          <span className="text-gray-600">meenarabhinsachin2@gmail.com</span>
        </p>
        <p className="flex items-center">
          <span className="font-semibold w-32">Affected side</span>
          <span className="text-gray-600">Bilateral</span>
        </p>
        <p className="flex items-center">
          <span className="font-semibold w-32">Condition</span>
          <span className="text-gray-600">Ortho</span>
        </p>
        <p className="flex items-center">
          <span className="font-semibold w-32">Speciality</span>
          <span className="text-gray-600">Osteoarthritis</span>
        </p>
      </div>

      {/* Medical History Section */}
      <div className="mt-4">
        <button className="flex items-center text-[#012E57] font-semibold">
          <FontAwesomeIcon icon={faHistory} className="mr-2" />
          Medical history
        </button>
        <p className="text-gray-600 mt-2">Hypertension, DM, Hypothyroidism</p>
      </div>
    </div>
  );
}

export default App;

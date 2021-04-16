import React from "react";

const Navigation: React.FC = () => {
  return (
    <ul className="flex justify-around py-4 bg-gray-200">
      <li className="inline-block bg-red-100 px-4 rounded hover:bg-red-500 cursor-pointer hover:text-gray-100 transition ease-out duration:300 shadow-lg">
        <a href="/">Home</a>
      </li>
      <li className="inline-block bg-red-100 px-4 rounded hover:bg-red-500 cursor-pointer hover:text-gray-100 transition ease-out duration:300 shadow-lg">
        <a href="https://github.com/Sam44323/REACT-TS-JSON-DEMO">Code</a>
      </li>
    </ul>
  );
};

export default Navigation;

import React from "react";
import { LineChart, Line, YAxis, XAxis } from "recharts";
import { BarChart, Bar } from "recharts";
import { PieChart, Pie } from "recharts";
import { CartesianGrid, Tooltip } from 'recharts';
// import { RechartsDevtools } from '@recharts/devtools';

const resultData = [
  {
    id: 1,
    name: "Arif Hossain",
    math: 85,
    english: 72,
    science: 90,
    history: 68,
  },
  {
    id: 2,
    name: "Nadia Islam",
    math: 92,
    english: 88,
    science: 78,
    history: 85,
  },
  {
    id: 3,
    name: "Rahim Uddin",
    math: 60,
    english: 75,
    science: 65,
    history: 70,
  },
  {
    id: 4,
    name: "Sumaiya Akter",
    math: 78,
    english: 90,
    science: 82,
    history: 91,
  },
  {
    id: 5,
    name: "Karim Molla",
    math: 55,
    english: 60,
    science: 58,
    history: 62,
  },
  {
    id: 6,
    name: "Fatema Begum",
    math: 88,
    english: 84,
    science: 91,
    history: 79,
  },
  {
    id: 7,
    name: "Sabbir Ahmed",
    math: 73,
    english: 67,
    science: 74,
    history: 55,
  },
  { id: 8, name: "Mitu Rani", math: 95, english: 93, science: 88, history: 96 },
  {
    id: 9,
    name: "Zahid Hasan",
    math: 66,
    english: 71,
    science: 69,
    history: 74,
  },
  { id: 10, name: "Puja Das", math: 81, english: 85, science: 77, history: 83 },
  {
    id: 11,
    name: "Tanvir Alam",
    math: 47,
    english: 52,
    science: 50,
    history: 45,
  },
  {
    id: 12,
    name: "Sharmin Nahar",
    math: 89,
    english: 91,
    science: 86,
    history: 88,
  },
  {
    id: 13,
    name: "Milon Sheikh",
    math: 63,
    english: 58,
    science: 61,
    history: 66,
  },
  {
    id: 14,
    name: "Bristy Roy",
    math: 76,
    english: 80,
    science: 73,
    history: 78,
  },
];

const ResultCharts = () => {
  const margin = { top: 20, right: 30, left: 20, bottom: 5 };
  return (
    <div className="flex flex-col justify-center items-center w-[90%] space-y-6">
      <LineChart width={1500} height={300} data={resultData}>
        <XAxis dataKey="name"></XAxis> 
        <YAxis></YAxis>
        <Line type="monotone" dataKey="math" stroke="#8884d8" />
        <Line type="monotone" dataKey="english" stroke="#82ca9d" />
        <Line type="monotone" dataKey="science" stroke="#ffc658" />
        <Line type="monotone" dataKey="history" stroke="#ff7300" />
      </LineChart>

      <BarChart width={1500} height={300} data={resultData}>
        <XAxis dataKey="name"></XAxis> 
        <YAxis></YAxis>
        <Bar type="monotone" dataKey="math" fill="#8884d8" />
        <Bar type="monotone" dataKey="english" fill="#82ca9d" />
        <Bar type="monotone" dataKey="science" fill="#ffc658" />
        <Bar type="monotone" dataKey="history" fill="#ff7300" />
      </BarChart>


    <BarChart width={1200} height={500} data={resultData} margin={margin}>
      <XAxis dataKey="name" stroke="red" />
      <YAxis stroke="red" />
      <Tooltip />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <Bar dataKey="math" fill="#82ca9d" barSize={30} />
      <Bar dataKey="english" fill="#ffc658" barSize={30} />
      <Bar dataKey="science" fill="#ff7300" barSize={30} />
      <Bar dataKey="history" fill="#8884d8" barSize={30} />
      {/* <RechartsDevtools /> */}
    </BarChart>


      <PieChart width={300} height={300}>
        <Pie
          data={resultData}
          dataKey="math"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={120}
          fill="#8884d8"
          label
        />
      </PieChart>
    </div>
  );
};

export default ResultCharts;

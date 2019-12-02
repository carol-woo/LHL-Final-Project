import React, {useState} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';

export default function Spline () {

  const[chartData, setChartData] = useState()

  return (
    <div className="chart">
      <bar 
        data={setChartData}
        options={{
          maintainAspectRatio: false
        }} 
      />
    </div>
  )
}
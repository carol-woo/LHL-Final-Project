import React, {useState} from 'react';

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
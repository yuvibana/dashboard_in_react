import React from 'react'
import CanvasJSReact from '@canvasjs/react-charts';


// var CanvasJS = CanvasJSReact.CanvasJS;
let CustomersChart = CanvasJSReact.CanvasJSChart;

export default function CustumerChart() {
  const options = {

    data: [
      {
        type: "doughnut",
        dataPoints: [
          { label: "Jan", y: 25 },
          { label: "Feb", y: 20 },
          { label: "Mar", y: 25 },
        ]
      }
    ]
  }
  return (
    <div className='CustumerChart'>
      <div className='text'>
        <div class="title">Customers </div>
        <span>Customers that buy products</span>
      </div>
      <CustomersChart options={options} />
    </div>
  )
}

import React from 'react'
import CanvasJSReact from '@canvasjs/react-charts';
import DropDown from './DropDown';

// var CanvasJS = CanvasJSReact.CanvasJS;
let CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default function OverviewChart() {

    const options = {
        data: [
            {
                type: "column",
                dataPoints: [
                    { label: "Jan", y: 25 },
                    { label: "Feb", y: 20 },
                    { label: "Mar", y: 25 },
                    { label: "Apr", y: 30 },
                    { label: "May", y: 28 },
                    { label: "Jun", y: 28 },
                    { label: "Jul", y: 28 },
                    { label: "Aug", y: 28 },
                    { label: "Sep", y: 16 },
                    { label: "Oct", y: 15 },
                    { label: "Nov", y: 18 },
                    { label: "Dec", y: 28 }
                ]
            }
        ]
    }

    return (
        <div className='columnChartdiv'>
            <div className='flexdiv  dflex jbetween Itemcenter'>
                <div className='leftTex'>
                    <div className='title'>overview </div>
                    <span>Monthly Earning</span>
                </div>
                <DropDown />
            </div>
            <CanvasJSChart options={options} />
        </div>
    );
}
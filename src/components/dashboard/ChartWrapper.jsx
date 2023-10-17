import React from 'react'
import OverviewChart from './OverviewChart'
import CustomersChart from './CustomersChart'

export default function ChartWrapper() {
    return (
        <div className='OverviewChar dflex jbetween itemsend'>
            <OverviewChart />
            <CustomersChart/>
            
        </div>
    )
}

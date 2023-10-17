import React from 'react'
import Box from '@mui/material/Box';



export default function CommonBox({ Icon, IconColor, title, currency, Arrow, showpercentage, month, bgColor, updownColor }) {
    return (
        <Box className={`CommonBox dflex Itemcenter gapx ${bgColor}`}>
            <Box className={`leftImgBox dflex Itemcenter jcenter ${IconColor}`}>
                <Icon />
            </Box>
            <Box class="textBox">
                <small className='title dblock'>{title}</small>
                <strong className='currency dblock'>{currency}</strong>
                <p className='flextext dflex Itemcenter'>
                    <span className={`showpercentage dflex Itemcenter ${updownColor}`}> <Arrow /> {showpercentage}</span>
                    <span>  {" "} {month}</span>
                </p>
            </Box>
        </Box>
    )
}
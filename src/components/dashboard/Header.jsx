import React from 'react'
import { MenuIcon } from '../StaticImages'

export default function Header() {
    return (
        <div className='dflex Header Itemcenter jbetween'>
            <div className='Name'>Hello Shahrukh 👋</div>
            <div className='humbergermenu'>
                <MenuIcon />
            </div>
            <div className='inputbox'>
                <input type='text' placeholder='Search' />
            </div>
        </div>
    )
}

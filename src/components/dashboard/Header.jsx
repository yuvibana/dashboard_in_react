import React from 'react'
import { MenuIcon } from '../StaticImages'

export default function Header({ toggelmenu }) {

    return (
        <div className='dflex Header Itemcenter jbetween'>
            <div className='Name'>Hello Shahrukh 👋</div>
            <div className='humbergermenu' onClick={toggelmenu}>
                <MenuIcon />
            </div>
            <div className='searchBox'>
                <input type='text' placeholder='Search' />
            </div>
        </div>
    )
}

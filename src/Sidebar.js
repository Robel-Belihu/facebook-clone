import React from 'react';
import './Sidebar.css';
import SidebarItem from './SidebarItem';
import { useStateValue } from './StateProvider';

function Sidebar() {
    const [{ user }, dispatch] = useStateValue();
    return (
        <div className='sidebar'>
            <SidebarItem />
        </div>
    )
}

export default Sidebar  
import React from 'react';
import './SidebarItem.css';
import { Avatar } from '@mui/material';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import OndemandVideoRoundedIcon from '@mui/icons-material/OndemandVideoRounded';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import FlagIcon from '@mui/icons-material/Flag';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import EventBusyOutlinedIcon from '@mui/icons-material/EventBusyOutlined';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import { useStateValue } from './StateProvider';

function SidebarItem() {
    const [{ user }, dispatch] = useStateValue();
    return (
        <div className='Sidebar'>
            <div className='Sidebar__row'>
                <Avatar alt="Beethoven" src={user.photoURL} />
                <h4>{user.displayName}</h4>
            </div>
            <div className='Sidebar__row'>
                <PeopleAltOutlinedIcon fontSize='large' />
                <h4>Find Friends</h4>
            </div>
            <div className='Sidebar__row'>
                <GroupsOutlinedIcon fontSize='large' />
                <h4>Groups</h4>
            </div>
            <div className='Sidebar__row'>
                <StorefrontOutlinedIcon fontSize='large' />
                <h4>Marketplace</h4>
            </div>
            <div className='Sidebar__row'>
                <OndemandVideoRoundedIcon fontSize='large' />
                <h4>Watch</h4>
            </div>
            <div className='Sidebar__row'>
                <FlagIcon className='Sidebar__page' fontSize='large' />
                <h4 >Pages</h4>
            </div>
            <div className='Sidebar__row'>
                <StarRoundedIcon className='Sidebar__star' fontSize='large' />
                <h4>Fvorites</h4>
            </div>
            <div className='Sidebar__row'>
                <EventBusyOutlinedIcon fontSize='large' />
                <h4>Events</h4>
            </div>
            <div className='Sidebar__row'>
                <WatchLaterOutlinedIcon fontSize='large' />
                <h4>Most Recent</h4>
            </div>
            <div className='Sidebar__row'>
                <ExpandMoreRoundedIcon fontSize='large' />
                <h4>See More</h4>
            </div>
        </div>
    )
}

export default SidebarItem
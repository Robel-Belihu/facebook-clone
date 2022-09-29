import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import TourOutlinedIcon from '@mui/icons-material/TourOutlined';
import OndemandVideoRoundedIcon from '@mui/icons-material/OndemandVideoRounded';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import { Avatar } from '@mui/material';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import { IconButton } from '@mui/material';
import ForumRoundedIcon from '@mui/icons-material/ForumRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import { useStateValue } from './StateProvider';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MapsUgcIcon from '@mui/icons-material/MapsUgc';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

function Header() {
    const [{ user }, dispatch] = useStateValue();
    return (
        <div className='header'>
            <div className='header__left'>
                <img
                    src='https://upload.wikimedia.org/wikipedia/en/0/04/Facebook_f_logo_%282021%29.svg'
                    alt=''
                />
                {/* for the smaller screens */}
                <AccountCircleIcon className='header__user' fontSize='large' />
                <div className='header__input'>
                    <SearchIcon />
                    <input type='text' placeholder='Search Facebook' />
                </div>
                {/* for the smaller screens */}
                <MapsUgcIcon className='header__message' fontSize='large' />
            </div>

            <div className='header__middle'>
                <div className='header__option
                 header__option--active'>
                    <HomeRoundedIcon className='header__homeIcon' fontSize='large' />
                </div>
                <div className='header__option'>
                    <PeopleAltOutlinedIcon className='header__peopleIcon' fontSize='large' />
                </div>
                <div className='header__option'>
                    <TourOutlinedIcon className='header__flagIcon' fontSize='large' />
                </div>
                <div className='header__option'>
                    <OndemandVideoRoundedIcon className='header__vidIcon' fontSize='large' />
                </div>
                <div className='header__option'>
                    <StorefrontOutlinedIcon className='header__marketIcon' fontSize='large' />
                </div>
                <div className='header__option'>
                    <NotificationsNoneOutlinedIcon className='header__bellIcon' fontSize='large' />
                </div>
                <div className='header__option'>
                    <MenuOutlinedIcon className='header__burgerIcon' fontSize='large' />
                </div>
            </div>

            <div className='header__right'>
                <IconButton>
                    <AddRoundedIcon fontSize='large' />
                </IconButton>
                <IconButton>
                    <ForumRoundedIcon fontSize='large' />
                </IconButton>
                <IconButton>
                    <NotificationsRoundedIcon fontSize='large' />
                </IconButton>
                <IconButton>
                    <ExpandMoreRoundedIcon fontSize='large' />
                </IconButton>
                <div className='header__info'>
                    <Avatar alt="Beethoven" src={user.photoURL} />
                </div>
            </div>
        </div>

    )
}

export default Header;
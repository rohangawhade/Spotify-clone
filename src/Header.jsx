import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from '@material-ui/core';
import { useDataLayerValue } from './DataLayer';

function Header() {
    // eslint-disable-next-line no-unused-vars
    const [{ user }, dispatch] = useDataLayerValue();

    return (
        <div className='header'>
            <div className="header_left">
                <SearchIcon />
                <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Search for Artists, Songs"    
                />
            </div>
            <div className="header_right">
                <Avatar src={ user?.images[0]?.url } alt={user?.display_name} />
                <h4>{user?.display_name}</h4>
            </div>
        </div>
    )
}

export default Header

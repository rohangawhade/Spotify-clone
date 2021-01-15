import React from 'react';
import './SidebarOption.css';

function SidebarOption({ title, Icon }) {
    return (
        <div className='sidebarOption'>
            { Icon && <Icon className='sidebarOption_icon' /> }
            { Icon ? <h4>{title}</h4> : <h4 className='playlists'>{title}</h4> }
        </div>
    )
}

export default SidebarOption

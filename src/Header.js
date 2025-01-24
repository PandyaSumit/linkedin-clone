import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';

export function Header() {
  return (
    <div className='header'>
         {/* Header left */}
          <div className='header_left'>
                    <img 
                      src="https://img.icons8.com/?size=100&id=xuvGCOXi8Wyg&format=png&color=000000"  
                      alt="logo" 
                    />
                    <div className='header_search'>
                              <SearchIcon/>
                              <input type='text' placeholder='Search'/>
                    </div>
          </div>

          {/* Header right */}
          <div className='header_right'>
                    <HeaderOption Icon={HomeIcon} title="Home"/>
                    <HeaderOption Icon={SupervisorAccountIcon} title="My Networks"/>
          </div>
    </div>
  );
}

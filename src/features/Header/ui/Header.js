import React from 'react';
import { SearchInput } from '../../../shared/SearchInput';
import { Button } from '../../../shared/Button';
import './Header.scss';

const Header = () => {

    return (
        <div className="header-wrapper">
            <p className="title">Reserve Your Time</p>
            <div className='style'>
                <SearchInput placeholder={"Service Name"}/>
                <SearchInput placeholder={"Service Location"}/>
                <Button text={"Search"}>
                </Button>
            </div>
        </div>
    )
}

export default Header;
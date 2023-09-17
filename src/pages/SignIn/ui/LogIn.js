import React from 'react';
import './LogIn.scss';
import { Chenarlog } from '../../../features/Chenarlog';
import { Navbar } from '../../../widgets/Navbar';

const LogIn = () => {

    return (
        <div className='login-wrapper'>
            <Navbar />
            <div className='content-wrapper'>
                <Chenarlog />
            </div>
        </div>
    )
    }
export default LogIn;
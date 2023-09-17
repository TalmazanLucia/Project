import React from 'react';
import './SignUp.scss';
import { Chenarsignup } from '../../../features/Chenarsignup';
import { Navbar } from '../../../widgets/Navbar';

const SignUp = () => {

    return (
        <div className='signup-wrapper'>
            <Navbar />
            <div className='contentup-wrapper'>
                <Chenarsignup />
            </div>
        </div>
    )
    }
export default SignUp;
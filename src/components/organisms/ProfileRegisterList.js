import React, { useContext } from 'react';
import ContactContext from '../../context/ContactContext'

import ProfileRegister from '../molecules/ProfileRegister'

const ProfileRegisters = () => {

    const contactContext = useContext(ContactContext);

    return (contactContext.profileRegisters.map((profileRegister, index) => (
        <div className='list-group list-group-horizontal'>
        <ProfileRegister
            key={index}
            profileRegister={profileRegister} />
            </div>
    )));

};

export default ProfileRegisters;
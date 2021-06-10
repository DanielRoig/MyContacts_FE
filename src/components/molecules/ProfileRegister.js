import React, { Fragment } from 'react';
import PropTypes from 'prop-types'

import ListItem from '../atoms/ListItem'

const ProfileRegister = (props) => {

    const { first_name, last_name, phone, created_at } = props.profileRegister;

    return (
        <Fragment>
            <ListItem text={first_name} />
            <ListItem text={last_name} />
            <ListItem text={phone} />
            <ListItem text={created_at} />
        </Fragment>
    )
}

ProfileRegister.propTypes = {
    profileRegister: PropTypes.object.isRequired
}

export default ProfileRegister;
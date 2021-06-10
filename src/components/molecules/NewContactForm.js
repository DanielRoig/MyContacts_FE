import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'

import Input from '../atoms/Input'

const NewContactForm = (props) => {

    const { onSubmit } = props

    const { register, errors, handleSubmit } = useForm();

    const sendData = (data, e) => {
        onSubmit(data)
        e.target.reset();
    }

    return (
        <Fragment>
            <div className='mb-5'>
                <h1>New Contact</h1>
                <form onSubmit={handleSubmit(sendData)}>
                    <div className='row mb-2'>

                        <Input
                            type='email'
                            placeholder='Email'
                            name='email'
                            disabled={false}
                            register={register}
                        />

                        <Input
                            type='text'
                            placeholder='First name'
                            name='first_name'
                            disabled={false}
                            register={register}
                        />

                        <Input
                            type='text'
                            placeholder='Last name'
                            name='last_name'
                            disabled={false}
                            register={register}
                        />

                        <Input
                            type='text'
                            placeholder='Phone'
                            name='phone'
                            disabled={false}
                            register={register}
                        />

                    </div>
                    <button type='submit' className='btn btn-success w-100 mb-2'>Create contact</button>
                </form>
            </div>
        </Fragment>
    );
}

NewContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}

export default NewContactForm;
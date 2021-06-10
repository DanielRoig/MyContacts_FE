import React, { Fragment } from 'react'
import { useForm } from 'react-hook-form'
import PropTypes from 'prop-types'
import Button from '../atoms/Button'
import Input from '../atoms/Input'

const ContactForm = (props) => {

    const { contact, onSubmit, deleteButton, showProfileRegisters } = props

    const { register, errors, handleSubmit } = useForm({
        defaultValues: {
            id: contact.id,
            first_name: contact.first_name,
            last_name: contact.last_name,
            email: contact.email,
            phone: contact.phone
        }
    });

    const sendData = (data) => {
        onSubmit(data, contact.id)
    }

    return (
        <Fragment>
            <div className='mb-4'>
                <form onSubmit={handleSubmit(sendData)}>
                    <div className='row gx-1 mb-2'>

                        <Input
                            type='text'
                            placeholder='Id'
                            name='id'
                            disabled={true}
                            register={register}
                        />

                        <Input
                            type='email'
                            placeholder='Email'
                            name='email'
                            disabled={true}
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
                    <button type='submit' className='btn btn-success w-100 mb-2'>Update</button>
                </form>

                <div className='row gx-1'>
                    <Button action={deleteButton.bind(this, contact.id)} className='btn-danger' text={"Delete"} />
                    <Button action={showProfileRegisters.bind(this, contact.id)} className='btn-primary' text={"Profile Registers"} />
                </div>
            </div>
        </Fragment>
    );
}

ContactForm.propTypes = {
    contact: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired,
    deleteButton: PropTypes.func.isRequired,
    showProfileRegisters: PropTypes.func.isRequired,
}

export default ContactForm;
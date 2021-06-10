import PropTypes from 'prop-types'

const Input = (props) => {
    const { type, placeholder, name, disabled, register } = props

    return (
        <div className='col w-100'>
            <input type={type}
                placeholder={placeholder}
                name={name}
                disabled={disabled}
                {...register(name)}
                className='form-control w-100'
            >
            </input>
        </div>
    )
}

Input.propTypes = {
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    disabled: PropTypes.bool.isRequired,
    register: PropTypes.func.isRequired,
}

export default Input;

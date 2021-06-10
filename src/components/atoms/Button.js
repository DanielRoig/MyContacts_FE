import PropTypes from 'prop-types'

const Button = (props) => {
    const { action, text, className } = props

    return (
        <div className='col'>
            <button className={'btn w-100 ' + className } onClick={action}>
                {text}
            </button>
        </div>
    )
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    action: PropTypes.func.isRequired,
}

export default Button;

import PropTypes from 'prop-types'

const ListItem = (props) => {
    const text = props.text
    
    return (
        <li class="list-group-item flex-fill">{text}</li>
    )
}

ListItem.propTypes = {
    text: PropTypes.string.isRequired,
}

export default ListItem;

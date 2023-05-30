import PropTypes from 'prop-types'
export function Button({ text, name = '' }) {
    console.log(text);
    return <button onClick={function () {
console.log('Hola mundo');
    }}>
        {text} - {name}
    </button>
}

Button.prototype = {
    text: PropTypes.string.isRequired

}

Button.defaultProps = {
    name: 'Some user'
}
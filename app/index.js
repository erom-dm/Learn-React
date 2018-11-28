var React = require('react');
var ReactDOM = require('react-dom');
var PropTypes = require('prop-types');
require('./index.css');

var App = require('./components/App');

// example for PropTypes usage
/*Badge.propTypes = {
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    // requires an array of objects, that correspond to following requierments.
    list: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        age: PropTypes.number.isRequired
    }))
}*/

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);

var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = (props) => {
  return(
    <div><h2>navcomponent</h2>
    <IndexLink to ="/" activeClassNAme = "active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
    <Link to ="/about" activeClassNAme = "active" activeStyle={{fontWeight: 'bold'}}>About</Link>
    <Link to ="/examples" activeClassNAme = "active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
  </div>
  );
}

module.exports = Nav;

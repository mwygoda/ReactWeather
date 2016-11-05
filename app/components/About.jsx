var React = require('react');
var {Link} = require('react-router');

// var About = React.createClass({
//   render: function(){
//     return(
//       <h3>About Component</h3>
//     );
//   }
// });

var About = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">About</h1>
    <p>This application was created to teach me some React js stuff </p>
    <p>
      Here are some of the tools I used:
    </p>
    <ul>
      <li>
        <a href="https://facebook.github.io/react">React</a> - This was the
          JavaScript framework used.
      </li>
      <li>
        <a href="http://openweathermap.org">Open Weather Map</a> - I used
          Open Wether Map to search for weather data by city name.
      </li>
      <li>
        <a href="https://github.com/mwygoda/ReactWeather">application code</a> -
          whole code available here
      </li>
    </ul>
  </div>

  )
};

module.exports = About;

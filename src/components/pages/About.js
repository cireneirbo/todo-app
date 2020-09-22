import React from 'react';
import { Link } from 'react-router-dom';

function About() {
    return (
        <React.Fragment>
            <h1>About</h1>
            <p>This app was created using <Link style={externalLinkStyle} to="https://reactjs.org/">React</Link> by <Link style={externalLinkStyle} to="https://github.com/cireneirbo">Eric O'Brien</Link>.</p>
        </React.Fragment>
    )
}

const externalLinkStyle = {
    color: 'blue',
    textDecoration: 'underline'
}
export default About;

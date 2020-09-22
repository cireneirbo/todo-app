import React from 'react';
import { Link } from 'react-router-dom';

function About() {
    return (
        <React.Fragment>
            <h1>About</h1>
            <p>This app was created using <Link to="https://reactjs.org/">React</Link> by <Link to="https://github.com/cireneirbo">Eric O'Brien</Link>.</p>
        </React.Fragment>
    )
}

export default About;

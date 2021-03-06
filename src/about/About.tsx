import React, { FunctionComponent } from 'react';
import './About.css';

export const About: FunctionComponent = () => {
    return (
        <div>
            <br />
            <div className="jumbotron">
                <h1 className="display-4">Timer</h1>
                <p className="lead">Author: Brandon</p>
                <hr className="my-4" />
                <h5>
                    This was a simple web app developed for the purpose of learning. <br />
                    Created with React and TypeScript <br />
                    Source can be found: <a href="https://github.com/merc-ury/react-timer">HERE</a>
                </h5>
            </div>
        </div>
    ); 
};
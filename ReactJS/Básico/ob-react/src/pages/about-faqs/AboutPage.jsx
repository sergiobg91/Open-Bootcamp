import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const AboutPage = () => {

    const location = useLocation();
    console.log(`We are in Route: ${location.pathname}`)
    
    //useNavigate en r-r-d V6
    const history = useNavigate();
    
    const navigate = (path) => {
        history.push(path);
    };
    
    //goBack deprecado en r-r-d V6, solo se le resta 1 al actual
    const goBack = () => {
        history(-1);
    };
    
    //goForwad deprecado en r-r-d V6, solo se le suma 1 al actual
    const goForwad = () => {
        history(+1);
    };

    return (
        <div>
            <h1>About | FAQs Page</h1>
            <div>
                <button onClick={ ()=> history("/")}>Go to home</button>
                <button onClick={ goBack }>Go back</button>
                <button onClick={ goForwad }>Go Forward</button>
            </div>
        </div>
    );
}

export default AboutPage;

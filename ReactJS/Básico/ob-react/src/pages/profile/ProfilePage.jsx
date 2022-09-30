import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProfilePage = ( {user} ) => {

    const navigate = useNavigate();
    
    //goBack deprecado en r-r-d V6, solo se le resta 1 al actual
    const goBack = () => {
        navigate(-1);
    };
    

    return (
        <div>
            <h1>New Profile</h1>
            <button onClick={ goBack }>Go to home</button>
            <button onClick={ ()=> navigate("/tasks") }>Go to your task</button>
        </div>
    );
}

export default ProfilePage;

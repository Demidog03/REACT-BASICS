import React from 'react';
import { useNavigate } from 'react-router-dom'

function Header(props) {
    const navigate = useNavigate()

    return (
        <header style={{marginBottom: '30px'}}>
            <button onClick={() => navigate("/login")}>Login</button>
            <button onClick={() => navigate("/posts")}>Posts</button>
        </header>
    );
}

export default Header;

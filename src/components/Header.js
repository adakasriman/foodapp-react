import React from 'react';

function Header(props) {
    return (
        <header>
            <div className='header'>
                <div className='logoAndTitle'>
                    <div className='logo'><i class="fas fa-hamburger"></i></div>
                    <div className='title'>The Grilled Prawn</div>
                </div>
                <nav>
                    <ul>
                        <li>RECIPES</li>
                        <li>DRINKS</li>
                        <li>ECORATIONS</li>
                        <li>ABOUT THE GRILLED PRAWN</li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
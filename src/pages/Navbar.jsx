import React from 'react';
import '../pages/Navbar.css'
function Navbar() {
    return (
       <div className="Navbar">
        <nav className="Navbar_Navigations">
            <li className='Navbar li'>Отдых</li>
            <li className='Navbar li'>Спорт</li>
            <li className='Navbar li'>Недвижимости</li>
            <li className='Navbar li'>Одежда</li>
            {/* <li className='Navbar li'></li>
            <li className='Navbar li'></li>
            <li className='Navbar li'></li> */}
            <li className='Navbar li'>Работа</li>
            <li className='Navbar li'>О нас</li>
            <li className='Navbar li'>FAQ</li>
        </nav>
       </div>
    );
}

export default Navbar;
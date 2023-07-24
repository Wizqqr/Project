import React from 'react';
import '../Main/Main.css'

function Main(props) {
    const {image}=props
    return (
        <div className="Main">
            <div className="Writing">
            {/* <img src={image} alt="l" /> */}
                <h1 className='Rab'>COLA</h1>
                <h3 className='Aex'>Многофункциональный сайт для всех пользователей</h3>
                <p className='XEL'> Универсальный сайт с новым современным дизайном, построенный на HTML5 и CSS3.<br></br> Он содержит в себе набор приятных и малозаметных <br></br>движущихся элементов и невероятный многослойный слайдер.<br></br> Может быть использован для любого типа веб-сайтов <br></br>– бизнес, корпоративных, блогов, портфолио и т.д.<br></br> Сайт имеет адаптивный дизайн, прост в использовании на настольных компьютерах и <br></br>мобильных телефонах..Уникальный сайт имеющий доступ ко всему интереснему. <br></br>Хотите красивую одежды но не дорого? Мы доставим. Хотите с семьей отдохнуть в круизе?<br></br> У нас это есть. Ну а если хотите посмотреть всякий спорт это у нас тоже есть</p>
            </div>
            <div className="Imagins">
                {/* <img src={image} alt="l" /> */}
                <nav className="Browser">
                    <li className='Lish'>Количество боковых панелей:1</li>
                    <li className='Lish'>C готовыми виджетами: да</li>
                    <li className='Lish'>Браузеры: Chrome, Firefox, Safari</li>
                </nav>
                <nav className="Browser">
                    <li className='Lish'>Дизайн:адаптивый</li>
                    <li className='Lish'>Совместимость:2</li>
                </nav>
            </div>
        </div>
    );
}

export default Main;
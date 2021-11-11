import React from 'react';
import s from "./header.module.sass"
import {Link} from "react-router-dom";

export const Header = () => {
    return (
        <>
            <div className={s.headerSmallScreen}>
                <nav className="navbar navbar-expand-lg navbar-light bg-light ">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Navbar</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Features</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Pricing</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link disabled">Disablesd</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <header>
                <div className={s.menu}>
                    <div className={s.elementMenu}><Link to="us">о нас</Link></div>
                    <div className={s.elementMenu}><Link to="utp">utp</Link></div>
                    <div className={s.elementMenu}><Link to="clients">Клиенты</Link></div>
                    <div className={s.elementMenu}><Link to="uslugi">услуги</Link></div>
                    <div className={s.elementMenu}><Link to="production">продукция</Link></div>
                    <div className={s.elementMenu}><Link to="contacts">контакты</Link></div>
                </div>
                <div className={s.language}>
                    <div>ru</div>
                    <div>eng</div>
                </div>
            </header>
        </>
    );
};

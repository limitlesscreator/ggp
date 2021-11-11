import React, {useState, useRef} from 'react';
import s from './Contacts.module.sass'
import {Link} from "react-router-dom";
import emailjs from 'emailjs-com'

export const Contacts = () => {
    const position = [55.766891, 37.573269]

    function sendEmail(e) {
        e.preventDefault()

        emailjs.sendForm('service_vy2fk69', 'template_1wrepuw', e.target, 'user_a7u0CsdAebvMAmy6mZOU6').then(res => console.log(res)).catch(err => console.log(err))
    }

    return (
        <div className={s.sectionForBottomMarging}>
            <div className={s.content}>
                <a className={s.linkHome} href="/"></a>
                <div className={s.contentWith}>Контакты</div>
            </div>
            <div className={s.split}>
                <Link to="/">Главная</Link>
                /
                <a href="#">Контакты</a>
            </div>
            <div className={s.contentWithStandart}>

                <div className={s.flexBottom}>
                    <div className={s.bottomDescription}>
                        <div className={s.phones}>
                            Телефоны <br/>
                            <div>+7 (800) 800-89-89 <br/>
                                +7 (800) 800-89-89
                            </div>
                        </div>
                        <div className={s.form} onSubmit={sendEmail}>
                            Форма обратной связи
                            <form action="https://formsubmit.co/0428vlad0428@mail.ru" method="POST">
                                <input type="hidden" name="_next" value="http://limitlesscreator.tech/thanks.html"/>
                                    <input type="hidden" name="_subject" value="New submission!"/>
                                    <input className={s.intupForm} type="text" name={'name'} placeholder={'Имя*'} required/>
                                <input className={s.intupForm} type="phone" name={'phone'} placeholder={'Телефон*'} required/>
                                <input className={s.intupForm} type="email" name={'email'} placeholder={'Почта'} required/>
                                <input className={s.inputButton} type="submit" value={'Отправить'}/>
                            </form>
                            <div className={s.soglasie}>Нажимая кнопку отправить, вы подтверждаете <br/> согласие
                                обработки персональных данных
                            </div>
                        </div>
                    </div>
                    <div className={s.bottomDescription}>
                        <div className={s.phones}>
                            E-mail <br/>
                            <div>info@linksite.ru</div>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}


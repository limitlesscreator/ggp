import React from 'react';
import s from './Contacts.module.sass'
import {Link} from "react-router-dom";
import emailjs from 'emailjs-com'
import {GoogleMap, withGoogleMap, withScriptjs, Marker} from "react-google-maps";
import * as parksData from './skateboard-parks.json'

function Map() {
    return (
        <GoogleMap defaultZoom={10}
                   defaultCenter={{lat: 55.766890, lng: 37.573270}}
        >
            {parksData.features.map((park) => (
                <Marker key={park.properties.PARK_ID} position={{
                    lat: park.geometry.coordinates[1],
                    lng: park.geometry.coordinates[1],
                }}/>
            ))}
        </GoogleMap>
    )
}

const WrappedMap = withScriptjs(withGoogleMap(Map))

export const Contacts = () => {
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
                            <form action="">
                                <input className={s.intupForm} type="text" name={'name'} placeholder={'Имя*'}/>
                                <input className={s.intupForm} type="phone" name={'phone'} placeholder={'Телефон*'}/>
                                <input className={s.intupForm} type="email" name={'email'} placeholder={'Почта'}/>
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
                        <div style={{height: "500px", width: "500px"}}>
                            <WrappedMap
                                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&
                                libraries=geometry,drawing,places&key=${
                                    process.env.REACT_APP_GOOGLE_KEY
                                }`}
                                loadingElement={<div style={{height: "100%"}}/>}
                                containerElement={<div style={{height: "100%"}}/>}
                                mapElement={<div style={{height: "100%"}}/>}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}


import React, {useState} from 'react'
import s from './Header.module.css'
import {NavLink} from 'react-router-dom'
import tel from '../../content/social/tel.svg'
import inst from '../../content/social/inst.svg'
import vk from '../../content/social/vk.svg'
import hh from '../../content/social/hh.svg'
import menu from '../../content/menu.svg'
import close from '../../content/close.svg'

export const Header = () => {

    const [active, setActive] = useState(false)

    const openMenu = () => {
        setActive(true)
    }
    const closeMenu = () => {
        setActive(false)
    }

    return (
        <div className={s.wrapper}>
            <button onClick={openMenu} className={`${s.btn} ${s.btn_menu}  ${active ? s.btn : s.active}`}>
                <img src={menu} className={s.btn_img}/>
            </button>
            <div className={`${s.main} ${ active ? s.active : s.main }`}>
                <button onClick={closeMenu} className={`${s.btn} ${s.btn_close} ${active ? s.active : s.btn}`}>
                    <img src={close} className={s.btn_img}/>
                </button>
                <div className={s.menu}>
                    <NavLink to={'/home'} activeClassName={s.selected}>Главная</NavLink>
                    <NavLink to={'/about'} activeClassName={s.selected}>Обо мне</NavLink>
                    <NavLink to={'/projects'} activeClassName={s.selected}>Проекты</NavLink>
                </div>
                <div className={s.social}>
                    <a href="https://t.me/rymaria" className={s.tel}>
                        <img src={tel} className={s.social_img}/>
                    </a>
                    <a href="https://www.instagram.com/rymaria2020/" className={s.inst}>
                        <img src={inst} className={s.social_img}/>
                    </a>
                    <a href="https://vk.com/rymaria" className={s.vk}>
                        <img src={vk} className={s.social_img}/>
                    </a>
                    <a href="https://spb.hh.ru/resume/9337a1fdff08e4014b0039ed1f454833336130" className={s.hh}>
                        <img src={hh} className={s.social_img}/>
                    </a>
                </div>
            </div>
        </div>
    )
}
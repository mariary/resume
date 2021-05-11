import React, {useRef} from 'react'
import s from './Main.module.css'
import me from '../../../content/me.PNG'
import arrow from '../../../content/arrow.svg'
import {useState} from 'react'

export const Main = () => {

    const skillsRef = useRef(null)
    const [active, setActive] = useState(false)
    const scrollToRef = (ref) => window.scrollTo({top: ref.current.offsetTop, behavior: 'smooth'})
    const scrollToTop = () => window.scrollTo({top: 0, behavior: 'smooth'})

    const executeScroll = () => {
        if (active) {
            setActive(false)
            scrollToTop()
        } else {
            setActive(true)
            scrollToRef(skillsRef)
        }
    }

    return (
        <div className="content">
            <div className={s.main}>
                <img className={s.img} src={me}/>
                <div className={s.info}>
                    <p className={s.name}>Всем привет!</p>
                    <p className={s.about}>Меня зовут Мария Рыбаконенко</p>
                    <p className={s.text}>Я Frontend-разработчик, преимущественно на <span>React</span>.</p>
                </div>
            </div>
            <div className={`${s.arrow} ${active ? s.active : s.arrow}`} onClick={executeScroll}><img src={arrow}/>
            </div>
            <div className={s.skills}>
                <div ref={skillsRef} className={s.skills_title}>Мои навыки:</div>
                <ul className={s.skills_list}>
                    <li className={s.skills_list_item}>React</li>
                    <li className={s.skills_list_item}>React Native</li>
                    <li className={s.skills_list_item}>Redux</li>
                    <li className={s.skills_list_item}>JavaScript</li>
                    <li className={s.skills_list_item}>HTML, CSS, БЭМ</li>
                    <li className={s.skills_list_item}>Git</li>
                    <li className={s.skills_list_item}>Gulp, Webpack</li>
                    <li className={s.skills_list_item}>SASS, Pug, module.css</li>
                    <li className={s.skills_list_item}>Photoshop, Figma</li>
                    <li className={s.skills_list_item}>Английский B1</li>
                </ul>
            </div>
        </div>
    )
}
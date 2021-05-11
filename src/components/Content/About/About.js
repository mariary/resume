import React from 'react'
import s from './About.module.css'
import uni from '../../../content/uni.png'

export const About = () => {
    return (
        <div className={s.main}>
            <div className={s.info}>
                <p className={s.education}>Я студентка третьего курса Санкт-Петербургского Политехнического
                    Университета.
                    <img src={uni} className={s.uni}/>
                </p>
                <p className={s.education}>Моя специальность:<span>Механика и математическое моделирование</span>
                </p>
                <p className={s.education}>Около года назад начала изучать Frontend.</p>
            </div>
            <div className={s.job}>
                <p className={s.title}>Опыт работы:</p>
                <ol className={s.list}>
                    <li className={s.list_item}>
                        <span className={s.time}>Лето 2020г: </span>
                        <span className={s.name}>Помощник верстальщика</span>
                        <ul className={s.about}>
                            <li className={s.about_item}>Верстка новых страниц</li>
                            <li className={s.about_item}>Внесение правок в актуальную верстку</li>
                            <li className={s.about_item}>Работа со сборщиком Gulp</li>
                        </ul>
                    </li>
                    <li className={s.list_item}>
                        <span className={s.time}>Зима 2021г: </span>
                        <span className={s.name}>Верстальщик-тестировщик</span>
                        <ul className={s.about}>
                            <li className={s.about_item}>Работа с стартапе</li>
                            <li className={s.about_item}>Верстка новых страниц</li>
                            <li className={s.about_item}>Создание калькуляторов</li>
                            <li className={s.about_item}>Тестирование верстки и js кода программиста</li>
                        </ul>
                    </li>
                </ol>
            </div>
        </div>
    )
}
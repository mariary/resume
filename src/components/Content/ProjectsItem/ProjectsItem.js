import React from 'react'
import s from './ProjectsItem.module.css'

export const ProjectsItem = (props) => {
    return (
        <div className={s.main}>
            <a className={s.name} href={props.info.link}>
                {props.info.name}
                <img className={s.img} src={props.info.img} alt=""/>
            </a>
            <p className={s.technology}>{props.info.technology}</p>
            <p className={s.about}>{props.info.about}</p>
        </div>
    )
}
import React from 'react'
import s from './Projects.module.css'
import {ProjectsItem} from '../ProjectsItem/ProjectsItem'
import music_app from '../../../content/projects/music_app.PNG'
import film_app from '../../../content/projects/film_search.PNG'
import weather from '../../../content/projects/weather.PNG'
import to_do_app from '../../../content/projects/to_do_app.PNG'
import phonebook from '../../../content/projects/phonebook.PNG'

export const Projects = () => {
    let projects = [
        {
            id: 1,
            name: 'Music App',
            link: 'https://mariary.github.io/music-app/',
            img: music_app,
            technology:'Написано на React',
            about: 'Приложение для поиска музыки.'
        }, {
            id: 2,
            name: 'Phonebook',
            link: 'https://mariary.github.io/phonebook/',
            img: phonebook,
            technology:'Использование React, Redux, Hooks',
            about: 'Телефонная книга с возможностью добавлять и удалять номера, а также получение данных через API.'
        }, {
            id: 3,
            name: 'Film Search',
            link: 'https://mariary.github.io/film-react-app/',
            img: film_app,
            technology:'Использование React и Hooks',
            about: 'Поиск фильмов. Адаптив под мобильные устройства.'
        }, {
            id: 4,
            name: 'Weather app',
            link: 'https://mariary.github.io/weather_app/',
            img: weather,
            technology:'Vanilla JS',
            about: 'Прогноз погоды.'
        }, {
            id: 5,
            name: 'To Do App',
            link: 'https://mariary.github.io/to_do_app/',
            img: to_do_app,
            technology:'Vanilla JS',
            about: ''
        }
    ]
    return (
        <div className={s.main}>
            {projects.map(item => <ProjectsItem info={item}/>)}
        </div>
    )
}
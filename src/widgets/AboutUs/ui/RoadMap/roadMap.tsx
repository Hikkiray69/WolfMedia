import { RoadMapItem } from '../RoadMapItem/roadMapItem'
import css from './roadMap.module.css'
import clsx from 'clsx'

export function RoadMap({ className }: { className?: string }) {

    const roadMapItems = [
        {
            year: 2014,
            text: `С 1 паблика выросли до сетки из <strong>50 сообществ</strong>` 
        },
        {
            year: 2015,
            text: 'Первый <strong>миллион</strong> подписчиков'
        },
        {
            year: 2016,
            text: '<strong>Активный рост</strong> сообществ и аудитории'
        },
        {
            year: 2017,
            text: 'Открытие собственного <strong>офиса</strong>, переход от виртуальной команды к <strong>реальной</strong>, запуск <strong>видео-продакшена</strong>'
        },
        {
            year: 2018,
            text: 'Разработан <strong>собственный софт</strong> по сбору детальной статистики'
        },
        {
            year: 2019,
            text: 'Агрегация сообществ под управление <strong>WolfMedia</strong>'
        }

    ]

    return (


        <ul className={clsx(className, css.line,)} >
            {roadMapItems.map((el, index) => (
                <RoadMapItem year={el.year} text={el.text} key={index} />
            ))}

        </ul>


    )
}
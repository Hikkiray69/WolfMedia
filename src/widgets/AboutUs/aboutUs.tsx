import css from './aboutUs.module.css'

import { RoadMap } from "./ui/RoadMap/roadMap";


export function AboutUs() {

    return (

        <section className={css.container}>

            <div className={css.connectTitleAndContent}>
                <h2 className={css.label}>
                    О НАС
                </h2>
                <article className={css.content}>
                    <div className={css.item}>
                        <p className={css.description}>
                            «Wolfmedia» – это редакция, где ежедневно авторы,
                            иллюстраторы, дизайнеры, видеографы, создают уникальный контент и
                            доносят его до огромной аудитории с помощью социальных сетей.< br />
                            < br />
                            Социальные сети стали главным инструменом коммуникации в 21 веке. Сообщества, паблики,
                            youtube-каналы, блоги получают внимание миллионной аудитории, зачастую их охват превышает
                            охват популярных телеканалов и журналов.< br />
                            < br />
                            И пока традиционные СМИ занимаются перетаскивание аудитории с одной площадки на
                            другую, мы идем прямо к читателю, в его новостную
                            ленту.
                        </p>

                        <div className={css.roadMapMobile}><RoadMap /></div>

                        <button className={css.loadMoreButton}>
                            Подробнее
                        </button>

                    </div>


                    <div className={css.roadMap}><RoadMap /></div>
                </article>
            </div>


        </section>
    )
}
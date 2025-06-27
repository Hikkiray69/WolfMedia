import css from './year.module.css'


export function YearBlock({ year }: { year: number | string }) {

    return (
        <div className={css.element}>
            <span className={css.year}>{year}</span>
            <span className={css.triangle}></span>
        </div>
    )
}
import css from "./thematics.module.css"
import { thematicsInfo } from "./const";
import { Theme } from './ui/Theme/theme';

export function Thematics() {
    return (
        <section className={css.container}>
            <div className={css.content}>
                <h2 className={css.title}>Более 150 тематических сообществ</h2>
                <ul className={css.list}>
                    {thematicsInfo.map((theme, index) => (
                        <Theme
                            key={index}
                            title={theme.title}
                            imageSrc={theme.imageSrc}
                        />
                    ))}
                </ul>
                <p className={css.caption}>Присутствуем на всех популярных платформах</p>
            </div>
        </section>
    );
}
import css from "./startInfo.module.css"
import Image from "next/image";

export function StartInfo () {
    return (
        <section className={css.container}>
            <div className={css.content}>
                <h1 className={css.title}>Издательство новых медиа</h1>
                <div className={css.statistics}>
                    <h2 className={css.statistics_item}>
                        <p className={css.statistics_item_count}>100 000 000</p>
                        <p className={css.statistics_item_text}>наша аудитория</p>
                    </h2>
                    <h2 className={css.statistics_item}>
                        <p className={css.statistics_item_count}>12 000 000</p>
                        <p className={css.statistics_item_text}>ежедневно нас читают</p>
                    </h2>
                </div>
                <div className={css.arrow}>
                    <Image src="../svg/arrowDown.svg" alt="arrowDown" width={24} height={12}/>
                </div>
            </div>
        </section>
    );
}
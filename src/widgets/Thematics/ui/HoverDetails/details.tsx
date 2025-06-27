import Image from "next/image";
import css from "./details.module.css"
import { detailsIcons } from "./const";
import clsx from "clsx";

export function HowerDetails ({className}: {className: string }) {
    return (
        <div className={clsx(css.container, className)}>
            <div className={css.arrow}></div>
            <div className={css.content}>
                {detailsIcons.map((el, index) => (
                    <figure className={css.item} key={index}>
                        <Image 
                        src={el.imageSrc} 
                        alt={el.title} 
                        width={80} 
                        height={80} 
                        className={css.icon}/>
                        <figcaption className={css.caption}>
                            {el.title}
                        </figcaption>
                    </figure>
                ))}
            </div>
        </div>
    );
}
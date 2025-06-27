import css from "./theme.module.css"
import Image from "next/image"
import { HowerDetails } from '../HoverDetails/details';

type ThemeProps = {
    title: string;
    imageSrc: string;
}

export function Theme ({title, imageSrc}: ThemeProps) {
    return (
        <li className={css.container}>
            <button className={css.item}>
                <Image
                src={imageSrc}
                alt={title}
                width={100}
                height={100}
                className={css.image}
                />
                {title}
            </button>
            <HowerDetails className={css.hoverDetails}/>
        </li>
    );
}
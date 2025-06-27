import css from './roadMapItem.module.css'
import { PointText } from './ui/PointText/pointText';
import { YearBlock } from './ui/Year/year';
import Image from 'next/image';

type RoadMapItem = {
    year: number | string;
    text: string
}


export function RoadMapItem({ year, text }: RoadMapItem) {
    return (
        <li className={css.container}>
            <YearBlock year={year} />
            <Image className={css.point} src='/svg/point.svg' alt='' aria-hidden={true} width={10} height={10} />
            <PointText text={text} />
        </li>
    )
}
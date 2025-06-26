import Image from "next/image";
import css from "./case.module.css"
import { decode } from "html-entities";
import { CaseItem } from "@/store/casesSlice";

export default function CaseCard({ item }: { item: CaseItem }) {
    return (
        <div className={css.caseCard}>
            <h2 className={css.caseTitle}>{decode(item.title)}</h2>
            {Array.isArray(item.tagsDisplayed) && item.tagsDisplayed.length > 0 && (
                <p className={css.tags}>Теги: {item.tagsDisplayed.join(", ")}</p>
            )}
            {item.poster?.image?.src && (
                <div className={css.imageWrapper}>
                    <Image
                        src={item.poster.image.src}
                        alt={item.poster.alt || decode(item.title)}
                        width={400}
                        height={300}
                        className={css.imageSize}
                    />
                </div>
            )}
        </div>
    );
}

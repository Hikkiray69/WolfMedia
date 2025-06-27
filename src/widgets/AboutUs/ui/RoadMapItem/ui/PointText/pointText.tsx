import css from './pointText.module.css';

export function PointText({ text }: { text: string }) {
    return (
        <div className={css.element}>
            <div className={css.bubble}>
                <span
                    className={css.text}
                    dangerouslySetInnerHTML={{ __html: text }}
                />
                <span className={css.triangle}></span>
            </div>
        </div>
    );
}

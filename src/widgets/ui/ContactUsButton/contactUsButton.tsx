'use client'

import { useState } from "react";
import PopUpContactUs from './PopUpContactUs/popUpContactUs'
import css from './contactUsButton.module.css'
import Image from "next/image";

export function ContactUsButton() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>

            <button className={css.button} onClick={() => setIsOpen(true)}>
                <span className={css.text}>НАПИСАТЬ НАМ</span>
                <Image src="/svg/mail.svg" alt="" width={24} height={24} className={css.mail}/>
            </button>
            {isOpen && <PopUpContactUs onClose={() => setIsOpen(false)} />}
        </>
    );
}
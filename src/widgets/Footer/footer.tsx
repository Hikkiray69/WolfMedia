import css from './footer.module.css'
import Image from 'next/image';
import { Contacts } from '../ui/Contacts/contacts';

export function Footer() {
    return (
        <footer className={css.container}>
            <nav className={css.content}>
                <div className={css.center}>
                    <Image src="/svg/wolfMediaGray.svg" alt='logo' width={208} height={51} />
                    <p className={css.copyright}>Copyright 2019 (c) All rights reserved.</p>
                </div>
                <Contacts />
                <div className={css.number}>
                    <Image src="/svg/phoneCall.svg" alt="" width={24} height={24} />
                    <p className={css.phoneNumber}>+7 495 257 55 65</p>
                </div>
            </nav>
        </footer>
    );
}
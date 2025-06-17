import css from './footer.module.css'
import Image from 'next/image';
import { Contacts } from '../ui/Contacts/contacts';

export function Footer() {
    return (
        <footer className={css.container}>
            <nav className={css.content}>
                <div className={css.copyrightDirection}>
                    <div className={css.navItemsDirection}>
                        <div className={css.center}>
                            <div className={css.logo}>
                                <Image src="/svg/wolfMediaGrayWolf.svg" alt='logo' width={51} height={51} priority className={css.logoSizeGrayWolf} />
                                <Image src="/svg/wolfMediaGrayName.svg" alt='logo' width={150} height={51} priority className={css.logoSizeGrayName} />
                            </div>
                            <p className={css.copyrightDesktop}>Copyright 2019 (c) All rights reserved.</p>
                        </div>
                        <div className={css.contactsTablet}>
                            <Contacts />
                        </div>
                        <div className={css.contactsGap}>
                            <div className={css.contactsDesktop}>
                                <Contacts />
                            </div>
                            <div className={css.number}>
                                <Image src="/svg/phoneCall.svg" alt="" width={24} height={24} />
                                <p className={css.phoneNumber}>+7 495 257 55 65</p>
                            </div>
                        </div>
                    </div>
                    <p className={css.copyrightTablet}>Copyright 2019 (c) All rights reserved.</p>
                </div>
            </nav>
        </footer>
    );
}
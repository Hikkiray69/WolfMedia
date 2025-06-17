import Image from "next/image";
import css from "./header.module.css"
import { Navigation } from "../ui/Navigation/navigation";
import { Contacts } from "../ui/Contacts/contacts";
import { ContactUsButton } from "../ui/ContactUsButton/contactUsButton";

export function Header() {
    return (
        <header className={css.content}>
            <div className={css.navigation}>
                <div className={css.logo}>
                    <Image src="../svg/wolfMediaWolf.svg" alt="wolfMediaWolf" width={70} height={70} priority className={css.logoSizeWolf} />
                    <Image src="../svg/wolfMediaName.svg" alt="wolfMediaName" width={206} height={70} priority className={css.logoSizeName} />
                </div>
                <div className={css.navDesktop}>
                    <Navigation />
                </div>
            </div>
            <div className={css.navTablet}>
                <Navigation />
            </div>
            <div className={css.contacts}>
                <div className={css.contactsDisplay}>
                    <Contacts />
                </div>
                <div className={css.contactUs}>
                    <div className={css.number}>
                        <Image src="/svg/phoneCall.svg" alt="" width={24} height={24} />
                        <p className={css.phoneNumber}>+7 495 257 55 65</p>
                    </div>
                    <ContactUsButton />
                </div>
            </div>
        </header>
    );
}
import css from './contacts.module.css'
import Image from 'next/image';
import Link from 'next/link';

export function Contacts() {
    return (
        <div className={css.contacts}>
            <ul className={css.list}>
                <li>
                    <Link href="https://vk.com" target="_blank" rel="noopener noreferrer" >
                        <Image src="/svg/vkontakte.svg" alt="VK" width={24} height={24} className={css.lightShadows}/>
                    </Link>
                </li>
                <li>
                    <Link href="https://ok.ru/" target="_blank" rel="noopener noreferrer">
                        <Image src="/svg/odnoklassniki.svg" alt="OK" width={24} height={24} className={css.lightShadows}/>
                    </Link>
                </li>
                <li>
                    <Link href="https://facebook.fr/" target="_blank" rel="noopener noreferrer">
                        <Image src="/svg/facebook.svg" alt="FB" width={24} height={24} className={css.lightShadows}/>
                    </Link>
                </li>
                <li>
                    <Link href="https://x.com/" target="_blank" rel="noopener noreferrer">
                        <Image src="/svg/twitter.svg" alt="X" width={24} height={24} className={css.lightShadows}/>
                    </Link>
                </li>
            </ul>
        </div>
    );
}
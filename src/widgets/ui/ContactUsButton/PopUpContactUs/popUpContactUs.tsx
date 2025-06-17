import { useEffect, useRef, useState } from 'react';
import css from './popUpContactUs.module.css'

interface PopupFormProps {
    onClose: () => void;
}

export default function PopUpContactUs({ onClose }: PopupFormProps) {
    const popupRef = useRef<HTMLDivElement>(null);

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        message: '',
    });

    const [errors, setErrors] = useState({
        name: '',
        phone: '',
        message: '',
    });

    // Закрытие при клике вне попапа
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
                onClose();
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [onClose]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validate = () => {
        const newErrors = {
            name: formData.name ? '' : 'Введите имя',
            phone: /^[0-9\-\+() ]+$/.test(formData.phone) ? '' : 'Неверный номер',
            message: formData.message ? '' : 'Введите сообщение',
        };
        setErrors(newErrors);
        return Object.values(newErrors).every((err) => err === '');
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validate()) {
            console.log('Отправлено:', formData);
            onClose();
        }
    };

    return (
        <div className={css.overlay}>
            <div ref={popupRef} className={css.popup}>
            <button className={css.popupClose} type='button' onClick={onClose} aria-label="Закрыть">×</button>
                <form onSubmit={handleSubmit}>
                    <h2>НАПИСАТЬ НАМ</h2>

                    <input
                        type="text"
                        name="name"
                        placeholder="Имя"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    {errors.name && <p className={css.error}>{errors.name}</p>}

                    <input
                        type="text"
                        name="phone"
                        placeholder="Номер"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                    {errors.phone && <p className={css.error}>{errors.phone}</p>}

                    <textarea
                        name="message"
                        placeholder="Сообщение"
                        value={formData.message}
                        onChange={handleChange}
                    />
                    {errors.message && <p className={css.error}>{errors.message}</p>}

                    <button className={css.submit} type="submit">Отправить</button>
                </form>
            </div>
        </div>
    );
}

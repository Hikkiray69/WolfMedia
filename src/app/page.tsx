import Image from "next/image";
import css from "./page.module.css";
import { StartInfo } from "@/widgets/StartInfo/startInfo";
import { AboutUs } from "@/widgets/AboutUs/aboutUs"
import { Thematics } from "@/widgets/Thematics/thematics";

export default function Home() {
    return (
        <main className={css.main}>
            <StartInfo/>
            <AboutUs/>
            <Thematics/>
        </main>
    );
}

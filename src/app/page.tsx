import Image from "next/image";
import css from "./page.module.css";
import { StartInfo } from "@/widgets/StartInfo/startInfo";

export default function Home() {
    return (
        <main>
            <StartInfo/>
        </main>
    );
}

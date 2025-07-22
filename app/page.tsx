import ChangeTheme from "@/components/ChangeTheme";
import MainPanel from "@/components/MainPanel";
import "@/components/style.css"
import { getTheme } from "@/utils/ThemeContext";

export default async function Home() {
    return (
        <div>
            <ChangeTheme></ChangeTheme>
            <MainPanel></MainPanel>
        </div>
    );
}
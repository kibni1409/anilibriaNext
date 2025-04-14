import {FC} from "react";
import { Header, Footer} from "@/components/layout";
import {Underdog} from 'next/font/google'
import styles from "./Layout.module.scss";

const fontUnderdog = Underdog({
    variable: '--Underdog',
    weight: "400",
    subsets: ['latin'],
})

const Layout: FC<React.PropsWithChildren> = ({children}) => {
    return (
        <div className={fontUnderdog.className}>
            <Header/>
            <main className={styles.Main}>{children}</main>
            <Footer/>
        </div>
    )
}

export default Layout;
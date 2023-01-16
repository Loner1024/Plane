import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {CssBaseline, GeistProvider} from "@geist-ui/core";
import 'inter-ui/inter.css'
import 'normalize.css'
import {useState} from "react";
import NavBar from "../components/NavBar";

export default function App({Component, pageProps}: AppProps) {
    const [theme, setTheme] = useState('light')
    const switchTheme = () => {
        setTheme(lastThemeType => (lastThemeType === "dark" ? "light" : "dark"))
    }
    return (
        <GeistProvider themeType={theme}>
            <CssBaseline/>
            <NavBar page='blog' switchTheme={switchTheme} themeType={theme}/>
            <Component {...pageProps} />
        </GeistProvider>
    )
}

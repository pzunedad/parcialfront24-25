import { PageProps } from "$fresh/server.ts";
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";

export default function Layout({Component}:PageProps) {
    return (
        <div class="Layout">
            <Header/>
            <Component/>
            <Footer/>
        </div>
    )
}


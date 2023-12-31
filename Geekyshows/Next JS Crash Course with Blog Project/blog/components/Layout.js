import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

export default function Layout({ children }) {
    return (
        <>
            <Navbar />
            <Hero />
            <main>
                {children}
            </main>
        </>
    )
}

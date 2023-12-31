export default function ColorBoxLayout({ children, left, right }) {
    // const isSidebar = false;
    const isSidebar = true;

    return (
        <section>
            {children}
            {/* {left}
            {right} */}
            {isSidebar ? left : right}
        </section>
    );
}
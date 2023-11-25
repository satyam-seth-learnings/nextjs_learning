import Link from 'next/link';

export default function About() {
    return (
        <div>
            <h1>About Page</h1>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/product">Product</Link></li>
                <li><Link href="/product/mobile">Mobile</Link></li>
                <li><Link href="/product/laptop">Laptop</Link></li>
            </ul>
        </div>
    );
}

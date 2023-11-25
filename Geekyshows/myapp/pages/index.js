import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
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

import Link from 'next/link';
import { Icon } from '../Icon';

export const FooterNav = () => {
  return (
    <nav className="flex w-full">
      <Link href="/">Home</Link>
      <Link href="/">Conservation</Link>
      <Link href="/blog">News & Media</Link>
      <Link href="/">Work</Link>
      <Link href="/">Map</Link>
      <Link href="/">About</Link>
      <Link href="/">Contact</Link>
      <a href="https://www.linkedin.com/in/robbie-redfearn/">
        <Icon name="LinkedIn" />
      </a>
    </nav>
  );
};

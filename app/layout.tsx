import { HeaderNav } from '../components/HeaderNav';
import './global.scss';

type Layout = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Layout) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <header>
          <HeaderNav />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}

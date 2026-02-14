import { Urbanist, Nunito } from 'next/font/google';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'slick-carousel/slick/slick.css';
import './assets/main.css';
import { Providers } from './Providers';

const urbanist = Urbanist({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--body-color-font',
});
const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--heading-font',
});

export const metadata = {
  title: {
    absolute: '',
    default: 'DigitalSurf - AI-Powered Digital Solutions',
    template: '%s | DigitalSurf - AI-Powered Digital Solutions',
  },
  description:
    'DigitalSurf - Transform your business with cutting-edge AI solutions and intelligent automation',
  openGraph: {
    title: 'DigitalSurf - AI-Powered Digital Solutions',
    description:
      'DigitalSurf - Transform your business with cutting-edge AI solutions and intelligent automation',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <meta name='author' content='Themeservices' />
        <link rel='icon' href='/favicon.ico' sizes='any' />
      </head>
      <body className={`${urbanist.variable} ${nunito.variable}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

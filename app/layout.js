import { Inter } from 'next/font/google';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Provider from '@/provider/contextProvider';
import { ThemeProvider } from 'next-themes';
import Cursor from '@/components/cursor/cursor';
import './globals.css';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Abu Bokor',
  description: 'Abu Bokor full stack developer Portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-white dark:bg-black dark:right left`}
      >
        <ThemeProvider>
          <Provider>
            <Cursor />
            <Navbar />
            <div className="container mx-auto">{children}</div>
            <Footer />
          </Provider>
        </ThemeProvider>
      </body>
    </html>
  );
}

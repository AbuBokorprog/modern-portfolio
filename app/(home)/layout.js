import { Inter } from 'next/font/google';
import '../globals.css';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Provider from '@/provider/contextProvider';
import Home from '@/components/home';
import { ThemeProvider } from 'next-themes';
import Cursor from '@/components/cursor/cursor';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Abu Bokor || Front-End Developer',
  description: 'Frontend Developer Portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}bg-white dark:bg-black `}>
        <Home>
          <ThemeProvider>
            <Provider>
              <Cursor />
              <Navbar />
              <div className="container mx-auto">{children}</div>
              <Footer />
            </Provider>
          </ThemeProvider>
        </Home>
      </body>
    </html>
  );
}

import { Oswald, Poppins } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'leaflet/dist/leaflet.css';
import "./globals.css";



const oswald = Oswald({
  weight: ['400', '600', '700'], // Specify weights you need
  style: ['normal'], // Optional: specify styles (normal, italic)
  subsets: ['latin'], // Subsets for character support
  display: 'swap', // Ensure font swapping for better UX
  variable: '--font-oswald', // CSS variable for Oswald
});


const poppins = Poppins({
  weight: ['400', '500', '700'], // Specify weights you need
  style: ['normal', 'italic'], // Optional: specify styles
  subsets: ['latin'], // Subsets for character support
  display: 'swap', // Ensure font swapping for better UX
  variable: '--font-poppins', // CSS variable for Poppins
});

export const metadata = {
  title: "Hobbeeme - UAE's First of its kind Hobby Marketplace App",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${oswald.variable} ${poppins.variable}`}>
        {children}
      </body>
    </html>
  );
}

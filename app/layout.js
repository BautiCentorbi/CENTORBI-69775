import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/ui/Semantic/NavBar";
import Footer from "./components/ui/Semantic/Footer";

const inter = Inter({ subsets: ["latin"] });



export const metadata = {
  title: 'Playground 1',
  description: 'Página creada a modo de playground para ir probando las herramientras aprendidas durante la cursada sin afectar al proyecto final',
  keywords: 'next, react, playground, coderhouse, course',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <NavBar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}

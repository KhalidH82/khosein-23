import NavBar from "/components/NavBar";
import Footer from "/components/Footer";
import "./globals.scss";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="dark">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

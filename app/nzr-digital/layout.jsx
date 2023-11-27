import NavBar from "/components/NavBar";
import Footer from "/components/Footer";
import "../globals.scss";

export const metadata = {
  title: "NZR Digital | Khalid Hosein",
  description: "NZR Digital Website Agency",
  keywords: "",
};

export default function NzrLayout({ children }) {
  return (
    <html lang="en">
      <body className="dark">
        {children}
      </body>
    </html>
  );
}

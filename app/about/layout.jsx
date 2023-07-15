import "../globals.css";
import About from "/components/About";

export default function RootLayout({ children }) {
  return (
    <div>
    <About />
          {children}
    </div>
  );
}

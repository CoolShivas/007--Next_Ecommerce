import Navbar from "../components/Navbar";
import "./global.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-300">
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}

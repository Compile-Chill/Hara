import "@/app/globals.css"; 
import Navbar from "@/app/components/Navbar"; 

export const metadata = {
  title: "Hara",
  description: "Personalized skin care routines",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-white text-gray-900">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
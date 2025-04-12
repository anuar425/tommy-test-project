import { Header } from "@/widgets/Header";
import "./globals.css";
import { BottomHeader } from "@/widgets/BottomHeader";
import { Footer } from "@/widgets/Footer";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <header className="bg-primary">
          <Header />
        </header>
        <section>
          <BottomHeader />
        </section>
        <main>
          {children}
        </main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}

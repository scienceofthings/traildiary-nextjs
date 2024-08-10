import type { Metadata } from "next";
import Navigation from "@/app/components/Navigation/Navigation";
import {Container} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css'

export const metadata: Metadata = {
  title: "Traildiary"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <head>
        <base href="/" />
    </head>
      <body>
      <header>
        <Navigation/>
      </header>
      <Container fluid>
                {children}
      </Container>

      </body>
    </html>
  );
}

import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function RootLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">{children}</main>
      <Footer />
    </div>
  );
}

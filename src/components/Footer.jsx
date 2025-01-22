import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Developer Contact. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

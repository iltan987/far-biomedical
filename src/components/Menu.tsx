"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { FaBars, FaSearch, FaShoppingCart, FaTimes } from "react-icons/fa";

export function Menu() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Mobile Header */}
      <div className="flex items-center justify-between h-16 lg:hidden">
        <Button
          variant="ghost"
          size="icon"
          className="text-gray-600 hover:text-black"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <FaTimes className="w-5 h-5" />
          ) : (
            <FaBars className="w-5 h-5" />
          )}
        </Button>
        <div className="text-xl font-bold text-black">FAR</div>
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-600 hover:text-black"
          >
            <FaSearch className="w-4 h-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-600 hover:text-black"
          >
            <FaShoppingCart className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white">
          <div className="py-4 space-y-2">
            <Button
              variant="ghost"
              className="w-full justify-start text-white font-medium py-3 rounded-md"
              style={{ backgroundColor: "#ffc30b" }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              R&D
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start text-white font-medium py-3 rounded-md"
              style={{ backgroundColor: "#ffc30b" }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Products
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start text-white font-medium py-3 rounded-md"
              style={{ backgroundColor: "#ffc30b" }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              News
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start text-white font-medium py-3 rounded-md"
              style={{ backgroundColor: "#ffc30b" }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Company
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start text-white font-medium py-3 rounded-md"
              style={{ backgroundColor: "#ffc30b" }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Button>
            <Button
              className="w-full bg-black text-white hover:bg-gray-800 py-3"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Sign in
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

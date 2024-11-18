"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const Navigation = () => {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Features", href: "#features" },
    { name: "Screenshots", href: "#screenshots" },
    { name: "Get Started", href: "#get-started" },
    { name: "Contact", href: "#contact" },
  ];

  if (!isMounted) {
    return null;
  }

  return (
    <nav className="fixed w-full bg-background/80 backdrop-blur-sm z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold">ConnectGate</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground/80 hover:text-foreground transition-colors"
              >
                {item.name}
              </a>
            ))}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              {theme === "light" ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="flex md:hidden items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              {theme === "light" ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
            </Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                {/* Add a Dialog Title for Accessibility */}
                <SheetTitle className="text-lg font-bold">
                  Navigation
                </SheetTitle>
                <div className="flex flex-col space-y-4 mt-4">
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-foreground/80 hover:text-foreground transition-colors"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

























// "use client"

// import { useState, useEffect } from "react"
// import { useTheme } from "next-themes"
// import { Moon, Sun, Menu } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import {
//   Sheet,
//   SheetContent,
//   SheetTrigger,
// } from "@/components/ui/sheet"

// const Navigation = () => {
//   const { theme, setTheme } = useTheme()
//   const [isMounted, setIsMounted] = useState(false)

//   useEffect(() => {
//     setIsMounted(true)
//   }, [])

//   const navItems = [
//     { name: "About", href: "#about" },
//     { name: "Features", href: "#features" },
//     { name: "Screenshots", href: "#screenshots" },
//     { name: "Get Started", href: "#get-started" },
//     { name: "Contact", href: "#contact" },
//   ]

//   if (!isMounted) {
//     return null
//   }

//   return (
//     <nav className="fixed w-full bg-background/80 backdrop-blur-sm z-50 border-b">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16 items-center">
//           <div className="flex-shrink-0 flex items-center">
//             <span className="text-2xl font-bold">ConnectGate</span>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-8">
//             {navItems.map((item) => (
//               <a
//                 key={item.name}
//                 href={item.href}
//                 className="text-foreground/80 hover:text-foreground transition-colors"
//               >
//                 {item.name}
//               </a>
//             ))}
//             <Button
//               variant="ghost"
//               size="icon"
//               onClick={() => setTheme(theme === "light" ? "dark" : "light")}
//             >
//               {theme === "light" ? (
//                 <Moon className="h-5 w-5" />
//               ) : (
//                 <Sun className="h-5 w-5" />
//               )}
//             </Button>
//           </div>

//           {/* Mobile Navigation */}
//           <div className="flex md:hidden items-center space-x-4">
//             <Button
//               variant="ghost"
//               size="icon"
//               onClick={() => setTheme(theme === "light" ? "dark" : "light")}
//             >
//               {theme === "light" ? (
//                 <Moon className="h-5 w-5" />
//               ) : (
//                 <Sun className="h-5 w-5" />
//               )}
//             </Button>
//             <Sheet>
//               <SheetTrigger asChild>
//                 <Button variant="ghost" size="icon">
//                   <Menu className="h-5 w-5" />
//                 </Button>
//               </SheetTrigger>
//               <SheetContent>
//                 <div className="flex flex-col space-y-4 mt-8">
//                   {navItems.map((item) => (
//                     <a
//                       key={item.name}
//                       href={item.href}
//                       className="text-foreground/80 hover:text-foreground transition-colors"
//                     >
//                       {item.name}
//                     </a>
//                   ))}
//                 </div>
//               </SheetContent>
//             </Sheet>
//           </div>
//         </div>
//       </div>
//     </nav>
//   )
// }

// export default Navigation
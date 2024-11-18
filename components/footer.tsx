"use client";

import { NetworkPattern } from "@/components/sections/hero/network-pattern"; // Adjust the import path based on your file structure
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background border-t relative overflow-hidden">
      {/* Add the NetworkPattern background */}
      <NetworkPattern />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">ConnectGate</h3>
            <p className="text-muted-foreground">
              Connect. Research. Discover.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://github.com/Navoo7"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://www.linkedin.com/in/navid-h-a2775b20a"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="mailto:navidhishyar.73@aol.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t">
          <p className="text-center text-muted-foreground">
            © {new Date().getFullYear()} ConnectGate. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}






// import { Github, Linkedin, Mail } from "lucide-react"
// import { Button } from "@/components/ui/button"

// export default function Footer() {
//   return (
//     <footer className="bg-background border-t">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           <div>
//             <h3 className="text-lg font-semibold mb-4">ConnectGate</h3>
//             <p className="text-muted-foreground">
//               Connect. Research. Discover.
//             </p>
//           </div>
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
//             <ul className="space-y-2">
//               <li>
//                 <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
//                   About
//                 </a>
//               </li>
//               <li>
//                 <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
//                   Features
//                 </a>
//               </li>
//               <li>
//                 <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
//                   Contact
//                 </a>
//               </li>
//             </ul>
//           </div>
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Connect</h3>
//             <div className="flex space-x-4">
//               <Button variant="ghost" size="icon" asChild>
//                 <a href="https://github.com/Navoo7" target="_blank" rel="noopener noreferrer">
//                   <Github className="h-5 w-5" />
//                 </a>
//               </Button>
//               <Button variant="ghost" size="icon" asChild>
//                 <a href="https://www.linkedin.com/in/navid-h-a2775b20a" target="_blank" rel="noopener noreferrer">
//                   <Linkedin className="h-5 w-5" />
//                 </a>
//               </Button>
//               <Button variant="ghost" size="icon" asChild>
//                 <a href="mailto:navidhishyar.73@aol.com">
//                   <Mail className="h-5 w-5" />
//                 </a>
//               </Button>
//             </div>
//           </div>
//         </div>
//         <div className="mt-8 pt-8 border-t">
//           <p className="text-center text-muted-foreground">
//             © {new Date().getFullYear()} ConnectGate. All rights reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   )
// }
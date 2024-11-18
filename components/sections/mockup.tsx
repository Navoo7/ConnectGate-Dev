
"use client";

  import { NetworkPattern } from "@/components/sections/hero/network-pattern";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useScreenshots } from "@/hooks/use-screenshots";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

  export default function Mockup() {
    const { screenshots, loading } = useScreenshots();
    const [currentIndex, setCurrentIndex] = useState(0);

    // Automatically change the image every 5 seconds
    useEffect(() => {
      if (screenshots.mockup.length > 1) {
        const interval = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % screenshots.mockup.length);
        }, 5000);

        return () => clearInterval(interval);
      }
    }, [screenshots.mockup]);

    if (loading) {
      return (
        <section className="py-24 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative mx-auto w-[300px] h-[600px]">
              <Skeleton className="w-full h-full rounded-[3rem]" />
            </div>
          </div>
        </section>
      );
    }

    if (!screenshots.mockup.length) {
      return null;
    }

    return (
      <section className="py-24 overflow-hidden relative">
        {/* Network pattern background */}
        <NetworkPattern />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">
              Explore ConnectGate: Where Research Meets Innovation
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Experience the future of research management with our intuitive mobile app, designed to streamline your workflow and enhance participant engagement.
            </p>
          </motion.div>

          <div className="relative">
  {/* Mockup Frame */}
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    viewport={{ once: true }}
    className="relative mx-auto w-[300px] h-[600px] rounded-[3rem] border-8 border-foreground/10 bg-background shadow-xl overflow-hidden z-20"
  >
    {/* iPhone Top Bar */}
    <div className="absolute top-0 inset-x-0 h-6 bg-foreground/5 z-30">
      <div className="absolute top-1 left-1/2 -translate-x-1/2 w-20 h-4 bg-foreground/10 rounded-full" />
    </div>

    {/* Image Display with Fade Blur Animation */}
    <div
      className="relative w-full h-full overflow-hidden"
      onClick={() =>
        setCurrentIndex((prevIndex) => (prevIndex + 1) % screenshots.mockup.length)
      }
    >
      {screenshots.mockup.map((url, index) => (
        <motion.div
          key={url}
          className={`absolute inset-0 ${
            index === currentIndex ? "z-10" : "z-0"
          }`}
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{
            opacity: index === currentIndex ? 1 : 0,
            filter: index === currentIndex ? "blur(0px)" : "blur(10px)",
          }}
          transition={{ duration: 1 }}
        >
          <Image
            src={url}
            alt={`ConnectGate App Screenshot ${index + 1}`}
            fill
            className="object-cover"
            unoptimized
            priority={index === 0}
          />
        </motion.div>
      ))}
    </div>

    {/* Bottom Bar */}
    <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-32 h-1 bg-foreground/20 rounded-full z-30" />
  </motion.div>

  {/* Cards */}
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: 0.2 }}
    viewport={{ once: true }}
    className="absolute top-1/4 -left-4 md:left-1/4 z-30"
  >
    <Card className="p-4 w-48 shadow-lg bg-black text-white border border-gray-700">
      <p className="font-medium">Intuitive Interface</p>
      <p className="text-sm text-gray-300">Designed for efficiency</p>
    </Card>
  </motion.div>

  <motion.div
    initial={{ opacity: 0, x: 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: 0.4 }}
    viewport={{ once: true }}
    className="absolute bottom-1/4 -right-4 md:right-1/4 z-30"
  >
    <Card className="p-4 w-48 shadow-lg bg-black text-white border border-gray-700">
      <p className="font-medium">Real-time Updates</p>
      <p className="text-sm text-gray-300">Stay connected always</p>
    </Card>
  </motion.div>
</div>
    </div>
      </section>
    );
  }




// "use client";

// import { NetworkPattern } from "@/components/sections/hero/network-pattern";
// import { Card } from "@/components/ui/card";
// import { Skeleton } from "@/components/ui/skeleton";
// import { useScreenshots } from "@/hooks/use-screenshots";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import { useEffect, useState } from "react";

// export default function Mockup() {
//   const { screenshots, loading } = useScreenshots();
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Automatically change the image every 5 seconds
//   useEffect(() => {
//     if (screenshots.mockup.length > 1) {
//       const interval = setInterval(() => {
//         setCurrentIndex((prevIndex) => (prevIndex + 1) % screenshots.mockup.length);
//       }, 5000);

//       return () => clearInterval(interval);
//     }
//   }, [screenshots.mockup]);

//   if (loading) {
//     return (
//       <section className="py-24 overflow-hidden">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="relative mx-auto w-[300px] h-[600px]">
//             <Skeleton className="w-full h-full rounded-[3rem]" />
//           </div>
//         </div>
//       </section>
//     );
//   }

//   if (!screenshots.mockup.length) {
//     return null;
//   }

//   return (
//     <section className="py-24 overflow-hidden relative">
//       {/* Network pattern background */}
//       <NetworkPattern />

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-3xl font-bold mb-4">
//             Explore ConnectGate: Where Research Meets Innovation
//           </h2>
//           <p className="text-muted-foreground max-w-2xl mx-auto">
//             Experience the future of research management with our intuitive mobile app, designed to streamline your workflow and enhance participant engagement.
//           </p>
//         </motion.div>

//         <div className="relative">
//           {/* Mockup Frame */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7 }}
//             viewport={{ once: true }}
//             className="relative mx-auto w-[300px] h-[600px] rounded-[3rem] border-8 border-foreground/10 bg-background shadow-xl overflow-hidden z-10"
//           >
//             <div className="absolute top-0 inset-x-0 h-6 bg-foreground/5 z-10">
//               <div className="absolute top-1 left-1/2 -translate-x-1/2 w-20 h-4 bg-foreground/10 rounded-full" />
//             </div>

//             {/* Image Display with Fade Blur Animation */}
//             <div
//               className="relative w-full h-full overflow-hidden"
//               onClick={() =>
//                 setCurrentIndex((prevIndex) => (prevIndex + 1) % screenshots.mockup.length)
//               }
//             >
//               {screenshots.mockup.map((url, index) => (
//                 <motion.div
//                   key={url}
//                   className={`absolute inset-0 ${
//                     index === currentIndex ? "z-10" : "z-0"
//                   }`}
//                   initial={{ opacity: 0, filter: "blur(10px)" }}
//                   animate={{
//                     opacity: index === currentIndex ? 1 : 0,
//                     filter: index === currentIndex ? "blur(0px)" : "blur(10px)",
//                   }}
//                   transition={{ duration: 1 }}
//                 >
//                   <Image
//                     src={url}
//                     alt={`ConnectGate App Screenshot ${index + 1}`}
//                     fill
//                     className="object-cover"
//                     unoptimized
//                     priority={index === 0}
//                   />
//                 </motion.div>
//               ))}
//             </div>

//             <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-32 h-1 bg-foreground/20 rounded-full" />
//           </motion.div>

//           {/* Cards */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             viewport={{ once: true }}
//             className="absolute top-1/4 -left-4 md:left-1/4 z-20"
//           >
//             <Card className="p-4 w-48 shadow-lg bg-black text-white border border-gray-700">
//               <p className="font-medium">Intuitive Interface</p>
//               <p className="text-sm text-gray-300">Designed for efficiency</p>
//             </Card>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5, delay: 0.4 }}
//             viewport={{ once: true }}
//             className="absolute bottom-1/4 -right-4 md:right-1/4 z-20"
//           >
//             <Card className="p-4 w-48 shadow-lg bg-black text-white border border-gray-700">
//               <p className="font-medium">Real-time Updates</p>
//               <p className="text-sm text-gray-300">Stay connected always</p>
//             </Card>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }











































//  "use client";

// import { Card } from "@/components/ui/card";
// import { Skeleton } from "@/components/ui/skeleton";
// import { useScreenshots } from "@/hooks/use-screenshots";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import { useEffect, useState } from "react";

// export default function Mockup() {
//   const { screenshots, loading } = useScreenshots();
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Automatically change the image every 5 seconds
//   useEffect(() => {
//     if (screenshots.mockup.length > 1) {
//       const interval = setInterval(() => {
//         setCurrentIndex((prevIndex) => (prevIndex + 1) % screenshots.mockup.length);
//       }, 5000);

//       return () => clearInterval(interval); // Clear interval on unmount
//     }
//   }, [screenshots.mockup]);

//   // If still loading, show skeleton
//   if (loading) {
//     return (
//       <section className="py-24 overflow-hidden">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="relative mx-auto w-[300px] h-[600px]">
//             <Skeleton className="w-full h-full rounded-[3rem]" />
//           </div>
//         </div>
//       </section>
//     );
//   }

//   // If there are no images, return nothing
//   if (!screenshots.mockup.length) {
//     return null;
//   }

//   return (
//     <section className="py-24 overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-3xl font-bold mb-4">
//             Explore ConnectGate: Where Research Meets Innovation
//           </h2>
//           <p className="text-muted-foreground max-w-2xl mx-auto">
//             Experience the future of research management with our intuitive mobile app, designed to streamline your workflow and enhance participant engagement.
//           </p>
//         </motion.div>

//         <div className="relative">
//           {/* Mockup Frame */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7 }}
//             viewport={{ once: true }}
//             className="relative mx-auto w-[300px] h-[600px] rounded-[3rem] border-8 border-foreground/10 bg-background shadow-xl overflow-hidden z-10"
//           >
//             <div className="absolute top-0 inset-x-0 h-6 bg-foreground/5 z-10">
//               <div className="absolute top-1 left-1/2 -translate-x-1/2 w-20 h-4 bg-foreground/10 rounded-full" />
//             </div>

//             {/* Image Display with Fade Blur Animation */}
//             <div
//               className="relative w-full h-full overflow-hidden"
//               onClick={() =>
//                 setCurrentIndex((prevIndex) => (prevIndex + 1) % screenshots.mockup.length)
//               } // Change image on click
//             >
//               {screenshots.mockup.map((url, index) => (
//                 <motion.div
//                   key={url}
//                   className={`absolute inset-0 ${
//                     index === currentIndex ? "z-10" : "z-0"
//                   }`}
//                   initial={{ opacity: 0, filter: "blur(10px)" }}
//                   animate={{
//                     opacity: index === currentIndex ? 1 : 0,
//                     filter: index === currentIndex ? "blur(0px)" : "blur(10px)",
//                   }}
//                   transition={{ duration: 1 }}
//                 >
//                   <Image
//                     src={url}
//                     alt={`ConnectGate App Screenshot ${index + 1}`}
//                     fill
//                     className="object-cover"
//                     unoptimized
//                     priority={index === 0}
//                   />
//                 </motion.div>
//               ))}
//             </div>

//             <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-32 h-1 bg-foreground/20 rounded-full" />
//           </motion.div>

//           {/* Cards */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             viewport={{ once: true }}
//             className="absolute top-1/4 -left-4 md:left-1/4 z-20" // Higher z-index than the mockup frame
//           >
//             <Card className="p-4 w-48 shadow-lg bg-black text-white border border-gray-700">
//               <p className="font-medium">Intuitive Interface</p>
//               <p className="text-sm text-gray-300">Designed for efficiency</p>
//             </Card>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5, delay: 0.4 }}
//             viewport={{ once: true }}
//             className="absolute bottom-1/4 -right-4 md:right-1/4 z-20" // Higher z-index than the mockup frame
//           >
//             <Card className="p-4 w-48 shadow-lg bg-black text-white border border-gray-700">
//               <p className="font-medium">Real-time Updates</p>
//               <p className="text-sm text-gray-300">Stay connected always</p>
//             </Card>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }











// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";
// import { Card } from "@/components/ui/card";
// import { useScreenshots } from "@/hooks/use-screenshots";
// import { Skeleton } from "@/components/ui/skeleton";

// export default function Mockup() {
//   const { screenshots, loading } = useScreenshots();

//   if (loading) {
//     return (
//       <section className="py-24 overflow-hidden">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="relative mx-auto w-[300px] h-[600px]">
//             <Skeleton className="w-full h-full rounded-[3rem]" />
//           </div>
//         </div>
//       </section>
//     );
//   }

//   if (!screenshots.mockup.length) {
//     return null;
//   }

//   return (
//     <section className="py-24 overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-3xl font-bold mb-4">
//             Explore ConnectGate: Where Research Meets Innovation
//           </h2>
//           <p className="text-muted-foreground max-w-2xl mx-auto">
//             Experience the future of research management with our intuitive mobile app, designed to streamline your workflow and enhance participant engagement.
//           </p>
//         </motion.div>

//         <div className="relative">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7 }}
//             viewport={{ once: true }}
//             className="relative mx-auto w-[300px] h-[600px] rounded-[3rem] border-8 border-foreground/10 bg-background shadow-xl overflow-hidden"
//           >
//             <div className="absolute top-0 inset-x-0 h-6 bg-foreground/5 z-10">
//               <div className="absolute top-1 left-1/2 -translate-x-1/2 w-20 h-4 bg-foreground/10 rounded-full" />
//             </div>

//             <div className="relative w-full h-full overflow-hidden">
//               <motion.div
//                 animate={{ 
//                   y: screenshots.mockup.length > 1 ? 
//                     [`0%`, `-${(screenshots.mockup.length - 1) * 100}%`, `0%`] : 
//                     [`0%`, `0%`]
//                 }}
//                 transition={{
//                   duration: screenshots.mockup.length * 5,
//                   repeat: Infinity,
//                   ease: "linear"
//                 }}
//                 className="absolute inset-0"
//               >
//                 {screenshots.mockup.map((url, index) => (
//                   <div
//                     key={url}
//                     className="relative w-full h-full"
//                   >
//                     <Image
//                       src={url}
//                       alt={`ConnectGate App Screenshot ${index + 1}`}
//                       fill
//                       className="object-cover"
//                       unoptimized
//                       priority={index === 0}
//                     />
//                   </div>
//                 ))}
//               </motion.div>
//             </div>

//             <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-32 h-1 bg-foreground/20 rounded-full" />
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             viewport={{ once: true }}
//             className="absolute top-1/4 -left-4 md:left-1/4"
//           >
//             <Card className="p-4 w-48 shadow-lg">
//               <p className="font-medium">Intuitive Interface</p>
//               <p className="text-sm text-muted-foreground">Designed for efficiency</p>
//             </Card>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5, delay: 0.4 }}
//             viewport={{ once: true }}
//             className="absolute bottom-1/4 -right-4 md:right-1/4"
//           >
//             <Card className="p-4 w-48 shadow-lg">
//               <p className="font-medium">Real-time Updates</p>
//               <p className="text-sm text-muted-foreground">Stay connected always</p>
//             </Card>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }
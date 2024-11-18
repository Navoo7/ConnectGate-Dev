import About from "@/components/sections/about";
import Contact from "@/components/sections/contact";
import Features from "@/components/sections/features";
import GetStarted from "@/components/sections/get-started";
import Hero from "@/components/sections/hero";
import Mockup from "@/components/sections/mockup";
import Screenshots from "@/components/sections/screenshots";


export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <About />
      <Features />
      <Mockup />
      <GetStarted />
      <Screenshots />
      <Contact />
    </div>
  )
}
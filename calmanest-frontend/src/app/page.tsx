import CurvedSection from "@/components/Shapes/CurvedSection";
import CurvedSectionTwo from "@/components/Shapes/CurvedSectionTwo";
import Features from "@/components/Home/Features";

import Footer from "@/components/Layouts/Footer";
import Hero from "@/components/Home/Hero";
import Team from "@/components/Home/Team";
import WavyCurveUp from "@/components/Shapes/WavyCurveUp";


export default function Home() {
  return (
   <div>
<Hero/>
<CurvedSection/>
<Team/>
<CurvedSectionTwo/>
<Features/>
<WavyCurveUp/>

   </div>
  );
}

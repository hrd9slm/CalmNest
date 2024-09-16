import CurvedSection from "@/components/CurvedSection";
import CurvedSectionTwo from "@/components/CurvedSectionTwo";
import Feature from "@/components/Feature";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
   <div>
<Hero/>
<CurvedSection/>
<Feature/>
<CurvedSectionTwo/>
<Footer/>
   </div>
  );
}

import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import Device from "@/components/homepage/Device";
import Hero from "@/components/homepage/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Device />
      <Footer />
    </>
  );
}

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import GalleryTwo from "@/components/GalleryTwo";
import Contact from "@/components/Contact";

export default function Page() {
  return (
    <main>
      <Header />
      <Hero />
      <Intro />
      <Gallery />
      <Testimonials />
      <GalleryTwo />
      <Contact />
      <Footer />
    </main>
  );
}

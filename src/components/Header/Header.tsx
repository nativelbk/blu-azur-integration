import Hero from "../Hero/Hero";
import Navbar from "../Navbar/Navbar";
import { Facebook, Youtube, TwitterIcon, Instagram } from "lucide-react";

const Header = () => {
  return (
    <header className="relative ">
      <div className="absolute inset-0 bg-black/70 z-10"></div>
      <div
        className="relative h-screen max-lg:h-fit bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/image-background.png')" }}
      >
        <Navbar />
        <div className="relative z-20">
          <Hero />
        </div>

        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 flex flex-col gap-2 justify-end pb-20 h-full space-y-4 px-4 bg-blue-tranparent text-white z-20">
          <Facebook fill="white" size={30} />
          <Youtube size={30} strokeWidth={2} />
          <TwitterIcon size={30} fill="white" strokeWidth={2} />
          <Instagram size={30} strokeWidth={2} />
        </div>
      </div>
    </header>
  );
};

export default Header;

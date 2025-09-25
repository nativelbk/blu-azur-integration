import { CircleChevronRight } from "lucide-react";
import React from "react";
import { AnimatedText } from "../AnimatedText/AnimatedText";

const Reservation: React.FC = () => {
  return (
    <section
      className="relative w-full overflow-hidden  bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/reservation.png')" }}
    >
      <div className="absolute inset-0 h-full">
        <img className="h-full" src="/assets/rectangle.png" />
      </div>
      <div className="relative h-[70vh] container flex items-center justify-center text-center text-white">
        <div className="relative text-shadow-lg flex flex-col justify-center items-center  z-10 max-w-2xl mx-auto px-6">
          <AnimatedText isVisible={true} delay={0}>
            <h2 className="text-3xl lg:text-6xl font-bold text-shadow-lg mb-4">
              Réservations
            </h2>
          </AnimatedText>
          <p
            style={{
              fontSize: "larger",
            }}
            className="mb-6 text-base text-shadow-lg lg:text-xl leading-relaxed"
          >
            <strong>Offrez-vous un séjour inoubliable</strong> dans l’un de nos
            appartements Blu Azur. Profitez d’un cadre exceptionnel, entre
            confort, détente et découvertes, au cœur de Saint-Raphaël.
          </p>
          <a
            href="#"
            className=" bg-blue hover:bg-blue-500 flex w-fit gap-4 items-center justify-around  text-white text-lg font-semibold px-6 py-3 rounded-full shadow-lg transition"
          >
            Réservez dès maintenant votre séjour !
            <CircleChevronRight color="white" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Reservation;

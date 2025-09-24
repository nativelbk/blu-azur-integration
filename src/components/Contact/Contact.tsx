import type React from "react";
const Contact: React.FC = () => {
  return (
    <section className="bg-blue-500  text-white py-12">
      <div className="max-w-4xl container  flex gap-4 items-center justify-around">
        <div className="flex justify-center md:justify-start">
          <img src="/assets/logo.png" alt="logo" className="h-16" />
        </div>

        <div className="flex flex-col text-2xl items-start md:items-center space-y-4">
          <span className="  py-1 rounded  font-semibold">Contactez-nous</span>

          <div className="flex flex-col w-full gap-2 text-sm md:text-base">
            <div className="flex items-center space-x-2">
              <img src="/assets/email.png" className="w-4 h-4" />
              <span>info@bluazur.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <img src="/assets/phone-call.png" className="w-4 h-4" />
              <span>+1 555 555-5555</span>
            </div>
            <div className="flex items-center space-x-2">
              <img src="/assets/facebook.png" className="w-4 h-4" />
              <span>@ BLU Azur</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import React from "react";
import { thorium, tmarcom } from "../../app/constants/data";
import Thorium from "@/components/Thorium";

export const metadata = {
  title: "Agency Experience | Khalid Hosein",
  description: "My recent agency work.",
  keywords: "",
};

const page = () => {
  return (
    <section id="about" className="about w-full bg-ship-cove-200 pt-[88px]">
      <div className="container px-4 mx-auto py-16">
        <div>
          <div className="text-right">
            <p className="uppercase">Agency</p>
            <h2 className="mb-10">T2 Marketing Communications.</h2>
            <span>June 20 - Sept 20 / - Aug 22 - Present</span>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Praesentium ullam dignissimos pariatur quis, ab in a obcaecati
            distinctio magni nesciunt eum voluptatum non veritatis blanditiis
            beatae impedit. Velit, sed mollitia. Nihil itaque ipsa eveniet
            nostrum ratione non quo sit officiis sed ad. Ullam, ad cum
            consequatur quis, doloribus odit doloremque asperiores corporis vel
            impedit iusto blanditiis tenetur praesentium aliquid qui. Fuga enim,
            repellendus velit aspernatur vel pariatur sed dicta, odit natus
            deleniti sapiente! Qui dicta libero, fugit beatae iste magni eos ex
            eum quasi blanditiis unde quia, fuga est provident.
          </p>
        </div>
        <Thorium />
      </div>
    </section>
  );
};

export default page;

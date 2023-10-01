import React from 'react'
import Client from '/components/Client'
import { clients} from "../constants/data";

export const metadata = {
  title: "Clients | Khalid Hosein",
  description: "My personal clients.",
  keywords: "",
};

const Clients = () => {
  return (
    <div className="container px-4 mx-auto py-16">
      <Client client={clients} />
    </div>
  );
}

export default Clients
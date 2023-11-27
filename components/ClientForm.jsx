"use client"
import React, { useState } from "react";

const ClientForm = () => {
  const [clientInfo, setClientInfo] = useState({
    clientName: "",
    primaryContactEmail: "",
    companyName: "",
    companyLogo: "",
    companyType: "",
    servicesOffered: "",
    brandColors: "#fff",
    typeOfUsers: [],
    contactInformation: "",
    siteDomain: "",
    specificFeatures: "",
    admiredWebsites: "",
    otherRequirements: "",
  });

    const industryOptions = [
      "Agriculture & Forestry/Wildlife Extermination/Pest Control",
      "Business & Information Consultant",
      "Construction/Utilities/Contracting",
      "Education",
      "Finance & Insurance",
      "Food & Hospitality",
      "Gaming",
      "Health Services",
      "Motor Vehicle",
      "Natural Resources/Environmental",
      "Other",
      "Personal Services",
      "Real Estate & Housing",
      "Safety/Security & Legal",
      "Transportation",
    ];

    const businessTypeOptions = {
      "Agriculture & Forestry/Wildlife Extermination/Pest Control": [
        "Farming(Animal Production)",
        "Farming(Crop Production)",
        "Fishing/Hunting",
        "Landscape Services",
        "Lawn care Services",
        "Other (Agriculture & Forestry/Wildlife)",
      ],
      "Business & Information Consultant": [
        "Employment Office",
        "Fundraisers",
        "Going out of Business Sales",
        "Marketing/Advertising",
        "Non Profit Organization",
        "Notary Public",
        "Online Business",
        "Other (Business & Information)",
        "Publishing Services",
        "Record Business",
        "Retail Sales",
        "Technology Services",
        "Telemarketing",
        "Travel Agency",
        "Video Production",
      ],
      // ... Add more business types for other industries
    };

    const handleIndustryChange = (event) => {
      setIndustry(event.target.value);
      setBusinessType(""); // Reset business type when industry changes
    };

    const handleBusinessTypeChange = (event) => {
      setBusinessType(event.target.value);
    };

  const handleChange = (field, value) => {
    setClientInfo((prevInfo) => ({
      ...prevInfo,
      [field]: value,
    }));
  };

  const handleCheckboxChange = (field, value) => {
    setClientInfo((prevInfo) => {
      const updatedArray = prevInfo[field].includes(value)
        ? prevInfo[field].filter((item) => item !== value)
        : [...prevInfo[field], value];

      return {
        ...prevInfo,
        [field]: updatedArray,
      };
    });
  };

  return (
    <form name="nzrDigital" method="POST" data-netlify="true">
      <input type="hidden" name="form-name" value="nzrDigital" />
      <div>
        <label className="label">Client Name:</label>
        <input
          type="text"
          value={clientInfo.clientName}
          onChange={(e) => handleChange("clientName", e.target.value)}
          className="input input-bordered w-full max-w-xs"
        />
      </div>

      <div>
        <label className="label">Primary Contact Email:</label>
        <input
          type="email"
          value={clientInfo.primaryContactEmail}
          onChange={(e) => handleChange("primaryContactEmail", e.target.value)}
          className="input input-bordered w-full max-w-xs"
        />
      </div>

      <div>
        <label className="label">Primary Contact Phone:</label>
        <input
          type="tel"
          value={clientInfo.primaryContactEmail}
          onChange={(e) => handleChange("primaryContactEmail", e.target.value)}
          className="input input-bordered w-full max-w-xs"
        />
      </div>

      <div>
        <label className="label">Company Name:</label>
        <input
          type="text"
          value={clientInfo.companyName}
          onChange={(e) => handleChange("companyName", e.target.value)}
          className="input input-bordered w-full max-w-xs"
        />
      </div>

      <div>
        <label className="label">Company Logo</label>
        <input
          type="file"
          value={clientInfo.companyLogo}
          className="file-input file-input-bordered w-full max-w-xs"
          onChange={(e) => handleChange("companyLogo", e.target.value)}
        />
      </div>

      <div>
        <label className="label">Company/Brand Colors</label>
        <div className="flex gap-2 items-center">
          {/* <label className="pr-4">Selected Color: {clientInfo.selectedColor}</label> */}
          <button className="btn flex items-center">Add color</button>
          <input
            type="color"
            value={clientInfo.brandColors}
            onChange={(e) => handleChange("brandColors", e.target.value)}
          />
        </div>
      </div>

      <div>
        <label className="label">Services Offered:</label>
        <textarea
          class="textarea textarea-bordered h-24 w-full"
          placeholder="What services does your business offer?"
          value={clientInfo.servicesOffered}
          onChange={() => handleChange("servicesOffered", e.target.value)}
        ></textarea>
      </div>

      <div>
        <label className="label">
          Any specific features or functionalities required on the website?
        </label>
        <textarea
          class="textarea textarea-bordered h-24 w-full"
          placeholder=""
          value={clientInfo.specificFeatures}
          onChange={() => handleChange("specificFeatures", e.target.value)}
        ></textarea>
      </div>

      <div>
        <label className="label">
          Are there any specific competitors or websites that the client admires
          and wants to take inspiration from?
        </label>
        <textarea
          class="textarea textarea-bordered h-24 w-full"
          placeholder=""
          value={clientInfo.admiredWebsites}
          onChange={() => handleChange("admiredWebsites", e.target.value)}
        ></textarea>
      </div>

      <div>
        <label className="label">
          Any other specific requirements or preferences for the website?
        </label>
        <textarea
          class="textarea textarea-bordered h-24 w-full"
          placeholder=""
          value={clientInfo.otherRequirements}
          onChange={() => handleChange("otherRequirements", e.target.value)}
        ></textarea>
      </div>

      <button type="submit" className="btn bg-ship-cove-500 text-white w-36">
        Submit
      </button>
    </form>
  );
};

export default ClientForm;

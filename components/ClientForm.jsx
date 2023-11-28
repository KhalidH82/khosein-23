"use client";
import React, { useState } from "react";

const ClientForm = () => {
  const [clientInfo, setClientInfo] = useState({
    firstName: "",
    lastName: "",
    primaryContactEmail: "",
    companyName: "",
    companyLogo: "",
    companyType: "",
    servicesOffered: "",
    primaryColor: "#fff",
    secondaryColor: "#000",
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
    <div className="w-full h-full ">
      <form name="nzr" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="nzr" />

        <div className="grid grid-cols-2 gap-5">
          <div>
            <label className="label">First Name</label>
            <input
              name="firstName"
              type="text"
              value={clientInfo.firstName}
              onChange={(e) => handleChange("firstName", e.target.value)}
              className="input w-full bg-white"
            />
          </div>

          <div>
            <label className="label">Last Name</label>
            <input
              name="lastName"
              type="text"
              value={clientInfo.lastName}
              onChange={(e) => handleChange("lastName", e.target.value)}
              className="input w-full bg-white"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-5">
          <div>
            <label className="label">Email</label>
            <input
              type="email"
              value={clientInfo.primaryContactEmail}
              onChange={(e) =>
                handleChange("primaryContactEmail", e.target.value)
              }
              className="input w-full bg-white"
            />
          </div>

          <div>
            <label className="label">Phone</label>
            <input
              type="tel"
              value={clientInfo.primaryContactEmail}
              onChange={(e) =>
                handleChange("primaryContactEmail", e.target.value)
              }
              className="input w-full bg-white"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-5">
          <div>
            <label className="label">Company Name</label>
            <input
              type="text"
              value={clientInfo.companyName}
              onChange={(e) => handleChange("companyName", e.target.value)}
              className="input w-full bg-white"
            />
          </div>

          <div className="grid grid-cols-2 gap-5">
            <div>
              <label className="label">Company Logo</label>
              <input
                type="file"
                value={clientInfo.companyLogo}
                className="file-input file- w-full max-w-xs bg-white"
                onChange={(e) => handleChange("companyLogo", e.target.value)}
              />
            </div>
            <div>
              <label className="label">Company/Brand Colors</label>
              <div className="flex gap-2 items-center">
                <div className="w-1/2">
                  <input
                    type="color"
                    value={clientInfo.primaryColor}
                    className="w-full"
                    onChange={(e) =>
                      handleChange("primaryColor", e.target.value)
                    }
                  />
                  <label className="label pt-0">Primary Color</label>
                </div>
                <div className="w-1/2">
                  <input
                    type="color"
                    value={clientInfo.secondaryColor}
                    className="w-full"
                    onChange={(e) =>
                      handleChange("secondaryColor", e.target.value)
                    }
                  />
                  <label className="label pt-0">Secondary Color</label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <label className="label">Services Offered</label>
          <textarea
            class="textarea  h-24 w-full bg-white"
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
            class="textarea  h-24 w-full bg-white"
            placeholder=""
            value={clientInfo.specificFeatures}
            onChange={() => handleChange("specificFeatures", e.target.value)}
          ></textarea>
        </div>

        <div>
          <label className="label">
            Are there any specific competitors or websites that the client
            admires and wants to take inspiration from?
          </label>
          <textarea
            class="textarea h-24 w-full bg-white"
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
            class="textarea h-24 w-full bg-white"
            placeholder=""
            value={clientInfo.otherRequirements}
            onChange={() => handleChange("otherRequirements", e.target.value)}
          ></textarea>
        </div>

        <button type="submit" className="btn bg-ship-cove-500 text-white w-36">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ClientForm;

import { InfoBox } from "@/components/InfoBox";
import React from "react";

const InfoBoxes = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
      <InfoBox
        heading="For Renters"
        backgroundColor="bg-gray-100"
        textColor=""
        buttonInfo={{
          text: "Browse Properties",
          link: "/properties",
          backgroundColor: "bg-black",
        }}
      >
        Find your dream rental property. Bookmark properties and contact owners.
      </InfoBox>
      <InfoBox
        heading="For Property Owners"
        backgroundColor="bg-blue-100"
        textColor=""
        buttonInfo={{
          text: "Add Properties",
          link: "/properties/add",
          backgroundColor: "bg-blue-500",
        }}
      >
        List your properties and reach potential tenants. Rent as an airbnb or
        long term.{" "}
      </InfoBox>
    </div>
  );
};

export default InfoBoxes;

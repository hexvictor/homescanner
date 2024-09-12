import React from "react";
import Hero from "@/components/Hero/Hero";
import { InfoBox } from "@/components/InfoBox";
import { HomeProperties } from "@/components/HomeProperties";

function HomePage(): React.ReactElement {
  return (
    <>
      <Hero />

      {/* Info Boxes */}
      <section>
        <div className="container-xl lg:container m-auto">
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
              Find your dream rental property. Bookmark properties and contact
              owners.
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
              List your properties and reach potential tenants. Rent as an
              airbnb or long term.{" "}
            </InfoBox>
          </div>
          <HomeProperties />
        </div>
      </section>
    </>
  );
}

export default HomePage;

import React from "react";
import Hero from "@/components/Hero/Hero";
import { HomeProperties } from "@/components/layout/HomeProperties";
import { InfoBoxes } from "@/components/layout/InfoBoxes";
import connectDB from "@/config/database";

function HomePage(): React.ReactElement {
  connectDB();
  return (
    <>
      <Hero />
      <section>
        <div className="container-xl lg:container m-auto">
          <InfoBoxes />
          <HomeProperties />
        </div>
      </section>
    </>
  );
}

export default HomePage;

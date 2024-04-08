import { PropertiesList } from "@/components/PropertiesList";
import json from "@/properties.json";
import React from "react";

function PropertiesPage(): React.ReactElement {
  return (
    <section className="px-4 py-6">
      <div className="container-xl lg:container m-auto px-4 py-6">
        <PropertiesList properties={json} />
      </div>
    </section>
  );
}

export default PropertiesPage;

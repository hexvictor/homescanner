import Link from "next/link";
import React from "react";

function PropertiesPage(): React.ReactElement {
  return (
    <div>
      <h1 className="text-3xl">Properties</h1>
      <Link href="/">Go Home</Link>
    </div>
  );
}

export default PropertiesPage;

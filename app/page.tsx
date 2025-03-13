import React from 'react';
import Hero from '@/components/layout/Hero/Hero';
import { HomeProperties } from '@/components/properties/HomeProperties';
import { InfoBoxes } from '@/components/ui/InfoBoxes';

function HomePage(): React.ReactElement {
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

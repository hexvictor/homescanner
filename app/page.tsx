import React from 'react';
import Hero from '@/components/Hero/Hero';
import { HomeProperties } from '@/components/HomeProperties';
import { InfoBoxes } from '@/components/InfoBoxes';

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

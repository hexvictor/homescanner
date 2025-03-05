import Image from 'next/image';
import React from 'react';

interface PropertyHeaderImageProps {
  image: string | undefined;
}

const PropertyHeaderImage = ({image = 'a1.jpg'}: PropertyHeaderImageProps) => {
  return (
    <section>
      <div className="container-xl m-auto">
        <div className="grid grid-cols-1">
          <Image
            src={`/images/properties/${image}`}
            alt=""
            className="object-cover h-[400px] w-full"
            width={0}
            height={0}
            sizes="100vw"
          />
        </div>
      </div>
    </section>
  );
};

export default PropertyHeaderImage;

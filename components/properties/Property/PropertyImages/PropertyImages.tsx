import Image from 'next/image';
import React from 'react';

type PropertyImagesProps = {
  images: string[] | undefined;
};

function PropertyImages({ images }: PropertyImagesProps) {
  if (!images) {
    return undefined;
  }
  return (
    <section className="bg-blue-50 mt-6">
      <style>
        {`
            .grid-container {
                grid-template-columns: repeat(auto-fit, minmax(min(350px, 100%), 1fr));
            }
        `}
      </style>
      <div className="container mx-auto">
        {images.length === 1 ? (
          <Image
            src={images[0]}
            alt=""
            className="object-cover h-[400px] mx-auto rounded-xl"
            width={1800}
            height={400}
            priority={true}
          />
        ) : (
          <div className="grid-container grid gap-4 auto-rows-auto">
            {images.map((image, index) => (
              <div key={index + image}>
                <Image
                  src={image}
                  alt=""
                  className="object-cover h-[400px] w-full rounded-xl"
                  width={1800}
                  height={400}
                  priority={true}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default PropertyImages;

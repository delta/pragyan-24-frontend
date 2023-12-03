'use client';

import { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import styles from '../../app/events/carousel.module.css';

interface ImageChangerProps {
  defaultImage: StaticImageData;
  hoverImage: StaticImageData;
}

const ImageChanger = (props: ImageChangerProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Image
      src={isHovered ? props.hoverImage : props.defaultImage}
      alt="Back to cluster"
      className={`${styles.Back} xl:w-52 lg:w-44 md:w-32 sm:w-24 w-16 absolute left-28 top-32 max-md:hidden`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    />
  );
};

export default ImageChanger;

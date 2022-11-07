import React from 'react';
import Image from 'next/image';

const IconNames = ['LinkedIn', 'Other'] as const;

type IconProps = {
  name: typeof IconNames[number];
  width?: number;
  height?: number;
};

export const Icon = ({ name, width = 20, height = 20 }: IconProps) => {
  return (
    <Image
      src={`/icons/${name}.svg`}
      height={height}
      width={width}
      alt={name}
    />
  );
};

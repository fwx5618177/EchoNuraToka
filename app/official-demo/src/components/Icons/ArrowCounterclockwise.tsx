import React from 'react';
import type { IconProps } from './types';

const ArrowCounterclockwise: React.FC<IconProps> = ({
  className,
  style,
  width = 16,
  height = 16,
  fill = 'currentColor',
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill={fill}
    className={className}
    style={style}
    viewBox="0 0 16 16"
    {...props}
  >
    <path fillRule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z" />
    <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z" />
  </svg>
);

export default ArrowCounterclockwise;

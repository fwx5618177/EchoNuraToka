import React from 'react';
import type { IconProps } from './types';

const TypeH1: React.FC<IconProps> = ({
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
    <path d="M8.637 13V3.669H7.379V7.62H2.758V3.67H1.5V13h1.258V8.728h4.62V13h1.259zm5.329 0V3.669h-1.244L10.5 5.316v1.265l2.16-1.565h.062V13h1.244z" />
  </svg>
);

export default TypeH1;

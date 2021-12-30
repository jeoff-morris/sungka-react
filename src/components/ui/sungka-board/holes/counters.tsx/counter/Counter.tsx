import React from "react";

interface ICounter {
  className: string;
  title: string;
  id: string;
  src: string;
  width: number;
  height: number;
  radius: number;
  alt: string;
}

export const Counter = (props: any) => {
  let { className, title, id, alt, src, width, height, radius }: ICounter =
    props;

  let top: string;
  let left: string;
  let transform: string;
  let a = Math.random() * 2 * Math.PI;
  let r = radius * Math.sqrt(Math.random());

  left = r * Math.cos(a) + "px";
  top = r * Math.sin(a) + "px";

  transform = "rotate(" + Math.round(Math.random() * 360) + "deg)";

  return (
    <img
      src={src}
      width={width}
      height={height}
      alt={alt}
      id={id}
      className={className}
      title={title}
      style={{
        left: left,
        top: top,
        transform: transform,
        width: width,
        height: height,
        display: "block",
      }}
    />
  );
};

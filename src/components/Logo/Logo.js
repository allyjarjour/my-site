import React from "react";
import "./logo.scss";

export default function Logo({ alt, src }) {
  return <img alt={alt} className="logo" src={src} />;
}

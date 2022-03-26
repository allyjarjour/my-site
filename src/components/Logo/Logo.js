import React from "react";
import "./logo.scss";

export default function Logo({ data }) {
  const { title, src } = data;
  return <img alt={title} className="logo" src={src} title={title}/>;
}

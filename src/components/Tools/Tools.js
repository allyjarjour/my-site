import { Typography, ImageList, ImageListItem } from "@mui/material";
import React from "react";
import "./tools.scss";
import DownArrow from "./../DownArrow";
import { logos } from "../../data/projects";
import { isMobile } from "react-device-detect";

export default function Tools() {
  const toolKeys = Object.keys(logos);
  const tools = toolKeys.map(k => logos[k])
  console.log(toolKeys);
  return (
    <section id="tools" className="tools">
      <DownArrow />
      <div className="inner-container">
        <Typography variant="h1">Tools & Technology</Typography>
        <ImageList
          sx={{ width: "75%", margin: "0 auto", padding: "30px" }}
          cols={isMobile ? 3 : 4}
          rowHeight={100}
        >
          {tools.map((tool, i) => (
            <ImageListItem key={i} sx={{ margin: "0 auto" }}>
              <img
                title={tool.title}
                style={{ width: "75px", objectFit: "contain" }}
                src={tool.src}
                alt={tool.title}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    </section>
  );
}

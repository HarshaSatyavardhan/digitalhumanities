import React from "react";
import Navbar from "../components/Navbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
// import JupyterViewer from "react-jupyter-notebook";
// import nb_test from "./digital_humanitie.json";
import { IpynbRenderer } from "react-ipynb-renderer";
import "katex/dist/katex.min.css";

// Jupyter theme
import "react-ipynb-renderer/dist/styles/monokai.css";

import ipynb from "./digital_humanitie.json";

const Secondpage = () => {
  return (
    <div>
      <Navbar />
      <Typography
        sx={{ textAlign: "center", p: 2 }}
        variant="h4"
        gutterBottom
        component="div"
      >
        Word Cloud
      </Typography>
      <IpynbRenderer
        ipynb={ipynb}
        syntaxTheme="xonokai"
        language="python"
        bgTransparent={true}
        formulaOptions={{
          // optional
          renderer: "mathjax", // katex by default
          katex: {
            delimiters: "gitlab", // dollars by default
            katexOptions: {
              fleqn: false,
            },
          },
        }}
      />

      {/* <JupyterViewer rawIpynb={nb_test} /> */}
    </div>
  );
};

export default Secondpage;

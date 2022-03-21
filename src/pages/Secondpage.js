import React from "react";
import Navbar from "../components/Navbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

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
    </div>
  );
};

export default Secondpage;

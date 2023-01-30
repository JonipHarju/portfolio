import React from "react";
import { Typography, Box } from "@mui/material";
import Style from "../../styles/Projects.module.css";
import { Container } from "@mui/system";

export default function Projects() {
  return (
    <Container sx={{ width: "50%" }}>
      <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
        <Typography variant="h3" component="h6" color="#3399FF">
          Projects
        </Typography>
      </Box>
    </Container>
  );
}
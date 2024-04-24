import React from "react";
import Layout from "../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 5,
          textAlign: "center",
          p: 11,
          "& h4": { fontWeight: "bold", my: 2, fontSize: "2rem" },
          "& p": { textAlign: "justify" },
          "@media (max-width: 600px)": {
            mt: 0,
            "& h4": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome to Chicago INN</Typography>
        <p>
        Welcome to Chicago INN, where culinary expertise intersects with boundless creativity. Our journey commenced with a vision to redefine dining in the heart of Chicago. Anchored in a profound dedication to customer delight and a fervor for culinary arts, our aim is to exceed expectations through exceptional dishes and services.

At Chicago INN, our cohesive team of experts is fueled by a collective zeal for excellence, honesty, and perpetual enhancement. We are committed to curating unforgettable dining encounters by comprehending our guests' individual tastes and crafting bespoke culinary journeys that resonate long after the meal.







        </p>
        <br />
        <p>
          Beyond our culinary creations, we are committed to making a positive
          impact on our community and the environment. Through sustainable
          practices, social responsibility initiatives, and ethical business
          conduct, we strive to contribute meaningfully to society while
          ensuring a greener future for generations to come.
          Join us at Golden Spice House on this exciting journey as we continue
          to innovate, grow, and make a difference in the world, one delightful
          dish at a time. Thank you for choosing Golden Spice House for your
          dining experience. Cheers to good food, great memories, and a brighter
          tomorrow!
        </p>
      </Box>
    </Layout>
  );
};

export default About;

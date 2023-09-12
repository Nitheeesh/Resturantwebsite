import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome To My Resturant</Typography>
        <p>
        Welcome to Our Resturant, a culinary haven where exceptional dining meets a warm and inviting atmosphere. Located in the heart of Raipurians, we take pride in curating an exquisite menu that celebrates the essence of India.

   Our team of passionate chefs draws inspiration from diverse cultural influences and locally sourced ingredients, ensuring each dish is a masterpiece that tells a story. Whether you're here for a special occasion or a casual meal, we're dedicated to making your visit unforgettable.
        </p>
        <br />
        <p>
        At Our Restaurant, we are committed to values like sustainability and responsible sourcing, ensuring that every bite you enjoy aligns with our core principles. Our commitment to top-notch service and culinary innovation has earned us a special place in the hearts of food enthusiasts and families alike.

Join us on a culinary adventure where every dish is a journey and every visit is a celebration of flavors. We can't wait to host you and create remarkable memories at our Resturant.
        </p>
      </Box>
    </Layout>
  );
};

export default About;

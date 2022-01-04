import React, { useState } from "react";
import {
  Alert,
  Button,
  CircularProgress,
  Container,
  TextField,
  Typography,
} from "@mui/material";
// import useAuth from "../../../Hooks/useAuth";
import { NavLink } from "react-router-dom";
import Header from "../Shared/Header/Header";

const Career = () => {
  const [carData, setCarData] = useState({});
  // const { isLoading } = useAuth();
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newCarData = { ...carData };
    newCarData[field] = value;
    setCarData(newCarData);
  };
  const handleProductDateSubmit = (e) => {
    const product = { ...carData };
    fetch("https://fathomless-everglades-06913.herokuapp.com/career", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Successfully Added.");
          document.getElementById("Form").reset();
        }
      });
    e.preventDefault();
  };

  return (
    <Container>
      <Header></Header>
      <form
        id="Form"
        className="my-5 p-4 rounded shadow mx-auto"
        style={{ maxWidth: "50rem" }}
        onSubmit={handleProductDateSubmit}
      >
        <Typography
          style={{ textAlign: "center" }}
          sx={{ my: 3 }}
          variant="h5"
          gutterBottom
        >
          CAREER
        </Typography>
        <TextField
          sx={{ width: "95%", m: 1 }}
          id="standard-basic"
          label="Name"
          name="product_name"
          onBlur={handleOnBlur}
          variant="standard"
        />
        <TextField
          sx={{ width: "95%", m: 1 }}
          id="standard-basic"
          label="Email"
          name="product_price"
          onBlur={handleOnBlur}
          variant="standard"
        />
        <TextField
          sx={{ width: "95%", m: 1 }}
          id="standard-basic"
          label="Experience Year"
          name="brand"
          onBlur={handleOnBlur}
          variant="standard"
        />
        <TextField
          sx={{ width: "95%", m: 1 }}
          id="standard-basic"
          label="Work Place"
          name="screen_size"
          onBlur={handleOnBlur}
          variant="standard"
        />
        <TextField
          sx={{ width: "95%", m: 1 }}
          id="standard-basic"
          label="Location"
          name="rating"
          onBlur={handleOnBlur}
          variant="standard"
        />
        <TextField
          sx={{ width: "95%", m: 1 }}
          id="standard-basic"
          label="Image Url"
          name="review"
          onBlur={handleOnBlur}
          variant="standard"
        />
        <TextField
          sx={{ width: "95%", m: 1 }}
          id="standard-basic"
          label="Work Name"
          name="cpu"
          onBlur={handleOnBlur}
          variant="standard"
        />
        <TextField
          sx={{ width: "95%", m: 1 }}
          id="standard-multiline-static"
          label="Your Detail"
          name="detail"
          onBlur={handleOnBlur}
          multiline
          rows={4}
          variant="standard"
        />

        <Button
          sx={{ width: "95%", m: 1 }}
          style={{
            backgroundColor: "crimson",
          }}
          type="submit"
          variant="contained"
        >
          Submit Your Application
        </Button>
        {/* {isLoading && <CircularProgress />} */}
      </form>
    </Container>
  );
};

export default Career;

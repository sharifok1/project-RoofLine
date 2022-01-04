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

const AddAProduct = () => {
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
    fetch("https://fathomless-everglades-06913.herokuapp.com/services", {
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
          Add New Product
        </Typography>
        <TextField
          sx={{ width: "95%", m: 1 }}
          id="standard-basic"
          label="Service Name"
          name="name"
          onBlur={handleOnBlur}
          variant="standard"
        />
        <TextField
          sx={{ width: "95%", m: 1 }}
          id="standard-basic"
          label="title"
          name="title"
          onBlur={handleOnBlur}
          variant="standard"
        />
        <TextField
          sx={{ width: "95%", m: 1 }}
          id="standard-basic"
          label="details"
          name="details"
          onBlur={handleOnBlur}
          variant="standard"
        />
        <TextField
          sx={{ width: "95%", m: 1 }}
          id="standard-basic"
          label="details2"
          name="details2"
          onBlur={handleOnBlur}
          variant="standard"
        />
        <TextField
          sx={{ width: "95%", m: 1 }}
          id="standard-basic"
          label="service image link -1"
          name="img1"
          onBlur={handleOnBlur}
          variant="standard"
        />
        <TextField
          sx={{ width: "95%", m: 1 }}
          id="standard-basic"
          label="service image link -2"
          name="img2"
          onBlur={handleOnBlur}
          variant="standard"
        />
        <TextField
          sx={{ width: "95%", m: 1 }}
          id="standard-basic"
          label="service image link -3"
          name="img3"
          onBlur={handleOnBlur}
          variant="standard"
        />
        <TextField
          sx={{ width: "95%", m: 1 }}
          id="standard-basic"
          label="write security description"
          name="security"
          onBlur={handleOnBlur}
          variant="standard"
        />
        <TextField
          sx={{ width: "95%", m: 1 }}
          id="standard-basic"
          label="professional information"
          name="professional"
          onBlur={handleOnBlur}
          variant="standard"
        />
        <TextField
          sx={{ width: "95%", m: 1 }}
          id="standard-basic"
          label="maintenance information"
          name="maintenance"
          onBlur={handleOnBlur}
          variant="standard"
        />
        <TextField
          sx={{ width: "95%", m: 1 }}
          id="standard-basic"
          label="support information"
          name="support"
          onBlur={handleOnBlur}
          variant="standard"
        />
        <TextField
          sx={{ width: "95%", m: 1 }}
          id="standard-basic"
          label="price"
          name="price"
          onBlur={handleOnBlur}
          variant="standard"
          type="number"
        />
        <TextField
          sx={{ width: "95%", m: 1 }}
          id="standard-basic"
          label="write review"
          name="review"
          onBlur={handleOnBlur}
          variant="standard"
        />
        <TextField
          sx={{ width: "95%", m: 1 }}
          id="standard-basic"
          label="rating"
          name="rate"
          onBlur={handleOnBlur}
          variant="standard"
          type="number"
        />

        <Button
          sx={{ width: "95%", m: 1 }}
          style={{
            backgroundColor: "crimson",
          }}
          type="submit"
          variant="contained"
        >
          Add to Database
        </Button>
        {/* {isLoading && <CircularProgress />} */}
      </form>
    </Container>
  );
};

export default AddAProduct;

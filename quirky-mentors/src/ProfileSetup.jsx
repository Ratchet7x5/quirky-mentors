import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import {
  Box,
  Typography,
  Avatar,
  Button,
  TextField,
  ToggleButtonGroup,
  ToggleButton,
  Card,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  CardContent,
  CardMedia,
} from "@mui/material";
import countries from "i18n-iso-countries";
import enLocale from "i18n-iso-countries/langs/en.json";

function ProfileSetup() {
  const nav = useNavigate();
  const [alignment, setAlignment] = React.useState("left");
  const [role, setRole] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [selectedCountry, setSelectedCountry] = React.useState("");

  countries.registerLocale(enLocale);
  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  const selectCountryHandler = (value) => setSelectedCountry(value);
  const countryObj = countries.getNames("en", { select: "official" });

  const countryArr = Object.entries(countryObj).map(([key, value]) => {
    return {
      label: value,
      value: key,
    };
  });
  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <>
      <Button onClick={() => nav("/search")}>Go to Search</Button>
      <Button onClick={() => nav("/signup")}>Back</Button>
      <Box>
        <Typography
          variant="h3"
          gutterBottom
          align="center
        "
        >
          Profile
        </Typography>
      </Box>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { s: 1, m: 2, l: 2 },
        }}
        noValidate
        autoComplete="off"
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Avatar alt="Kinzi Ceolin" sx={{ width: 200, height: 200 }}>
            KC
          </Avatar>
        </Box>
        <Box>
          <TextField
            fullWidth
            required
            id="outlined-required"
            label="First Name"
            defaultValue="First Name"
          />
          <TextField
            fullWidth
            required
            id="outlined-required"
            label="Last Name"
            defaultValue="Last Name"
          />
          <TextField
            fullWidth
            disabled
            id="outlined-disabled"
            label="E-mail"
            defaultValue="E-mail"
          />
          <Box sx={{ display: "flex", gap: 2, alignItems: "flex-start" }}>
            <FormControl sx={{ width: "50%", marginRight: 1 }}>
              <InputLabel id="gender-select-label">Gender</InputLabel>
              <Select
                labelId="gender-select-label"
                id="gender-select"
                value={gender}
                label="Gender"
                onChange={handleGenderChange}
              >
                <MenuItem value={"Male"}>Male</MenuItem>
                <MenuItem value={"Female"}>Female</MenuItem>
                <MenuItem value={"Non-binary"}>Non-binary</MenuItem>
              </Select>
            </FormControl>

            <FormControl sx={{ width: "50%", marginLeft: 1 }}>
              <InputLabel id="role-select-label">Role</InputLabel>
              <Select
                labelId="role-select-label"
                id="role-select"
                value={role}
                label="Role"
                onChange={handleRoleChange}
              >
                <MenuItem value={"Mentor"}>Mentor</MenuItem>
                <MenuItem value={"Mentee"}>Mentee</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <TextField
            fullWidth
            required
            id="outlined-required"
            label="Institution"
            defaultValue="Institution"
          />
          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel id="demo-simple-select-label">Countries</InputLabel>
            <Select
              value={selectedCountry}
              onChange={(e) => selectCountryHandler(e.target.value)}
            >
              {!!countryArr?.length &&
                countryArr.map(({ label, value }) => (
                  <MenuItem key={value} value={value}>
                    {label}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
        </Box>
      </Box>
    </>
  );
}

export default ProfileSetup;

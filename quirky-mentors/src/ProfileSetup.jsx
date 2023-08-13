import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Avatar,
  Button,
  TextField,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  CardMedia,
} from "@mui/material";
import countries from "i18n-iso-countries";
import enLocale from "i18n-iso-countries/langs/en.json";

countries.registerLocale(enLocale);

const GENDERS = [
  { value: "Male", label: "Male" },
  { value: "Female", label: "Female" },
  { value: "Non-binary", label: "Non-binary" },
];

const ROLES = [
  { value: "Mentor", label: "Mentor" },
  { value: "Mentee", label: "Mentee" },
];

function ProfileSetup() {
  const nav = useNavigate();
  const [role, setRole] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [selectedCountry, setSelectedCountry] = React.useState("");

  const countryObj = countries.getNames("en", { select: "official" });
  const countryArr = Object.entries(countryObj).map(([key, value]) => ({
    label: value,
    value: key,
  }));

  const [saving, setSaving] = React.useState(false);
  const [saveSuccess, setSaveSuccess] = React.useState(null);
  const [saveError, setSaveError] = React.useState(null);

  const handleSave = async () => {
    setSaving(true);
    setSaveSuccess(null);
    setSaveError(null);

    const profileData = {
      firstName: document.getElementById("first-name").value,
      lastName: document.getElementById("last-name").value,
      email: document.getElementById("email").value,
      gender,
      role,
      institution: document.getElementById("institution").value,
      country: selectedCountry,
    };

    try {
      const response = await fetch("/api/profile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(profileData),
      });

      const data = await response.json();

      if (response.ok) {
        setSaveSuccess(data.message);
      } else {
        setSaveError(data.error);
      }
    } catch (error) {
      setSaveError("An unexpected error occurred.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <>
      <Box sx={{ position: "relative", textAlign: "center", mb: 3 }}>
        <Button
          onClick={() => nav("/signup")}
          sx={{
            position: "absolute",
            left: 0,
            top: "50%",
            transform: "translateY(-50%)",
          }}
        >
          <CardMedia
            component="img"
            sx={{ width: 30 }}
            image="arrow-left.png"
            alt="Live from space album cover"
          />
        </Button>
        <Typography variant="h3" gutterBottom>
          Profile
        </Typography>
      </Box>
      <Box component="form" noValidate autoComplete="off">
        <AvatarSection />
        <InfoFields
          role={role}
          setRole={setRole}
          gender={gender}
          setGender={setGender}
          selectedCountry={selectedCountry}
          setSelectedCountry={setSelectedCountry}
          countryArr={countryArr}
        />
        <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => nav("/search")}
            fullWidth
          >
            Save
          </Button>
        </Box>
      </Box>
    </>
  );
}

function AvatarSection() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        mb: 2,
      }}
    >
      <Avatar alt="Kinzi Ceolin" sx={{ width: 130, height: 130 }}>
        KC
      </Avatar>
    </Box>
  );
}

function InfoFields({
  role,
  setRole,
  gender,
  setGender,
  selectedCountry,
  setSelectedCountry,
  countryArr,
}) {
  return (
    <Box>
      <TextField
        fullWidth
        required
        id="first-name"
        label="First Name"
        defaultValue=""
        sx={{ mb: 2 }}
      />
      <TextField
        fullWidth
        required
        id="last-name"
        label="Last Name"
        defaultValue=""
        sx={{ mb: 2 }}
      />
      <TextField
        fullWidth
        disabled
        id="email"
        label="E-mail"
        defaultValue=""
        sx={{ mb: 2 }}
      />
      <Box sx={{ display: "flex", gap: 2, alignItems: "flex-start", mb: 2 }}>
        <SelectField
          id="gender-select"
          labelId="gender-select-label"
          label="Gender"
          value={gender}
          onChange={setGender}
          options={GENDERS}
        />
        <SelectField
          id="role-select"
          labelId="role-select-label"
          label="Role"
          value={role}
          onChange={setRole}
          options={ROLES}
        />
      </Box>
      <TextField
        fullWidth
        required
        id="institution"
        label="Institution"
        defaultValue=""
        sx={{ mb: 2 }}
      />
      <SelectField
        id="country-select"
        labelId="country-select-label"
        label="Country"
        value={selectedCountry}
        onChange={setSelectedCountry}
        options={countryArr}
      />
    </Box>
  );
}

function SelectField({ id, labelId, label, value, onChange, options }) {
  return (
    <FormControl fullWidth sx={{ mb: 2 }}>
      <InputLabel id={labelId}>{label}</InputLabel>
      <Select
        labelId={labelId}
        id={id}
        value={value}
        label={label}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map(({ value, label }) => (
          <MenuItem key={value} value={value}>
            {label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default ProfileSetup;

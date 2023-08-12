import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { Box, Typography, Button } from "@mui/material";

function ProfileSetup() {
  const nav = useNavigate();
  return (
    <>
      <Box>
        <Typography>Profile Form</Typography>
        <Button onClick={() => nav("/search")}>Go to Search</Button>
        <Button onClick={() => nav("/signup")}>Back</Button>
      </Box>
    </>
  );
}

export default ProfileSetup;

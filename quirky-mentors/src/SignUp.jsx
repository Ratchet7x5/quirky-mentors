import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { Box, Typography, Button } from "@mui/material";

function SignUp() {
  const nav = useNavigate();
  return (
    <>
      <Box>
        <Typography>Sign Up</Typography>
        <Button onClick={() => nav("/profile-form")}>
          Go to Project Setup
        </Button>
        <Button onClick={() => nav("/")}>Back</Button>
      </Box>
    </>
  );
}

export default SignUp;

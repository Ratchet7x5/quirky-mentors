import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { Box, Typography, Button } from "@mui/material";

function Search() {
  const nav = useNavigate();
  return (
    <>
      <Box>
        <Typography>Search</Typography>
        <Button onClick={() => nav("/profile-form")}>Back</Button>
      </Box>
    </>
  );
}

export default Search;

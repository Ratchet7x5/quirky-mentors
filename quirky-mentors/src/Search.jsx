import { useNavigate} from "react-router-dom";
import { useState } from "react";
import styled from "@emotion/styled";
import { Box, Typography, Button, Autocomplete, TextField, ListItemAvatar, Avatar, ListItem, List } from "@mui/material";

function Search() {
  const nav = useNavigate();
  const dummyData = ["blah", "blah2"]; // get data in the DB
  const [selectedVal, setValue] = useState('');

  const handleSelection = (event, newVal) => {
    setValue(newVal);
  }

  return (
    <div className="">
      <div className="">
        <Button onClick={() => nav("/profile-form")}>Back</Button>
        <Typography>App Name (Search)</Typography>
      </div>
      <div className="">
        <Autocomplete 
          options={dummyData}
          renderInput={(params)=> <TextField {...params}/>}
          value={selectedVal}
          onChange={handleSelection}/>
        <Typography>{selectedVal}</Typography>
      </div>
    </div>
  );
}

export default Search;

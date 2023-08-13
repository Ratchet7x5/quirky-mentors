import { useNavigate} from "react-router-dom";
import { useState } from "react";
import styled from "@emotion/styled";
import { Box, Typography, Button, Autocomplete, TextField, ListItemAvatar, Avatar, ListItem, List, ListItemText } from "@mui/material";
import {modifiedProfileData} from "./fakeData"

function Search() {
  const nav = useNavigate();
  const dummyData = ["CSS", "React", "JavaScript", "C"]
  const [selectedVal, setValue] = useState('React');
  const [selectedProfile, setProfile] = useState([]);

  const handleSelection = (event, newVal) => {
    setValue(newVal);
  }

  //search profiles with the selected skills
  const getProfile = () => {
    let profiles = modifiedProfileData.filter(
        (profile)=> profile.skills.includes(selectedVal)
      )
    setProfile(profiles)
  }

  const profileList = selectedProfile.map((profile) => 
      <ListItem>
        <ListItemAvatar>
          <Avatar></Avatar>
        </ListItemAvatar>
        <ListItemText>{profile.first_name}</ListItemText>
      </ListItem>
    )

  return (
    <div>
      <div className="">
        <Button className="top-0 left-0" onClick={() => nav("/profile-form")}>Back</Button>
        <Typography className="">App Name</Typography>
      </div>
      <div className="">
        <Autocomplete 
          options={dummyData}
          renderInput={(params)=> <TextField {...params}/>}
          value={selectedVal}
          onChange={handleSelection}
          onSelect={getProfile}/>
        <List>
          {profileList}
        </List>
      </div>
    </div>
  );
}

export default Search;

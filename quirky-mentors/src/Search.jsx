import { useNavigate} from "react-router-dom";
import { useState } from "react";
import styled from "@emotion/styled";
import { Box, Typography, Button, Autocomplete, TextField, ListItemAvatar, Avatar, ListItem, List, ListItemText, ListItemButton } from "@mui/material";
import {modifiedProfileData} from "./fakeData"
import { fontSize } from "@mui/system";

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
      <ListItemButton key={profile.profile_id} href={`https://www.linkedin.com/in/${profile.profile_id}/`}>
        <ListItemAvatar>
          <Avatar sx={{height:"45px", width:"45px"}}></Avatar>
        </ListItemAvatar>
        <Box>
          <ListItemText>{profile.first_name} {profile.last_name}</ListItemText>
          <ListItemText>{profile.job_title}</ListItemText>
        </Box>
      </ListItemButton>
    )

  return (
    <div>
      <div className="">
        <Typography sx={{textAlign:"left", fontSize:"20px", paddingBottom:"5px"}}>App Name</Typography>
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

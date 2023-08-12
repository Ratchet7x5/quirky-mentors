async function getProfileAPI(request) {
  try {
    //enable this axios request AFTER the array was edited
    //const response = await axios.request(options); 
    console.log(typeof response);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

const express = require("express");
const app = express();
const PORT = 3000;

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.listen(PORT, () => {
  console.log("Server running on " + PORT);
});

const axios = require("axios");

//this is the request body, with params and headers
const options = {
  method: "POST",
  url: "https://linkedin-profiles-and-company-data.p.rapidapi.com/profile-details",
  headers: {
    "content-type": "application/json",
    "X-RapidAPI-Key": "280518eab0mshf1330f54c6e7ae7p1a31afjsn21142d6947f9",
    "X-RapidAPI-Host": "linkedin-profiles-and-company-data.p.rapidapi.com",
  },
  data: {
    profile_id: "suella-lee",
    profile_type: "personal",
    contact_info: false,
    recommendations: false,
    related_profiles: false,
  },
};

/**
 * *@Ratchet7x5 TODO: Grab all the links for the mentors in SoT
 * Get links
 * Filter them out so we only have the "id portion" of the link
 * for example: https://www.linkedin.com/in/suella-lee/
 * the id here is after the /in/ bit
 * id: suella-lee
 * Add links into an array
 * LOOP
  * edit the JSON each time
  * Make those specific requests
  * Grab data
 * Send data to frontend somehow...
 * add any extra steps here
 * add any extra steps here
 * .
 *
 */

let mentorProfileLinks = ["suella-lee"];

//this function will make those requests for us
getProfileAPI(options);

/**
 * Tarun's profile
{
    skills: [
      'Written Communication',
      'Communication',
      'Android',
      'Robot C',
      'Robotics',
      'Robot Programming',
      'Student Development',
      'Cross-functional Team Leadership',
      'Stakeholder Management',
      'Problem Solving',
      'Team Leadership',
      'Technical Documentation',
      'Technical Writing',
      'Managing Meetings',
      'Programming',
      'Public Speaking',
      'Team Management',
      'JavaScript',
      'Object-Oriented Programming (OOP)',
      'Assistant Teaching'
    ],
    certifications: {},
    patents: {},
    test_scores: {},
    network_info: null,
    awards: [
      {
        issuer: 'Richard Hartzell (Principal) & Andrew Lowman (Associate Principal) [Taipei American School]',
        title: 'Warren Manning Award',
        date: [Object],
        description: 'Awarded to students who have exhibited outstanding growth academically, socially, and personally throughout the school year. '
      },
      {
        issuer: 'Matthew Fagen (Computer Science and Robotics Department Chair) & Richard Hartzell (Principal) [Taipei American School]',
        title: 'Creative Robotics Engineering',
        date: [Object],
        description: 'In recognition of outstanding achievement in Robotics and Engineering. '
      }
    ],
    organizations: {},
    summary: "Hello I'm Tarun and I'm a final year student at AUT. I'm passionate about Computer Science and Leadership. I'm looking for graduate roles or internships in Software Engineering.",
    volunteer_experiences: {},
    premium: false,
    birth_date: null,
    location: {
      short: 'Auckland, Auckland',
      city: 'Auckland',
      country: 'New Zealand',
      default: 'Auckland, Auckland, New Zealand',
      state: 'Auckland'
    },
    position_groups: [
      { profile_positions: [Array], date: [Object], company: [Object] },
      { profile_positions: [Array], date: [Object], company: [Object] }
    ],
    courses: {},
    entity_urn: 'ACoAAClkxdkBUqMdq4TRL9paRYNIhXVkoFeyARM',
    publications: {},
    first_name: 'Tarun',
    influencer: false,
    contact_info: null,
    sub_title: 'Looking for Graduate Software Development roles',
    profile_picture: null,
    last_name: 'R',
    object_urn: 694470105,
    education: [
      {
        field_of_study: 'Software Engineering',
        degree_name: 'Bachelor of Science - BS',
        date: [Object],
        school: [Object]
      },
      {
        field_of_study: 'Computer Science',
        degree_name: 'High School Diploma',
        date: [Object],
        school: [Object]
      }
    ],
    related_profiles: null,
    profile_id: 'tarunram01',
    info: 'For high-volume use of our LinkedIn API, visit https://iscraper.io or send an email at sales@iscraper.io to discuss the pricing.',
    treasury_media: {},
    background_image: 'https://media.licdn.com/dms/image/D5616AQFHlUqWdPaE4Q/profile-displaybackgroundimage-shrink_350_1400/0/1685061368143?e=1697068800&v=beta&t=jZrYFANIVbx83pYOZ4yep62mlMTfCR9iPD3qP42IZi4',
    languages: {
      profile_languages: [ [Object], [Object], [Object] ],
      primary_locale: { country: 'US', language: 'en' },
      supported_locales: [ [Object] ]
    },
    industry: 'Computer Software',
    projects: {},
    profile_type: 'personal'
  }
*/
//after using a converter, here's the actual output:

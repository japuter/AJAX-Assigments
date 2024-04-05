'use strict';


const userData = {
  name: "Joku",
  job: "Web Dev"
};

async function postUserData() {
  try{
  const response = await fetch('https://reqres.in/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
  });

  if (!response.ok) {
    throw new Error(`HHTP error! status: ${response.status}`);
  }

  const data = await response.json();
  console.log(data);
  } catch (error) {
    console.error('error:', error);
  }
}

postUserData();

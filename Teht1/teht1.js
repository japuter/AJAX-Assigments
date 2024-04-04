'use strict';

async function fetchUserData() {
  try{
    const response = await fetch('https://reqres.in/api/users/1') // The download is started here
    if (!response.ok) throw new Error('Invalid input');
    const done = await response.json();
    console.log(done)
  } catch (error) {
    console.log(error.message)
  }
}
fetchUserData();

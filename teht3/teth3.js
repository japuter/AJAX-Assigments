'use strict';

async function testReq(method = 'GET') { //default is GET
  try {
    const options = { method };
    const response = await fetch('https://reqres.in/api/unknown/23', options);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const json = await response.json();
  } catch (e) {
    console.error('Fetch error:', e.message);
  }
}
testReq();
testReq('POST');
testReq('PUT');
testReq('DELETE');

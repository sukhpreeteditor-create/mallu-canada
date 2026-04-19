const https = require('https');

https.get('https://ibb.co/s9X0n6kt', (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    const match = data.match(/https:\/\/i\.ibb\.co\/[^"']+/g);
    console.log("LOGO:", match ? match[0] : 'not found');
  });
});

https.get('https://ibb.co/ywHSL4q', (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    const match = data.match(/https:\/\/i\.ibb\.co\/[^"']+/g);
    console.log("INFLUENCER:", match ? match[0] : 'not found');
  });
});

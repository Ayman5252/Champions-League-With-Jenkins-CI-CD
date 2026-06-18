const http = require('http');

const HOST = process.env.TEST_HOST || '127.0.0.1';
const PORT = 3000;

const testEndpoint = (path, expectedStatus, callback) => {
  const options = {
    hostname: HOST,
    port: PORT,
    path: path,
    method: 'GET'
  };

  const req = http.request(options, (res) => {
    let data = '';

    res.on('data', (chunk) => data += chunk);

    res.on('end', () => {
      if (res.statusCode === expectedStatus) {
        console.log(`✅ ${path} test passed`);
        callback(true);
      } else {
        console.log(`❌ ${path} test failed: ${res.statusCode}`);
        callback(false);
      }
    });
  });

  req.on('error', (err) => {
    console.log(`❌ ${path} connection failed:`, err.message);
    callback(false);
  });

  req.end();
};

let passed = 0;
let total = 2;

const finish = () => {
  if (passed === total) {
    console.log('All tests passed');
    process.exit(0);
  } else {
    console.log('Some tests failed');
    process.exit(1);
  }
};

testEndpoint('/health', 200, (ok) => {
  if (ok) passed++;

  testEndpoint('/api/teams', 200, (ok2) => {
    if (ok2) passed++;
    finish();
  });
});

const fetch = require('node-fetch');

const routes = [
  '/articles',
  '/articles/arttoday',
  '/articles/arttoday/tachisme',
  '/articles/indiatoday',
  '/articles/indiatoday/dharamshala',
  '/articles/philosophytoday',
  '/articles/philosophytoday/creative-mind',
  '/articles/roerichtoday',
  '/articles/roerichtoday/peace-pact',
  '/articles/roerichtoday/roerich-in-india',
  '/articles/web3today',
  '/articles/web3today/decentralized-art',
  '/articles/web3today/what-is-nft',
];

const BASE_URL = 'http://localhost:3000';

(async () => {
  let allOk = true;
  for (const route of routes) {
    try {
      const res = await fetch(BASE_URL + route);
      if (res.status === 200) {
        console.log(`✅  ${route} — OK`);
      } else {
        allOk = false;
        console.error(`❌  ${route} — Status: ${res.status}`);
      }
    } catch (e) {
      allOk = false;
      console.error(`❌  ${route} — Error: ${e.message}`);
    }
  }
  if (allOk) {
    console.log('Все маршруты доступны!');
  } else {
    console.log('Есть недоступные маршруты.');
  }
})(); 
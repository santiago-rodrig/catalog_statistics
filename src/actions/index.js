// src/actions/index.js
import 'node-fetch';
const fetchCompanies = async () => {
  const jsonResponse = await fetch(`https://financialmodelingprep.com/api/v3/profile/AAPL?apikey=dcc4a7c2f57cf7b1f8804163eca5017b`, { headers: { 'Content-Type': 'application/json' } });
  const data = await jsonResponse.json();
  return data;
}
export default fetchCompanies;

import axios from 'axios'

export const getAccessToken = async () => {
    const client_id = process.env.NEXT_PUBLIC_CLIENT_ID;
    const client_secret = process.env.NEXT_PUBLIC_CLIENT_SECRET;
    const url = process.env.NEXT_PUBLIC_TOKEN_URL;
    const data = `grant_type=client_credentials&client_id=${client_id}&client_secret=${client_secret}`;
  
    try {
      const response = await axios.post(url, data, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });
      return response.data.access_token;
    } catch (error) {
      console.error('Error fetching access token:', error);
      throw new Error('Failed to get access token');
    }
};

export const fetchAirports = async (query)=>{
    try{
        const token = await getAccessToken()
        const response = await axios.get(`https://test.api.amadeus.com/v1/reference-data/locations?subType=AIRPORT,CITY&keyword=${query}&page%5Blimit%5D=5`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        return response.data
    }catch(error){
        console.error('Error fetching airports:', error);
        throw new Error('Failed to get airports');
    }
}


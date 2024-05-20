import axios from "axios";

const apiKey: string = "9d3250bc17msh324ee8ab85ce167p114479jsna3a3bce61beb";
const apiHost: string = "lazada-api.p.rapidapi.com";

export const getItemDetail = async (itemId: string, site: string) => {
  const options = {
    method: "GET",
    url: "https://lazada-api.p.rapidapi.com/lazada/item_detail",
    params: {
      item_id: itemId,
      site: site,
    },
    headers: {
      "X-RapidAPI-Key": apiKey,
      "X-RapidAPI-Host": apiHost,
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching item details: ${error}`);
  }
};

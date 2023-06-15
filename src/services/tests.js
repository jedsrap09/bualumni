import axios from "axios";

const config = {
  header: {
    "Content-Type": "application/json",
  },
};

export const test = async () => {
  try {
    const response = await axios.get("http://192.168.1.93:3030/api/students/all", {
      config,
    });
    console.log("res ", response.data);
    return response.data;
  } catch (error) {
    console.log("error ", error);
    return error.response;
  }
};

export const findId = async (id) => {
    try {
      const response = await axios.get(`http://192.168.1.93:3030/api/students/search/${id}`, {
        config,
      });
      console.log("res ", response.data);
      return response.data;
    } catch (error) {
      console.log("error ", error);
      return error.response;
    }
  };

  

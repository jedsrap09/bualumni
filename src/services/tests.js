import axios from "axios";

const config = {
  header: {
    "Content-Type": "application/json",
  },
};

const getAllStudent = async () => {
  try {
    const response = await axios.get(
      "http://192.168.1.93:3030/api/students/all",
      {
        config,
      }
    );
    return response.data;
  } catch (error) {
    console.log("error ", error);
    return error.response;
  }
};

const findId = async (id) => {
  try {
    const response = await axios.get(
      `http://192.168.1.93:3030/api/students/search/${id}`,
      {
        config,
      }
    );
    return response.data;
  } catch (error) {
    console.log("error ", error);
    return error.response;
  }
};

const addAlumni = async (body) => {
  console.log(body);
  try {
    const response = await axios.post(
      "http://192.168.1.93:3030/api/students/add-student",
      body,
      config
    );
    return response.data;
  } catch (error) {
    console.log("error ", error);
    return error.response;
  }
};

export { getAllStudent, findId, addAlumni };

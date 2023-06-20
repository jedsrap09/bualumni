import axios from "axios";

export const listProvince = async () =>
    await axios.get(process.env.REACT_APP_API+'/privince')

export const listAmphure = async (id) =>
    await axios.get(process.env.REACT_APP_API+'/privince/' + id + '/amphure')

export const listDistrict = async (id) =>
    await axios.get(process.env.REACT_APP_API+'/amphure/' + id)
import axios from "axios";
import config from '../config/config'

const GetData = async () => {
  try {
    const result = await axios.get(`${config.domain}/product/`);
    return result.data;
  } catch (error) {
    return error;
  }
};

const Create = async (payload: any) => {
  try {
    const result = await axios.post(`${config.domain}/product/`, payload);
  } catch (error) {
    return error;
  }
};

const Update = async (payload: any) => {
  try {
    const result = await axios.put(
        `${config.domain}/product/` + payload.id,
      payload
    );
    return result;
  } catch (error) {
    return error;
  }
};

const findData = async (id: any) => {
  try {
    const result = await axios.get(`${config.domain}/product/`+ id);
    return result;
  } catch (error) {
    return error;
  }
};

const Deleted = async (id: any) => {
  try {
    const result = await axios.delete(`${config.domain}/product/` + id);
    return result;
  } catch (error) {
    return await error;
  }
};

const updatePhoto = async (data: any) => {
  const id = parseInt(data.get("id"));
  try {
    const result = await axios.put(`${config.domain}/product/upload/` + id, data);
    return result;
  } catch (error) {
    return await error;
  }
};

const upload = async (payload: any) => {
  try {
    const result = await axios.post(
        `${config.domain}/product/upload/`,
      payload
    );
    return result;
  } catch (error) {
    return error;
  }
};

export default {
  GetData,
  Create,
  Update,
  findData,
  upload,
  Deleted,
  updatePhoto,
};
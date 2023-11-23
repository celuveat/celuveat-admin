import axios from 'axios';

export const apiClient = axios.create({
  baseURL: `${import.meta.env.VITE_ADMIN_URL}`,
  headers: {
    'Content-type': 'application/json',
  },
});

// export const apiUserFilesClient = axios.create({
//   baseURL: `${process.env.BASE_URL}`,
//   headers: {
//     'Content-Type': 'multipart/form-data',
//   },
//   withCredentials: true,
// });
// export const apiFilesClient = axios.create({
//   baseURL: `${process.env.BASE_URL}`,
//   headers: {
//     'Content-Type': 'multipart/form-data',
//   },
// });

import { fetchBaseQuery } from '@reduxjs/toolkit/query';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const DEFAULT_HEADERS = {
  'Content-Type': 'application/json',
};

export const baseQuery = fetchBaseQuery({
  baseUrl: API_BASE_URL,
  headers: DEFAULT_HEADERS,
});

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_URL || 'http://localhost:5000/api/v1',
  credentials: 'include',
  prepareHeaders: (headers, { getState }) => {
    const token = getState()?.auth?.accessToken
    if (token) {
      const prefix = 'Bearer '
      headers.set('authorization', prefix + token)
    }
    return headers
  }
})

export const api = createApi({
  reducerPath: 'api',
  baseQuery,
  endpoints: () => ({})
})

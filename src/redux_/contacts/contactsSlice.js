import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = 'https://connections-api.herokuapp.com';
const contacts = '/contacts';

export const contactsApiSlice = createApi({
  reducerPath: 'contacts',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ['Contacts'],
  endpoints: builder => ({
    fetchContacts: builder.query({
      query: () => contacts,
      providesTags: ["Contacts"],
      // providesTags: (result, err, arg) => {
      //   return [
      //     ...result.map(({ id }) => {
      //       return {
      //         type: 'Contacts',
      //         id,
      //       };
      //     }),
      //   ];
      // },
    }),
    addContact: builder.mutation({
      query: newContact => ({
        url: `/contacts`,
        method: 'POST',
        // headers: {
        // Authorization: `Bearer ${state.auth.token}`,
        // 'Content-Type': 'application/json'},
        body: newContact,
      }),
      invalidatesTags: ['Contacts'],
    }),
    deleteContact: builder.mutation({
      query: contactId => ({
        url: `/contacts/${contactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contacts'],
      
    }),
  }),
});

export const {
  useFetchContactsQuery,
  useDeleteContactMutation,
  useAddContactMutation,
} = contactsApiSlice;

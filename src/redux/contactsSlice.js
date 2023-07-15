import { createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    setContact(state, action) {
      state.unshift(action.payload);
    },
    deleteContact(state, action) {
      return state.filter(({ id }) => id !== action.payload);
    },
  },
});

export const contactsReducer = contactsSlice.reducer;

export const { setContact, deleteContact } = contactsSlice.actions;

//Selectors

export const getContacts = state => state.contacts;

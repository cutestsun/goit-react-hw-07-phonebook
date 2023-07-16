export const handlePending = state => {
  state.isLoading = true;
};

export const handleFetchContacts = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items = action.payload;
};

export const handleAddContact = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items.unshift(action.payload);
};

export const handleDeleteContact = (state, action) => {
  state.isLoading = false;
  state.error = null;
  const index = state.items.findIndex(
    contact => contact.id === action.payload.id
  );

  state.items.splice(index, 1);
};

export const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

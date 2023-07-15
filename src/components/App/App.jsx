import { ContactsList } from '../ContactsList/ContactsList';
import { ContactsForm } from '../ContactsForm/ContactsForm';
import { Filter } from '../Filter/Filter';
import { MainWrapper } from './App.styled';

export const App = () => {
  return (
    <MainWrapper>
      <h1>Phonebook</h1>

      <ContactsForm />

      <h2>Contacts</h2>
      <p>Find contacts by name</p>
      <Filter />
      <ContactsList />
    </MainWrapper>
  );
};

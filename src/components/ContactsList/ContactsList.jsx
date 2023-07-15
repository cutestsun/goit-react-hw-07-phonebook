import { Li } from './ContactsList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/filterSlice';
import { getContacts, deleteContact } from 'redux/contactsSlice';

export const ContactsList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <ul>
      {visibleContacts.map(({ id, name, number }) => (
        <Li key={id}>
          {name}: {number}
          <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
        </Li>
      ))}
    </ul>
  );
};

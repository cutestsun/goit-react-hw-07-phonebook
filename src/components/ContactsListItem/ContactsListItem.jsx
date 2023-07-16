import { useDispatch, useSelector } from 'react-redux';
import { Button, Item } from './ContactsListItem.styled';
import { deleteContact } from 'redux/operations';
import { selectIsLoading } from 'redux/selectors';
import { Loader } from 'components/Loader/Loader';
import { useState } from 'react';

export const ContactsListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const [deletingContactId, setDeletingContactId] = useState(null);

  return (
    <Item>
      {name}: {number}
      <Button
        onClick={() => {
          setDeletingContactId(id);
          dispatch(deleteContact(id)).then(() => setDeletingContactId(null));
        }}
        // disabled={isLoading}
      >
        Delete
        {deletingContactId === id && isLoading && <Loader size={12} />}
      </Button>
    </Item>
  );
};

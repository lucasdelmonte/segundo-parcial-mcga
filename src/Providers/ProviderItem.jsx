import React from 'react';
import { FaTrash as DeleteIcon, FaPen as EditIcon } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { creatorRemoveProvider } from '../redux/actions/providersActions';

export const ProviderItem = (props) => {
  const dispatch = useDispatch();
  const { providerToShow, onEdit } = props;

  const handleDelete = (id) => {
    const action = creatorRemoveProvider(providerToShow.id);
    dispatch(action);
  };

  return (
    <div className='border border-secondary my-2'>
      <p>Name: {providerToShow.name}</p>
      <p>Telephone: {providerToShow.telephone}</p>
      <p>Location: {providerToShow.location}</p>
      <EditIcon
        onClick={() => onEdit(providerToShow)}
        style={{ cursor: 'pointer', color: 'red' }}
      />
      <DeleteIcon onClick={handleDelete} style={{ cursor: 'pointer' }} />
    </div>
  );
};

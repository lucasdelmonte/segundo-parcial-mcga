import React from 'react';
import { FaTrash as DeleteIcon, FaPen as EditIcon } from 'react-icons/fa';

export const ProviderItem = (props) => {
  const { providerToShow, onDelete, onEdit } = props;
  return (
    <div className="border border-secondary my-2">
      <p>Name: {providerToShow.name}</p>
      <p>Telephone: {providerToShow.telephone}</p>
      <p>Location: {providerToShow.location}</p>
      <EditIcon
        onClick={() => onEdit(providerToShow)}
        style={{ cursor: 'pointer', color: 'red' }}
      />
      <DeleteIcon
        onClick={() => onDelete(providerToShow.id)}
        style={{ cursor: 'pointer' }}
      />
    </div>
  );
};

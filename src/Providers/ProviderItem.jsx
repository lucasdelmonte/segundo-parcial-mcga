import React from 'react';
import {
  FaTrash as DeleteIcon,
  FaPen as EditIcon,
  FaHandHolding
} from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { creatorRemoveProvider } from '../redux/actions/providersActions';
import { providersReducer } from '../redux/reducers/providersReducer';
import styles from '../shared/Section/Section.module.css';

export const ProviderItem = (props) => {
  const dispatch = useDispatch();
  const { providerToShow, onEdit } = props;

  const handleDelete = (id) => {
    const action = creatorRemoveProvider(providerToShow.id);
    dispatch(action);
  };

  return (
    <>
      <tr>
        <td>{providerToShow.name}</td>
        <td>{providerToShow.telephone}</td>
        <td>{providerToShow.location}</td>
        <td>
          <EditIcon
            class={styles.edit}
            onClick={() => onEdit(providerToShow)}
          />
          <DeleteIcon class={styles.delete} onClick={handleDelete} />
        </td>
      </tr>
    </>
  );
};

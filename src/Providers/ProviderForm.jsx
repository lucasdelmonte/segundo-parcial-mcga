import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  creatorAddProvider,
  creatorEditProvider
} from '../redux/actions/providersActions';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';

export const ProviderForm = (props) => {
  const dispatch = useDispatch();
  const { type, provider } = props;
  const [name, setName] = useState(provider ? provider.name : '');
  const [telephone, setTelephone] = useState(
    provider ? provider.telephone : ''
  );
  const [location, setLocation] = useState(provider ? provider.location : '');
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (type === 'add') {
      const provider = { name, telephone, location };
      const action = creatorAddProvider(provider);
      dispatch(action);
    }
    if (type === 'edit') {
      const payloadProvider = { id: provider.id, name, telephone, location };
      const action = creatorEditProvider(payloadProvider);
      dispatch(action);
    }
    setName('');
    setTelephone('');
    setLocation('');
  };
  useEffect(() => {
    setName(provider ? provider.name : '');
    setTelephone(provider ? provider.telephone : '');
    setLocation(provider ? provider.location : '');
  }, [provider]);
  return (
    <>
      <Button
        variant="primary"
        onClick={handleShow}
        className="btn btn-info ms-2"
      >
        Launch modal
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Provider modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit} className="mt-3">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="form-control mb-3"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <input
              type="number"
              name="telephone"
              placeholder="Telephone"
              className="form-control mb-3"
              onChange={(e) => setTelephone(e.target.value)}
              value={telephone}
            />
            <input
              type="text"
              name="location"
              placeholder="Location"
              className="form-control mb-3"
              onChange={(e) => setLocation(e.target.value)}
              value={location}
            />
            <button className="btn btn-success" type="submit">
              Confirm
            </button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button className="btn btn-danger" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

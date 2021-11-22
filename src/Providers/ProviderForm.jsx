import React, { useEffect, useState } from 'react';

export const ProviderForm = (props) => {
  const { onSubmitForm, provider } = props;
  const [name, setName] = useState(provider ? provider.name : '');
  const [telephone, setTelephone] = useState(
    provider ? provider.telephone : ''
  );
  const [location, setLocation] = useState(provider ? provider.location : '');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmitForm({
      id: provider ? provider.id : undefined,
      name,
      telephone,
      location
    });
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
        type="text"
        name="telephone"
        placeholder="Telephone"
        className="form-control mb-3"
        onChange={(e) => setTelephone(e.target.value)}
        value={telephone}
      />
      <input
        type="number"
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
  );
};

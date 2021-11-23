import React, { useState } from 'react';
import { providers as initalProviders } from '../mocks/providers.json';
import { Header } from './Header';
import { ProvidersList } from './ProviderList';
import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';

function Providers() {
  const list = useSelector((state) => state.list);
  console.log(list);
  const [showForm, setShowForm] = useState({ show: false, mode: 'Add' });
  const [providers, setproviders] = useState(initalProviders);
  const [providerToEdit, setProviderToEdit] = useState(undefined);

  const handleEditClick = (provider) => {
    setProviderToEdit(provider);
    setShowForm({ show: true, mode: 'Edit' });
  };

  const handleAddProvider = (provider) => {
    provider.id = uuidv4();
    setproviders([...providers, provider]);
  };

  const handleDeleteProvider = (id) => {
    const newProviders = providers.filter((provider) => provider.id !== id);
    setproviders(newProviders);
  };

  const handleEditProvider = (provider) => {
    const newProviders = providers.map((x) =>
      x.id === provider.id ? provider : x
    );
    setproviders(newProviders);
  };

  return (
    <div className="m-3">
      <Header
        showProviderForm={showForm}
        setShowProviderForm={setShowForm}
        onAddProvider={handleAddProvider}
        onEditProvider={handleEditProvider}
        providerToEdit={providerToEdit}
      />
      <ProvidersList
        providerList={list}
        onDelete={handleDeleteProvider}
        onEdit={handleEditClick}
      />
    </div>
  );
}

export default Providers;

import React from 'react';
import { ProviderForm } from './ProviderForm';

export const AddProvider = (props) => {
  const { onAddProvider } = props;
  return <ProviderForm onSubmitForm={onAddProvider} />;
};

import React from 'react';
import { ProviderItem } from './ProviderItem';

export const ProvidersList = (props) => {
  const { providerList, onDelete, onEdit } = props;
  return (
    <div>
      {providerList.map((provider) => (
        <ProviderItem
          key={provider.id}
          providerToShow={provider}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
};

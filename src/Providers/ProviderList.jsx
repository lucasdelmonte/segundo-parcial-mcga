import React from 'react';
import { ProviderItem } from './ProviderItem';

export const ProvidersList = (props) => {
  const { providerList, onDelete, onEdit } = props;
  return (
    <>
      <div className="table-responsive">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Telephone</th>
              <th>Location</th>
              <th>Options</th>
            </tr>
          </thead>
          {providerList.map((provider) => (
            <ProviderItem
              key={provider.id}
              providerToShow={provider}
              onDelete={onDelete}
              onEdit={onEdit}
            />
          ))}
        </table>
      </div>
    </>
  );
};

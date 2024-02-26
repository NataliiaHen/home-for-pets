import './Catalog.scss';
import React from 'react';
import { Pet } from '../../types/Pet';
import { PetsList } from '../PetsList';
import { Pagination } from '../Pagination';

type Props = {
  pets: Pet[],
  itemsPerPage: number,
  petsCount: number,
  handlePageChange: (selected: number) => void,
};

export const Catalog: React.FC<Props> = ({
  pets, petsCount, itemsPerPage, handlePageChange,
}) => {
  const pageCount = Math.ceil(petsCount / itemsPerPage);

  return (
    <div className="catalog">
      <PetsList pets={pets} />

      {pageCount > 1 && (
        <Pagination
          pageCount={pageCount}
          handlePageChange={handlePageChange}
        />
      )}
    </div>
  );
};

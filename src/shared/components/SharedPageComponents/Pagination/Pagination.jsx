import Pagination from '@mui/material/Pagination';

import { StyledPaginationContainer } from './Pagination.styled';

export default function BasicPagination({ page, totalPages, onChange }) {
  return (
    <StyledPaginationContainer>
      <Pagination
        count={totalPages}
        onChange={(e, value) => onChange(value)}
        page={page}
        boundaryCount={1}
        siblingCount={0}
      />
    </StyledPaginationContainer>
  );
}

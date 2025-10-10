import styled from "styled-components";

export const DropdownContainer = styled.div`
  width: 300px; /* adjust as needed */
  max-height: 200px; /* your fixed height */
  border: 1px solid #ccc;
  border-radius: 4px;
  overflow-y: auto; /* makes it scrollable */
  background: #fff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
`;

export const Item = styled.div`
  padding: 8px 12px;
  cursor: pointer;

  &:hover {
    background: #f0f0f0;
  }
`;

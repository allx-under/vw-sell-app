import styled from 'styled-components';
const SortInput = ({ selectValue, setSelectValue }) => {
  return (
    <StyledInput>
      <StyledLabel htmlFor="select">Sort by:</StyledLabel>

      <StyledSelect
        value={selectValue}
        onChange={e => setSelectValue(e.target.value)}
        name="car"
        id="select"
      >
        <option defaultValue>Regular</option>
        <option value="asc">Price ascending</option>
        <option value="desc">Price descending</option>
        <option value="popular">Popular</option>
      </StyledSelect>
    </StyledInput>
  );
};

export default SortInput;

const StyledInput = styled.form`
  position: absolute;
  top: 160px;
  right: 70px;
`;

const StyledLabel = styled.label`
  margin-right: 5px;
  color: white;
`;

const StyledSelect = styled.select`
  background-color: #fff;
  color: rgb(20, 20, 20);
  border: 1px solid white;
  width: 130px;
  height: 20px;
  border-radius: 5px;
`;

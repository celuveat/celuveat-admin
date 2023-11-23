import styled from 'styled-components';

interface Props {
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  type: React.HTMLInputTypeAttribute;
  placeholder?: string;
  buttonContent?: string;
}

function InputForm({ onSubmit, type, placeholder = '', buttonContent = '확인' }: Props) {
  return (
    <Container onSubmit={onSubmit}>
      <input type={type} placeholder={placeholder} />
      <button type="submit">{buttonContent}</button>
    </Container>
  );
}

export default InputForm;

const Container = styled.form`
  display: flex;
  align-items: center;

  border-radius: 12px;
  height: 4.4rem;
  width: 420px;
  border: 1px solid var(--primary-1);
  overflow: hidden;

  & > input {
    height: 100%;
    width: calc(100% - 72px);
    border: none;
    font-size: 1.6rem;
    margin: 1.2rem;
  }

  & > button {
    width: 72px;
    height: 100%;
    font-size: 1.6rem;
    border: none;
    background: var(--primary-1);
  }
`;

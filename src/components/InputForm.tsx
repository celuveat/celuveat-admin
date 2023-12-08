import { ChangeEvent, FormEvent, useRef } from 'react';
import styled from 'styled-components';

interface Props {
  onSubmit: (v: string) => void;
  type: React.HTMLInputTypeAttribute;
  placeholder?: string;
  buttonContent?: string;
}

function InputForm({ onSubmit, type, placeholder = '', buttonContent = '확인' }: Props) {
  const ref = useRef<string>('');

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(ref.current);
  };

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    ref.current = e.target.value;
  };

  return (
    <Container onSubmit={submitHandler}>
      <input type={type} placeholder={placeholder} onChange={changeHandler} />
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

import styled from 'styled-components';
import Logo from '../../assets/logo/main-logo.svg?react';
import InputForm from '../../components/InputForm';
import { useMutation } from '@tanstack/react-query';
import { postKey } from '../../apis/api';

function MainPage() {
  const { data, mutate } = useMutation({
    mutationFn: postKey,
    onSuccess: (_, value) => {
      sessionStorage.setItem('admin-key', value);
    },
    onError: () => {
      alert('누구냐 넌');
    },
  });

  const submit = (password: string) => {
    mutate(password);
  };

  return (
    <Container>
      <Title>
        <Logo width={96} />
        <div>Celuveat admin</div>
      </Title>

      <section>
        <InputForm type="password" placeholder="키를 입력하세요." onSubmit={submit} />
      </section>
      {data}
    </Container>
  );
}

export default MainPage;

const Container = styled.main`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

const Title = styled.h1`
  display: flex;
  gap: 2px;
  align-items: center;

  & > div {
    color: #000;
  }
`;

import Button from '../../_jeremylib/Button';
import TextInput from '../../_jeremylib/TextInput';
import { Container } from '../../components/@common/Container';
import { Form } from '../../components/@common/Form';

const CelebPage = () => {
  return (
    <Container>
      <h1>셀럽 추가하기</h1>
      <Form>
        <section>
          <h3>셀럽 이름</h3>
          <TextInput />
        </section>
        <section>
          <h3>유튜브 채널 명</h3>
          <TextInput />
        </section>
        <section>
          <h3>프로필 이미지 링크</h3>
          <TextInput />
        </section>
        <Button type="submit">슛!</Button>
      </Form>
    </Container>
  );
};

export default CelebPage;

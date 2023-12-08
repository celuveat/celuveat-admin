import Button from '../../_jeremylib/Button';
import { Container } from '../../components/@common/Container';
import { Form } from '../../components/@common/Form';
import TextInputSection from '../../components/TextInputSection';

const CelebPage = () => {
  return (
    <Container>
      <h1>셀럽 추가하기</h1>
      <Form>
        <TextInputSection title="셀럽 이름" />
        <TextInputSection title="유튜브 채널 명" />
        <TextInputSection title="프로필 이미지 링크" />
        <Button type="submit">슛!</Button>
      </Form>
    </Container>
  );
};

export default CelebPage;

import Button from '../../_jeremylib/Button';
import { Container } from '../../components/@common/Container';
import { Form } from '../../components/@common/Form';
import TextInputSection from '../../components/TextInputSection';

const RestaurantPage = () => {
  return (
    <Container>
      <h1>음식점 추가하기</h1>
      <Form>
        <TextInputSection title="유튜브 링크" />
        <TextInputSection title="네이버 지도 링크" />
        <Button type="submit">슛!</Button>
      </Form>
    </Container>
  );
};

export default RestaurantPage;

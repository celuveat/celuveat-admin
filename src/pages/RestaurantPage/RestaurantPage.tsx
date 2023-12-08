import Button from '../../_jeremylib/Button';
import TextInput from '../../_jeremylib/TextInput';
import { Container } from '../../components/@common/Container';
import { Form } from '../../components/@common/Form';

const RestaurantPage = () => {
  return (
    <Container>
      <h1>음식점 추가하기</h1>
      <Form>
        <section>
          <h3>유튜브 링크</h3>
          <TextInput />
        </section>
        <section>
          <h3>네이버 지도 링크</h3>
          <TextInput />
        </section>
        <Button type="submit">슛!</Button>
      </Form>
    </Container>
  );
};

export default RestaurantPage;

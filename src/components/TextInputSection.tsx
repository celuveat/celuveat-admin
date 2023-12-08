import TextInput from '../_jeremylib/TextInput';

interface Props {
  title: string;
}

const TextInputSection = ({ title }: Props) => {
  return (
    <section>
      <h3>{title}</h3>
      <TextInput />
    </section>
  );
};

export default TextInputSection;

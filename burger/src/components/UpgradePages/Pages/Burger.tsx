import BackButton from '../BackButton';
import UpgradeButton from '../UpgradeButton';

interface Props {
  Page: (page: string) => void;
}

const Burger = ({ Page }: Props) => {
  return (
    <>
      <h1>Burger</h1>
      <BackButton page={Page} />
      <UpgradeButton image="zilver" text="Lorem Ipsum" desc="Dolor Opset" />
      <UpgradeButton image="zilver" text="Lorem Ipsum" desc="Dolor Opset" />
      <UpgradeButton image="zilver" text="Lorem Ipsum" desc="Dolor Opset" />
      <UpgradeButton image="zilver" text="Lorem Ipsum" desc="Dolor Opset" />
    </>
  );
};

export default Burger;

import BackButton from '../BackButton';
import UpgradeButton from '../UpgradeButton';

interface Props {
  Page: (page: string) => void;
}

const PattyUpgrade = ({ Page }: Props) => {
  return (
    <>
      <h1>Patty</h1>
      <BackButton page={Page} />
      <UpgradeButton image="zilver" text="Lorem Ipsum" desc="dolor opset" />
      <UpgradeButton image="zilver" text="Lorem Ipsum" desc="dolor opset" />
      <UpgradeButton image="zilver" text="Lorem Ipsum" desc="dolor opset" />
      <UpgradeButton image="zilver" text="Lorem Ipsum" desc="dolor opset" />
    </>
  );
};

export default PattyUpgrade;

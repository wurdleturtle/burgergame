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
      <UpgradeButton
        image="flamingpan"
        text="Flaming Pans"
        desc="Reduces Patty Cooldown"
        upgrade={1}
        price={50}
      />
      <UpgradeButton
        image="biggerpan"
        text="Bigger Pans"
        desc="Cook more patties!"
        upgrade={1}
        price={100}
      />
      <UpgradeButton
        image="zilver"
        text="Spatula 3000"
        desc="Automatically Cooks Patties if none have been cooking"
        upgrade={1}
        price={1000}
      />
      <UpgradeButton
        image="zilver"
        text="Lorem Ipsum"
        desc="dolor opset"
        upgrade={1}
        price={2000}
      />
    </>
  );
};

export default PattyUpgrade;

import BackButton from '../BackButton';
import UpgradeButton from '../UpgradeButton';

interface Props {
  Page: (page: string) => void;
}

const BurgerBunTop = ({ Page }: Props) => {
  return (
    <>
      <h1>Top Bun</h1>
      <BackButton page={Page} />
      <UpgradeButton
        image="zilver"
        text="Strong Clicks"
        desc="Provides Strong Clicks"
        price={100}
        upgrade={1}
      />
      <UpgradeButton
        image="pipari"
        text="Stronger Clicks"
        desc="Provides Stronger Clicks"
        price={100}
      />
      <UpgradeButton
        image="zilver"
        text="Strongerer Clicks"
        desc="Provides Strongerer Clicks"
        price={100}
      />
      <UpgradeButton
        image="pipari"
        text="Strongererer Clicks"
        desc="Provides Strongererer Clicks"
        price={100}
      />
    </>
  );
};

export default BurgerBunTop;

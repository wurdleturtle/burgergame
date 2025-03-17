import UpgradeButtonSelect from './UpgradeButtonSelect';

interface Props {
  setUpgradePage: (page: string) => void;
}

const MainUpgradePage = ({ setUpgradePage }: Props) => {
  return (
    <>
      {' '}
      <h1>Upgrades</h1>
      <UpgradeButtonSelect
        page="burgerbuntop"
        updatePage={setUpgradePage}
        image="burgerbuntop"
        text="Burger Top Bun Upgrades"
      />
      <UpgradeButtonSelect
        page="patty"
        updatePage={setUpgradePage}
        image="patty"
        text="Burger Patty Upgrades"
      />
      <UpgradeButtonSelect
        page="burgerbunbottom"
        updatePage={setUpgradePage}
        image="burgerbunbottom"
        text="Burger Bottom Bun Upgrades"
      />
      <UpgradeButtonSelect
        page="test"
        updatePage={setUpgradePage}
        image="balatro"
        text="Place Holder Upgrade Text"
      />
      <UpgradeButtonSelect
        page="test"
        updatePage={setUpgradePage}
        image="balatro"
        text="Place Holder Upgrade Text"
      />{' '}
    </>
  );
};

export default MainUpgradePage;

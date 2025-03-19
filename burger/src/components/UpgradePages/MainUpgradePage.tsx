import UpgradeButtonSelect from './UpgradeButtonSelect';

interface Props {
  setUpgradePage: (page: string) => void;
  money: number;
}

const MainUpgradePage = ({ setUpgradePage, money }: Props) => {
  return (
    <>
      {' '}
      <h1>Upgrades</h1>
      <p style={{ color: 'green' }}>${money}</p>
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
        page="burger"
        updatePage={setUpgradePage}
        image="burger"
        text="Burger Construction Upgrades"
        height="100px"
      />
      <UpgradeButtonSelect
        page="cash"
        updatePage={setUpgradePage}
        image="burgermoney"
        text="Burger Selling Upgrades"
      />{' '}
    </>
  );
};

export default MainUpgradePage;

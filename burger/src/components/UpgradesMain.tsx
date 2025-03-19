import { useState } from 'react';
import MainUpgradePage from './UpgradePages/MainUpgradePage';
import BurgerBunTop from './UpgradePages/Pages/BurgerBunTop';
import PattyUpgrade from './UpgradePages/Pages/Patty';
import BurgerBunBottom from './UpgradePages/Pages/BurgerBunBottom';
import Burger from './UpgradePages/Pages/Burger';

interface Props {
  money: number;
}

const UpgradesMain = ({ money }: Props) => {
  const [Page, setPage] = useState('main');
  return (
    <>
      {Page === 'main' && (
        <MainUpgradePage setUpgradePage={setPage} money={money} />
      )}
      {Page === 'burgerbuntop' && <BurgerBunTop Page={setPage} />}
      {Page === 'patty' && <PattyUpgrade Page={setPage} />}
      {Page === 'burgerbunbottom' && <BurgerBunBottom Page={setPage} />}
      {Page === 'burger' && <Burger Page={setPage} />}
    </>
  );
};

export default UpgradesMain;

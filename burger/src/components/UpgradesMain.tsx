import { useState } from 'react';
import MainUpgradePage from './UpgradePages/MainUpgradePage';
import BurgerBunTop from './UpgradePages/Pages/BurgerBunTop';
import PattyUpgrade from './UpgradePages/Pages/Patty';
import BurgerBunBottom from './UpgradePages/Pages/BurgerBunBottom';

const UpgradesMain = () => {
  const [Page, setPage] = useState('main');
  return (
    <>
      {Page === 'main' && <MainUpgradePage setUpgradePage={setPage} />}
      {Page === 'burgerbuntop' && <BurgerBunTop Page={setPage} />}
      {Page === 'patty' && <PattyUpgrade Page={setPage} />}
      {Page === 'burgerbunbottom' && <BurgerBunBottom Page={setPage} />}
    </>
  );
};

export default UpgradesMain;

import { useState, useEffect } from 'react';
import UpgradeButton from './UpgradePages/UpgradeButton';
import { fetchData } from '../api'; // Assuming you have the fetchData function

const UpgradesMain = () => {
  const [firstButtonText, setFirstButtonText] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getUpgradeText = async () => {
      try {
        const data = await fetchData(); // Assuming this returns the necessary text for the first button
        setFirstButtonText(data.firstUpgradeText); // Set the fetched text here
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch data');
        setLoading(false);
      }
    };

    getUpgradeText();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <>
      <h1>Upgrades</h1>
      <UpgradeButton
        image="burgerbuntop"
        text={firstButtonText || 'Default Text for First Button'} // Default text as fallback
      />
      <UpgradeButton image="patty" text="Burger Patty Upgrades" />
      <UpgradeButton
        image="burgerbunbottom"
        text="Burger Bottom Bun Upgrades"
      />
      <UpgradeButton image="balatro" text="Place Holder Upgrade Text" />
      <UpgradeButton image="balatro" text="Place Holder Upgrade Text" />
    </>
  );
};

export default UpgradesMain;

interface Props {
  image: string;
  text: string;
  price?: number;
  desc?: string;
  upgrade?: number;
}

const UpgradeButton = ({ image, text, price, desc, upgrade }: Props) => {
  return (
    <>
      <button className="UpgradeSelection">
        {' '}
        <img src={'https://images.wurdle.eu/' + image + '.png'} />{' '}
        <h1>
          {text} <br />
          <div style={{ fontSize: 14 }}>{desc}</div>
        </h1>{' '}
        <p>
          {price || '85'}$<br />+{upgrade || '1'} Clicks
        </p>
      </button>
      <br />
    </>
  );
};

export default UpgradeButton;

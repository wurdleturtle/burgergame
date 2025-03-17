interface Props {
  image: string;
  text: string;
}

const UpgradeButton = ({ image, text }: Props) => {
  return (
    <>
      <button className="UpgradeSelection">
        {' '}
        <img
          src={'https://images.wurdle.eu/' + image + '.png'}
          style={{ width: 150 }}
        />{' '}
        <h1>{text}</h1>{' '}
      </button>
      <br />
    </>
  );
};
export default UpgradeButton;

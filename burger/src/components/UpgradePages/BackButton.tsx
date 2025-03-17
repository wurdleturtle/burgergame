interface Props {
  page: (page: string) => void;
}

const BackButton = ({ page }: Props) => {
  return (
    <>
      <button className="UpgradeSelection" onClick={() => page('main')}>
        {' '}
        {/*<img
          src={'https://images.wurdle.eu/balatro.png'}
          style={{ width: 150 }}
        />*/}{' '}
        <h1>Back to Main Page</h1>{' '}
      </button>
      <br />
    </>
  );
};

export default BackButton;

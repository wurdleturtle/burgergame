interface Props {
  image: string;
  text: string;
  page: string;
  updatePage: (page: string) => void;
}

const UpgradeButtonSelect = ({ image, text, page, updatePage }: Props) => {
  return (
    <>
      <button className="UpgradeSelection" onClick={() => updatePage(page)}>
        {' '}
        <img
          src={'https://images.wurdle.eu/' + image + '.png'}
          style={{ width: 150, height: 'auto' }}
        />{' '}
        <h1>{text}</h1>{' '}
      </button>
      <br />
    </>
  );
};
export default UpgradeButtonSelect;

interface Props {
  count: number;
  onIncrement: (add: number, type: string) => void;
  right: string;
  top: string;
  width: string;
  image: string;
  type: string;
}

const BurgerPart = ({
  count,
  onIncrement,
  right,
  top,
  width,
  image,
  type,
}: Props) => {
  return (
    <div
      className="burger-container"
      style={{ position: 'absolute', right: right, top: top, width: width }}
    >
      <button onClick={() => onIncrement(1, type)}>
        <img
          src={'https://images.wurdle.eu/' + image + '.png'}
          alt="Burger"
          draggable="false"
        />
        <span className="burger-count">{count}</span>
      </button>
    </div>
  );
};

export default BurgerPart;

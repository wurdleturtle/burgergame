interface Props {
  count: number;
  onIncrement: (add: number, type: string) => void;
  image?: string;
  width?: string;
  top?: string;
}

const Burger = ({ count, onIncrement, image, width, top }: Props) => {
  return (
    <div className="burger-container">
      <progress
        value="50"
        max="100"
        style={{ position: 'absolute', left: '15%', top: top || '6' }}
      />
      <button onClick={() => onIncrement(1, 'main')}>
        <img
          src={`https://images.wurdle.eu/${image}.png`}
          draggable="false"
          style={{ width: width || '100%' }}
        />
        <span className="burger-count">{count}</span>
      </button>
    </div>
  );
};

export default Burger;

type Row = {
  val: string;
  chosen: boolean;
};

const Card = ({
  list,
  checkboxClick,
}: {
  list: Row[];
  checkboxClick: React.ChangeEventHandler<HTMLInputElement>;
}) => {
  return (
    <div className="card">
      <ul>
        {list.map((item: Row) => (
          <li key={item.val}>
            <input
              checked={item.chosen}
              type="checkbox"
              onChange={checkboxClick}
              value={item.val}
            />
            {item.val}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Card;

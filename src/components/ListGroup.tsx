import { useState } from "react";
interface Props {
  header: string;
  items: string[];
  onSelectItem: (item: string) => void;
}
function ListGroup({ items, header, onSelectItem }: Props) {
  function handleClick(item: string, index: number) {
    onSelectItem(item);
    setSelectedIndex(index);
  }

  const [selectedIndex, setSelectedIndex] = useState(-1);

  function getList() {
    if (items.length === 0) {
      return <p>No Items Returned</p>;
    } else {
      return (
        <ul className="list-group">
          {items.map((item, index) => (
            <li
              className={
                selectedIndex === index
                  ? "list-group-item active"
                  : "list-group-item"
              }
              key={item}
              onClick={() => handleClick(item, index)}
            >
              {item}
            </li>
          ))}
        </ul>
      );
    }
  }
  return (
    <>
      <h1>{header}</h1>
      {getList()}
    </>
  );
}
export default ListGroup;

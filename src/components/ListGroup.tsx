import { useState } from "react";
interface Props {
  header: string;
  items: string[];
}
function ListGroup(props: Props) {
  function handleClick(index: number) {
    console.log(index + "-" + props.items[index]);
    setSelectedIndex(index);
  }
  const [selectedIndex, setSelectedIndex] = useState(-1);
  function getList() {
    if (props.items.length === 0) {
      return <p>No Items Returned</p>;
    } else {
      return (
        <ul className="list-group">
          {props.items.map((item, index) => (
            <li
              className={
                selectedIndex === index
                  ? "list-group-item active"
                  : "list-group-item"
              }
              key={item}
              onClick={() => handleClick(index)}
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
      <h1>{props.header}</h1>
      {getList()}
    </>
  );
}
export default ListGroup;

import { useState } from "react";

function ListGroup() {
  const items: string[] = ["Muhamad", "Bahroz", "Zheer", "Sami"];
  function handleClick(index: number) {
    console.log(index + "-" + items[index]);
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
      <h1>List</h1>
      {getList()}
    </>
  );
}
export default ListGroup;

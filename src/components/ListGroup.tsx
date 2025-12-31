function ListGroup() {
  const items: string[] = ["Muhamad", "Bahroz", "Zheer", "Sami"];

  function getList() {
    if (items.length === 0) {
      return <p>No Items Returned</p>;
    } else {
      return (
        <ul className="list-group">
          {items.map((item) => (
            <li className="list-group-item">{item}</li>
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

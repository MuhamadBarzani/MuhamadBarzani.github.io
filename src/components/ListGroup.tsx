function ListGroup() {
  const items = ["Muhamad", "Bahroz", "Zheer", "Sami"];
  return (
    <>
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item">{item}</li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;

import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  function handleSelectItem(item: string) {
    console.log(item);
  }
  const [error,setError] = useState("");

  return (
    <>
        <ListGroup
          header="Cities"
          items={items}
          onSelectItem={handleSelectItem}
        />
        {error && <Alert onClose={()=>setError("")} message={error}/>}
        <Button name="Muhamad" color="primary" onCallBack={()=>setError("Error happened")}/>
    </>
  );
}

export default App;

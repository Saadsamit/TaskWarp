import { useState } from "react";
import Container from "../components/Container";
import Task from "../components/Task";
const Dashboard = () => {
  const [isAdding, setIsAdding] = useState(false);
  return (
    <Container className={"pt-5 pb-10"}>
      <div className="text-end">
        <button onClick={() => setIsAdding(!isAdding)} className="btnStyle">{
            isAdding ? "Not Now"
           : "add task"
          }</button>
      </div>
      {isAdding ? <Task setIsAdding={setIsAdding} /> : null}
    </Container>
  );
};

export default Dashboard;

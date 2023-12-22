import { useState } from "react";
import Container from "../components/Container";
import Task from "../components/Task";
import TaskContainer from "../components/TaskContainer";
const Dashboard = () => {
  const [isAdding, setIsAdding] = useState(false);
  return (
    <Container className={"pt-5 pb-10"}>
      <div className="text-end">
        <button onClick={() => setIsAdding(!isAdding)} className="btnStyle">
          {isAdding ? "Not Now" : "add task"}
        </button>
      </div>
      <div className="pb-10">
        {isAdding ? <Task setIsAdding={setIsAdding} /> : null}
      </div>
      <TaskContainer />
    </Container>
  );
};

export default Dashboard;

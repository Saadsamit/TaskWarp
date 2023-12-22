import { useState } from "react";
import Container from "../components/Container";
import Task from "../components/Task";
const Dashboard = () => {
  const [isAdding, setIsAdding] = useState(false);
  return (
    <Container className={"pt-5 pb-10"}>
      <div className="text-end">
        <label className="btn btn-circle bg-white border-orange-500 text-orange-500 hover:text-white hover:bg-orange-500 swap swap-rotate">
          {/* this hidden checkbox controls the state */}
          <input onClick={() => setIsAdding(!isAdding)} type="checkbox" />

          <svg
            stroke="currentColor"
            fill="currentColor"
            width="32"
            height="32"
            viewBox="0 0 448 512"
            xmlns="http://www.w3.org/2000/svg"
            className="swap-off fill-current text-2xl text-center"
          >
            <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"></path>
          </svg>

          <svg
            className="swap-on fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
          </svg>
        </label>
      </div>
      {isAdding ? <Task setIsAdding={setIsAdding} /> : null}
    </Container>
  );
};

export default Dashboard;

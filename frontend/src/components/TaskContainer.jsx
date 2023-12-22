import GetTask from "../api/imageUploder/GetTask";
import Container from "./Container";
import Dustbin from "./DragContainer";
import TaskList from "./TaskList";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from 'react-dnd-html5-backend';
const TaskContainer = () => {
  const [data, isPending, refetch] = GetTask();

  if (isPending) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <span className="loading loading-infinity loading-lg"></span>
      </div>
    );
  }
  return (
    <Container>
      <DndProvider backend={HTML5Backend}>
        <div className="flex gap-5 flex-wrap justify-center pb-10">
          <Dustbin name={"todo"}/>
          <Dustbin name={"onGoing"}/>
          <Dustbin name={"completed"}/>
        </div>
        {
          data.length > 0 ? <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
          {data?.map((item) => (
            <TaskList key={item?._id} data={item} refetch={refetch} />
          ))}
        </div> : null
        }
      </DndProvider>
    </Container>
  );
};

export default TaskContainer;

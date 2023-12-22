import PropTypes from "prop-types";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { Link } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import toast from "react-hot-toast";
import DIV from "./Box";
const TaskList = ({ data,refetch }) => {
  const axios = useAxios()
  const { _id,task, description, deadline, priority, status } = data;
  const date = new Date(deadline).toLocaleDateString();
  const handleDelete = ()=>{
    axios.delete(`/delete-task/${_id}`).then(() => {
      toast.success("Task delete successfully")
      refetch();
    }).catch(()=>{
      toast.error("fail to detele Task")
    })
  }
  return (
    <DIV id={_id} refetch={refetch}>
      <div
      tabIndex={0}
      className="collapse collapse-arrow border border-orange-300 bg-orange-100"
    >
      <div className="collapse-title text-xl font-medium">
        <div className="flex flex-wrap justify-between items-center">
          <div>
            <h3>Title: {task}</h3>
            <p>deadline: {date}</p>
          </div>
          <div className="text-orange-500 text-2xl flex gap-2 flex-wrap">
            <Link to={`/edit/${_id}`}>
              <CiEdit />
            </Link>
            <button onClick={handleDelete}>
              <MdDelete />
            </button>
          </div>
        </div>
      </div>
      <div className="collapse-content">
        <div>
          <p className="badge bg-orange-500 text-white">{priority}</p>
          <p className="badge bg-orange-500 text-white">{status}</p>
        </div>
        <p>{description}</p>
      </div>
    </div>
    </DIV>
  );
};
TaskList.propTypes = {
  data: PropTypes.object.isRequired,
  refetch: PropTypes.func.isRequired
};
export default TaskList;

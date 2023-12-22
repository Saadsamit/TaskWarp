import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
import DatePicker from "react-datepicker";
import { useContext, useState } from "react";
import useAxios from "./../hooks/useAxios";
import toast from "react-hot-toast";
import { myAuthProvider } from "../provider/AuthProvider";
const Task = ({ setIsAdding }) => {
  const {user} = useContext(myAuthProvider)
  const axios = useAxios();
  const now = new Date();
  const [deadline, setDeadline] = useState(now);
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    const task = data.toDoTask;
    const description = data.toDoDis;
    const priority = data.priority;
    const userEmail = user?.email
    const taskAddDate = now;
    const status = "to-do";
    const obj = { task, description, taskAddDate,userEmail, deadline, priority, status };
    axios.post("/add-task", obj).then((res) => {
      console.log(res.data);
      toast.success("Task added successfully")
      reset();
      setIsAdding(false);
    }).catch(()=>{
      toast.error("fail to add Task")
    })
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-2xl shadow-xl sm:p-10 p-5 rounded-xl mx-auto flex flex-col gap-4 pt-10"
      >
        <input
          placeholder="Enter Your task"
          name="subject"
          className="inputStyle w-full"
          type="text"
          {...register("toDoTask", { required: true })}
        />
        <div className="flex sm:flex-row flex-col gap-4">
          <div className="sm:w-1/2" id="addTask">
            <DatePicker
              className="inputStyle w-full"
              selected={deadline}
              onChange={(date) => setDeadline(date)}
            />
          </div>
          <select
            className="inputStyle sm:w-1/2"
            {...register("priority", { required: true })}
          >
            <option disabled selected>
              select priority
            </option>
            <option>Low</option>
            <option>moderate</option>
            <option>high</option>
          </select>
        </div>
        <textarea
          placeholder="Enter Your task description"
          name="message"
          className="inputStyle pt-2 w-full min-h-[100px]"
          {...register("toDoDis", { required: true })}
        ></textarea>
        <div className="text-center">
          <input
            type="submit"
            className="btnStyle capitalize"
            value="send mail"
          />
        </div>
      </form>
    </div>
  );
};

export default Task;

Task.propTypes = {
  setIsAdding: PropTypes.func.isRequired,
};

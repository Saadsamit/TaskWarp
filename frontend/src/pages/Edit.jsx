import { useNavigate, useParams } from "react-router-dom";
import GetATask from "../api/imageUploder/GetATask";
import useAxios from "../hooks/useAxios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import DatePicker from "react-datepicker";

const Edit = () => {
  const { id } = useParams();
  const [data,refetch, isPending] = GetATask(id);
  const navigate = useNavigate()
  const axios = useAxios();
  const { register, handleSubmit, reset } = useForm();
  const [deadline, setDeadline] = useState(new Date());
  useEffect(() => {
    data?.deadline ? setDeadline(new Date(data?.deadline)) : null;
  }, [data?.deadline]);
  if (isPending) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <span className="loading loading-infinity loading-lg"></span>
      </div>
    );
  }
  const onSubmit = (data) => {
    const task = data.toDoTask;
    const description = data.toDoDis;
    const priority = data.priority;
    const obj = { task, description, deadline, priority };
    axios
      .put(`/update-a-todo/${id}`, obj)
      .then(() => {
        toast.success("Task edit successfully");
        reset();
        refetch()
        navigate("/dashboard")
      })
      .catch(() => {
        toast.error("fail to edit Task");
      });
  };
  return (
    <div className="py-10">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-2xl shadow-xl sm:p-10 p-5 rounded-xl mx-auto flex flex-col gap-4 pt-10"
      >
        <input
          placeholder="Enter Your task"
          name="subject"
          className="inputStyle w-full"
          type="text"
          required
          defaultValue={data?.task}
          {...register("toDoTask")}
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
            required
            defaultValue={data?.priority}
            {...register("priority")}
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
          required
          defaultValue={data?.description}
          {...register("toDoDis")}
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

export default Edit;

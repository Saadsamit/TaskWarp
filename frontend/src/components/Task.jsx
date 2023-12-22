import { useForm } from "react-hook-form";
import PropTypes from 'prop-types';

const Task = ({setIsAdding}) => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data)=>{
    const task = data.toDoTask
    const description = data.toDoDis
    const obj = {task,description}
    console.log(obj);
    reset()
    setIsAdding(false)
  }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-2xl shadow-xl sm:p-10 p-5 rounded-xl mx-auto flex flex-col gap-4 pt-10">
        <input
          placeholder="Enter Your task"
          name="subject"
          className="inputStyle w-full"
          type="text"
          {...register("toDoTask", { required: true })}
        />
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
  

import { useDrag } from 'react-dnd'
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import useAxios from '../hooks/useAxios';
import toast from 'react-hot-toast';
const DIV =({ children,id,refetch }) => {
    const axios = useAxios()
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'box',
    item: { children },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult()
      if (item && dropResult) {
        axios.put(`/updateStatus/${id}`,{status: dropResult.name}).then(() => {
            toast.success("status update successfully")
            refetch();
          }).catch(()=>{
            toast.error("fail to update status")
          })
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }))
  return (
    <div ref={drag} data-testid={id}>
      {children}
    </div>
  )
}

DIV.propTypes = {
    children: PropTypes.node.isRequired,
    id: PropTypes.string.isRequired,
  };
export default DIV
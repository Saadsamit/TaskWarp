import { useDrop } from 'react-dnd'

const Dustbin = ({name}) => {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: "box",
    drop: () => ({ name: name }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }))
  return (
    <div ref={drop} className='border-orange-500 border-2 rounded-lg p-2 inline-block' data-testid="dustbin">
      {name}
    </div>
  )
}
export default Dustbin
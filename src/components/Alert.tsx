
interface Props{
  message: string
  onClose:()=>void
}
const Alert = ({message,onClose}:Props) => {
  return (
    <div className="alert alert-warning alert-dismissible fade show" role="alert">
    {message}
    <button onClick={onClose} type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>
  )
}

export default Alert
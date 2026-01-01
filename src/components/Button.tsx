interface Props{
    name: string,
    color?: "primary" | "secondary" | "danger"
    dissmisable?: string
    onCallBack: () =>void
}
const Button = ({name, onCallBack, color}:Props) => {
  return (
    <button title={name} onClick={onCallBack} type="button" className={"btn btn-"+color}>Primary</button>
  )
}

export default Button
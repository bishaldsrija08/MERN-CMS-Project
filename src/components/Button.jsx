const Button = (props) => {
    const {title}=props //this is called object destructuring
    const {color}=props
  return (
    <div>
      <button style={{backgroundColor: color}}>{title}</button>
    </div>
  )
}

export default Button

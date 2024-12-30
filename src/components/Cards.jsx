import "./cards.css"
const Cards = (props) => {
    const {title, subTitle}=props
  return (
<div className="card">
        <h2 className="card-title">{title}</h2>
        <p className="card-paragraph">{subTitle}</p>
    </div>
  )
}
export default Cards
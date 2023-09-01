import './index.css'

const savedData = props => {
  const {eachItem, isActive} = props
  const {name, title, thumbnail} = eachItem
  const a = isActive && 'a'
  return (
    <div className="saveThumb">
      <img src={thumbnail} alt="thumbNail" className="sambillings" />
      <div>
        <p className={a}>{title}</p>
        <p className={a}>{name}</p>
      </div>
    </div>
  )
}
export default savedData

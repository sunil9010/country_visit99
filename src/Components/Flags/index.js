const Flags = props => {
  const {flagsList, RemoveVisit} = props
  const {imageUrl, name, id} = flagsList
  const isRemove = () => {
    RemoveVisit(id)
  }
  return (
    <li className="list">
      <div>
        <img src={imageUrl} className="img" alt=" thumbnail" />
        <div className="flags-name">
          <p className="pa">{name}</p>
          <button type="button" className="btn" onClick={isRemove}>
            Remove
          </button>
        </div>
      </div>
    </li>
  )
}
export default Flags

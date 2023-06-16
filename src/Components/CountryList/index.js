import './index.css'

const CountryList = props => {
  const {countyList, clicked} = props
  const {name, isVisited, id} = countyList

  const countryVisited = () => {
    clicked(id)
  }
  return (
    <li className="list">
      <p className="name">{name}</p>
      <div>
        {isVisited ? (
          <p className="button-saved">Visited</p>
        ) : (
          <button type="button" className="button" onClick={countryVisited}>
            Visit
          </button>
        )}
      </div>
    </li>
  )
}
export default CountryList

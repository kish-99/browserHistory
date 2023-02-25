import './index.css'

const History = props => {
  const {data, removeHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = data

  const remove = () => {
    removeHistory(id)
  }

  return (
    <li className="li">
      <div className="k">
        <p>{timeAccessed}</p>
        <img src={logoUrl} alt="domain logo" className="img" />
        <p className="h">{title}</p>
        <p>{domainUrl}</p>
      </div>
      <div className="end">
        <button type="button" onClick={remove}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default History

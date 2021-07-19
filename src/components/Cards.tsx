import React from 'react'

interface IProps {
  contents: {
    id: number,
    name: string,
    cover: string,
    languages: string[],
    status: string,
    createdAt: Date,
    updatedAt: Date,
  }[]
}

const Cards: React.FC<IProps> = ({ contents }) => {

  const renderCards = (): JSX.Element[] => {
    return contents.map((content) => {
      return (

        <li className="card" key={content.id}>
          <div className="card-header">
            <img className="card-img" src={content.cover} alt="Cover photo"/>
          </div>
          <div className="card-info">
        {/*Add status*/}
            <p className="card-name">{content.name}</p>
            <p className="card-status">{content.status === 'error' && 'Error in processing'}</p>
            <p className="card-status">{content.status === 'transcribing' && 'Transcribing'}</p>
            <p className="card-status">{content.status === 'ready' && `Edited ${new Date().getMonth() - new Date(content.updatedAt).getMonth()} months ago`}</p>
          </div>
        </li>
        )
    })
  }
  return(
    <ul className="cards">
      {renderCards()}
    </ul>
    )
}

export default Cards

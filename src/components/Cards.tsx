import React from 'react'
import Button from './Button'


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
          <div className={content.status === 'error' ? 'error' : 'ready'}>

            <img className="card-img" src={content.cover} alt="Cover photo"/>
            <div className="hover-positon">
              <p className={!content.status === 'error' ? 'transcribing-text transcribing-text--active' : 'transcribing'}>Transcribing subtitles</p>
              <p className={content.status === 'error' ? 'error-text error-text--active' : 'error'}>An error occured while processing you file. Delete file to try again, and report issue if the problem persists.</p>
              <div className="btn-container">
                <Button type='btn btn--delete' text="Delete"/>
                <Button type='btn btn--report' text="Report"/>
              </div>
            </div>
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

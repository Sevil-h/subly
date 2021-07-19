import React from 'react'
import { useState } from 'react';

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

  const renderList = (): JSX.Element[] => {
    return contents.map((content) => {
      return (

        <li className="Card" key={content.id}>
          <div className="Card-header">
            <img className="Card-img" src={content.cover} alt="Cover image"/>
            <h2>{content.name}</h2>
          </div>

          <p>{content.status === 'error' && 'Error in processing'}</p>
          <p>{content.status === 'transcribing' && 'Transcribing'}</p>
          <p>{content.status === 'ready' && `Edited ${new Date().getMonth() - new Date(content.updatedAt).getMonth()} months ago`}</p>
          <p>{}</p>
        </li>
        )
    })
  }
  return(
    <ul>
      {renderList()}
    </ul>
    )
}

export default Cards

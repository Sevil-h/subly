import React from 'react'
import { useState } from 'react';

interface IProps {
  contents: {
    id: number,
    name: string,
    cover: string,
    languages: string[],
    status: string,
    createdAt: string;
    updatedAt: string;
  }[]
}

const Cards: React.FC<IProps> = ({ contents }) => {

  const renderList = (): JSX.Element[] => {
    return contents.map((content) => {
      return (
        <li className="Cards" key={content.id}>
          <div className="List-header">
            <img className="List-img" src={content.cover} alt="Cover image"/>
            <h2>{content.name}</h2>
          </div>
          <p>{content.status}</p>
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

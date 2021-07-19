import React from 'react'
import  './button.css'

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

// const Button: React.FC<IProps> = ({ contents }) => {
//     const renderButtons = (): JSX.Element[] => {

//     return (
//     contents.forEach((content) => {
//       if(content.status === 'ready') {
//         <Button type='btn btn--edit ' text="Edit"/>
//       } else if (content.status === 'error') {
//         <Button type='btn btn--delete' text="Delete"/>
//       }
//     })
//     )
//   }
//     return(
//       renderButtons()
//     )
// }

const Button = ({ type, text }) => {
  return (
      <button className={type}>{text}</button>
  )
}

export default Button

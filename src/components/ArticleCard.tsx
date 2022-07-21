import React from 'react'
import { IArticle } from '../models/Article'

type Props = {
    article: IArticle
}

export const ArticleCard = ({article}: Props) => {
  return (
    <div className='article'>
        <div className="title">{article.title}</div>
        <div className="body">{article.body}</div>
    </div>
  )
}

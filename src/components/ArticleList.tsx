import React from 'react'
import { IArticle } from '../models/Article'
import "../styles/ArticleList.scss"
import { ArticleCard } from './ArticleCard';
import { Link } from "react-router-dom"

type Props = {
    articles: IArticle[]
}

export const ArticleList = ({ articles }: Props) => {
  return (
    <div className='article-list'>
        {
            articles.map(article => (
                <Link to={`/article/${article._id}`} key={article._id}>
                    <ArticleCard key={article._id} article={article}/>
                </Link>
            ))
        }
    </div>
  )
}

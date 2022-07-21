import React, { useEffect, useState } from 'react'
import { axiosInstance } from '../axios';
import { IArticle } from '../models/Article';
import { ENDPOINTS } from '../config/config';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import "../styles/Detail.scss"

export const Detail = () => {

  const navigate = useNavigate()
  const location = useLocation()

  const {id} = useParams()
  const [article, setArticle] = useState<IArticle>({ _id: "", title: "", body: "", timestamp: "" })

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axiosInstance.get(`${ENDPOINTS.ARTICLE}/${id}`);
        const fetchData = await response.data as IArticle;
        setArticle({...fetchData, timestamp: formattedDate(fetchData.timestamp)});
      } catch (e) {
        navigate("/error", {state: {message: `記事取得時にエラーが発生しました: ${e}`, path: location.pathname}})
      }
    }

    fetchArticles()
    
  }, [])

  const formattedDate = (dateString: string): string => {
    const fullDate = new Date(dateString)

    const year = fullDate.getFullYear()
    const month = fullDate.getMonth() + 1;
    const date = fullDate.getDate();
    const hours = fullDate.getHours();
    const minutes = fullDate.getMinutes();
    const seconds = fullDate.getSeconds();

    return `${year}年${month}月${date}日 ${hours}:${minutes}:${seconds}`;
  }

  return (
    <div className='article-detail'>
      <div className="header">
        <h1 className="title">{article.title}</h1>
        <div className="date">{ article.timestamp }</div>
      </div>
      <div className="body">{article.body}</div>
    </div>
  )
}

import React, { useEffect, useState } from 'react'
import { axiosInstance } from '../axios';
import { IArticle } from '../models/Article';
import { ENDPOINTS } from '../config/config';
import { ArticleList } from '../components/ArticleList';
import { Link, useNavigate, useLocation } from 'react-router-dom';

export const Top = () => {

  const navigate = useNavigate()
  const location = useLocation()

  const [articles, setArticles] = useState<IArticle[]>([])

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const fetchData = await axiosInstance.get(ENDPOINTS.ARTICLE)
        setArticles(fetchData.data)
      } catch (e) {
        navigate("/error", {state: {message: `記事一覧取得時にエラーが発生しました: ${e}`, path: location.pathname}})
      }
    }
    fetchArticles()
  }, [])

  return (
    <div className="index-page">
      <div className="header">
        <h1 className="title">投稿記事</h1>
      </div>
      <div className="content">
        <Link to={"/post"}>
          投稿する
        </Link>
        <ArticleList articles={articles} />
      </div>
    </div>
  );
}

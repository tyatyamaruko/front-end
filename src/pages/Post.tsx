import React, { useState } from 'react'
import "../styles/PostForm.scss"
import { useLocation, useNavigate } from 'react-router-dom'
import { IArticlePayload } from '../models/Article';
import { ENDPOINTS } from '../config/config';
import { axiosInstance } from '../axios';

export const Post = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!title || !body) {
      return
    }

    const payload: IArticlePayload = {
      title: title, 
      body: body,
      timestamp: new Date()
    }

    try {
      await axiosInstance.post(ENDPOINTS.ARTICLE, payload)
      navigate("/")
    } catch(e){
      navigate("/error", {state: {message: `記事一覧取得時にエラーが発生しました: ${e}`, path: location.pathname}})
    }
  }

  const backToHome = () => {
    navigate("/")
  }

  return (
    <div>
      <form className="article-form" onSubmit={e => submit(e)}>
        <input className='input -title' type="text" placeholder='title' value={title} onChange={e => setTitle(e.target.value)}/>
        <textarea className='input -body' value={ body } onChange={e => setBody(e.target.value)}></textarea>
        <button className='button' onClick={backToHome}>Cancel</button>
        <button className='button'>Submit</button>
      </form>
    </div>
  )
}

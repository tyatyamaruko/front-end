import React from 'react'
import { useLocation, Link } from 'react-router-dom';
import "../styles/Error.scss"

type Props = {
    message: string
    path: string
}

export const Error = () => {

    const location = useLocation();
    const { message, path }: Props = location.state as Props

  return (
    <div className="error-page">
      <h1 className="title">{message}</h1>
      <div className="info">発生ページ: {path}</div>
      <Link className="link" to={"/"}>
        トップページへ戻る
      </Link>
    </div>
  );
}

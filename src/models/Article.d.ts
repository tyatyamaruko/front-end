/** 投稿のペイロード */
export interface IArticlePayload {
    title: string;
    body: string;
    timestamp: Date;
  }
  
  /** 投稿内容 */
export interface IArticle {
  _id: string;
  title: string;
  body: string;
  timestamp: string;
}
  
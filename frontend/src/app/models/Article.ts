export interface Article {
  _id?: string,
  content: string,
  date: Date,
  description: string,
  authorId: string,
  image: string,
  title: string,
  tags: string[]
}

export interface Category {
  categoryPk: number;
  categoryCode: string;
  categoryName: string;
}

export interface Post {
  categoryPk: number;
  categoryName: string;
  pk: number;
  title: string;
  content: string;
  viewCount: number;
  likeCount: number;
  commentCount: number;
  imageUrl: string | null;
  writtenAt: string;
  writerNickName: string;
  writerProfileUrl: string;
}

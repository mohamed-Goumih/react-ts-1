import React from 'react';
import ArticleItem from './ArticleItem';

interface Article {
  id: number;
  title: string;
  summary: string;
  display: string;
}

interface ArticleListProps {
  articles: Article[];
  onToggleArticle: (id: number) => void;
  onRemoveArticle: (id: number) => void;
}

const ArticleList: React.FC<ArticleListProps> = ({ articles, onToggleArticle, onRemoveArticle }) => {
  return (
    <ul>
      {articles.map((article) => (
        <ArticleItem
          key={article.id}
          id={article.id}
          title={article.title}
          summary={article.summary}
          display={article.display}
          onToggle={onToggleArticle}
          onRemove={onRemoveArticle}
        />
      ))}
    </ul>
  );
};

export default ArticleList;

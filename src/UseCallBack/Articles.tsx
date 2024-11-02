import React from 'react';
import ArticleList from './ArticleList';

//create type article
type Article = {
    id: number;
    title: string;
};

const articles: Article[] = [
  { id: 1, title: "Introduction à React" },
  { id: 2, title: "Guide complet sur useCallback" },
  { id: 3, title: "Optimisation des performances avec React" },
  { id: 4, title: "Les Hooks avancés de React" }
];

const Articles: React.FC = () => {
  return (
    <div>
      <h1>Liste des Articles</h1>
      <ArticleList articles={articles} />
    </div>
  );
};

export default Articles;

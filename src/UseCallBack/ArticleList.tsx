import React, { useState, useCallback } from 'react';

interface Article {
  id: number;
  title: string;
}

interface ArticleListProps {
  articles: Article[];
}

const ArticleList: React.FC<ArticleListProps> = ({ articles }) => {
  const [searchTerm, setSearchTerm] = useState("");

  // Utilisation de useCallback pour mémoriser la fonction de filtrage
  const filteredArticles = useCallback(() => {
    console.log("Filtrage des articles...");
    return articles.filter(article => 
      article.title.toLowerCase()
      .includes(searchTerm.toLowerCase())
    );
  }, [articles, searchTerm]); // dépendances : 'articles' et 'searchTerm'

  return (
    <div>
      <input
        type="text"
        placeholder="Rechercher un article"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredArticles().map(article => (
          <li key={article.id}>{article.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ArticleList;

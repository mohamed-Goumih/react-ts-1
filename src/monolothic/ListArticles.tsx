import React, { useState, useCallback, ChangeEvent } from 'react';
import ArticleForm from './ArticleForm';
import ArticleList from './ArticleList';

interface Article {
  id: number;
  title: string;
  summary: string;
  display: string;
}

const ListArticles: React.FC = () => {
  const idGenerator = (function* () {
    let i = 0;
    while (true) yield i++;
  })();

  const [articles, setArticles] = useState<Article[]>([
    { id: idGenerator.next().value, title: "Article 1", summary: "Résumé de l'article 1", display: "none" },
    { id: idGenerator.next().value, title: "Article 2", summary: "Résumé de l'article 2", display: "none" },
  ]);
  const [title, setTitle] = useState<string>("");
  const [summary, setSummary] = useState<string>("");

  // Mettre à jour le titre de l'article
  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => setTitle(event.target.value);

  // Mettre à jour le résumé de l'article
  const onChangeSummary = (event: ChangeEvent<HTMLInputElement>) => setSummary(event.target.value);

  // Ajouter un nouvel article
  const onAddArticle = () => {
    const newArticle: Article = {
      id: idGenerator.next().value,
      title,
      summary,
      display: "none",
    };
    setArticles([...articles, newArticle]);
    setTitle("");
    setSummary("");
  };

  // Basculer l'affichage du résumé
  const onToggleArticle = useCallback((id: number) => {
    setArticles((prevArticles) =>
      prevArticles.map((article) =>
        article.id === id ? { ...article, display: article.display === "none" ? "" : "none" } : article
      )
    );
  }, []);

  // Supprimer un article
  const onRemoveArticle = (id: number) => {
    setArticles((prevArticles) => prevArticles.filter((article) => article.id !== id));
  };

  return (
    <section>
      <ArticleForm
        title={title}
        summary={summary}
        onTitleChange={onChangeTitle}
        onSummaryChange={onChangeSummary}
        onAddArticle={onAddArticle}
      />
      <ArticleList
        articles={articles}
        onToggleArticle={onToggleArticle}
        onRemoveArticle={onRemoveArticle}
      />
    </section>
  );
};

export default ListArticles;

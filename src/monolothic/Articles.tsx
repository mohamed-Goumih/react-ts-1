import * as React from 'react';
import { useState, useCallback } from 'react';

// Définition du type pour un article
interface Article {
  id: number;
  title: string;
  summary: string;
  display: string;
}

// Composant principal de la liste des articles
const ListArticles: React.FC = () => {
  // Générateur d'identifiants uniques pour chaque article
  const idGenerator = (function* () {
    let i = 0;
    while (true) yield i++;
  })();

  // États locaux pour les articles, le titre, et le résumé
  const [articles, setArticles] = useState<Article[]>([
    { id: idGenerator.next().value, title: "Article 1", summary: "Résumé de l'article 1", display: "none" },
    { id: idGenerator.next().value, title: "Article 2", summary: "Résumé de l'article 2", display: "none" },
  ]);
  const [title, setTitle] = useState<string>("");
  const [summary, setSummary] = useState<string>("");

  // Fonction pour mettre à jour le titre de l'article
  const onChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  // Fonction pour mettre à jour le résumé de l'article
  const onChangeSummary = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSummary(event.target.value);
  };

  // Fonction pour ajouter un nouvel article
  const onClickAdd = () => {
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

  // Fonction pour basculer l'affichage du résumé d'un article
  const onClickToggle = useCallback((id: number) => {
    setArticles((prevArticles) =>
      prevArticles.map((article) =>
        article.id === id ? { ...article, display: article.display === "none" ? "" : "none" } : article
      )
    );
  }, []);

  // Fonction pour supprimer un article
  const onClickRemove = (id: number) => {
    setArticles((prevArticles) => prevArticles.filter((article) => article.id !== id));
  };

  return (
    <section>
      <header>
        <h1>Articles</h1>
        <input
          placeholder="Titre"
          value={title}
          onChange={onChangeTitle}
        />
        <input
          placeholder="Résumé"
          value={summary}
          onChange={onChangeSummary}
        />
        <button onClick={onClickAdd}>Ajouter</button>
      </header>

      <article>
        <ul>
          {articles.map((article) => (
            <li key={article.id}>
              <a
                href={`#${article.id}`}
                title="Basculer l'affichage du résumé"
                onClick={() => onClickToggle(article.id)}
              >
                {article.title}
              </a>
              &nbsp;
              <button
                title="Supprimer"
                onClick={() => onClickRemove(article.id)}
              >
                &#10007;
              </button>
              <p style={{ display: article.display }}>{article.summary}</p>
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
};

export default ListArticles;

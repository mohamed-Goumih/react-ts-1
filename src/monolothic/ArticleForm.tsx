import React, { ChangeEvent } from 'react';

interface ArticleFormProps {
  title: string;
  summary: string;
  onTitleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onSummaryChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onAddArticle: () => void;
}

const ArticleForm: React.FC<ArticleFormProps> = ({ title, summary, onTitleChange, onSummaryChange, onAddArticle }) => {
  return (
    <header>
      <h1>Articles</h1>
      <input placeholder="Titre" value={title} onChange={onTitleChange} />
      <input placeholder="Résumé" value={summary} onChange={onSummaryChange} />
      <button onClick={onAddArticle}>Ajouter</button>
    </header>
  );
};

export default ArticleForm;

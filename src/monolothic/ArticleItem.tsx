import React from 'react';

interface ArticleItemProps {
  id: number;
  title: string;
  summary: string;
  display: string;
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
}

const ArticleItem: React.FC<ArticleItemProps> = ({ id, title, summary, display, onToggle, onRemove }) => {
  return (
    <li>
      <a href={`#${id}`} title="Basculer l'affichage du résumé" onClick={() => onToggle(id)}>
        {title}
      </a>
      &nbsp;
      <button title="Supprimer" onClick={() => onRemove(id)}>
        &#10007;
      </button>
      <p style={{ display }}>{summary}</p>
    </li>
  );
};

export default ArticleItem;

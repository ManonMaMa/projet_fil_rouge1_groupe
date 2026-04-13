import React from "react";
import "./facturesEmises.css";

type FacturesEmisesProps = {
  count: number;
  amount: string;
};

const Icon = () => (
  <svg
    className="factures-card__icon"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M6 2h9l5 5v15a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" />
    <path d="M14 2v6h6" />
    <path d="M8 13h8M8 17h8M8 9h2" />
  </svg>
);

const FacturesEmises: React.FC<FacturesEmisesProps> = ({
  count,
  amount,
}) => {
  return (
    <div className="factures-card">
        <div className="factures-card__top">
            <Icon />
            <span className="factures-card__label">Factures émises</span>
            <span className="factures-card__count">{count}</span>
        </div>

        <div className="factures-card__bottom">
            <div className="factures-card__amount">{amount}</div>
        </div>
    </div>
  );
};

export default FacturesEmises;
import React from "react";
import "./card.style.scss"

type CardProps = {
    img: {
        src: string,
        alt: string
    },
    title: string,
    children: React.ReactNode
}

export function Card({ img, title, children}: CardProps) {
  return (
    <article data-card>
      <img data-card-img src={img.src} alt={img.alt} />
      <h2>{title}</h2>
      {children}
    </article>
  );
}

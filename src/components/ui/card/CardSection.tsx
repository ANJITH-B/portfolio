"use client";
import React from "react";
import Card from "./Card";
import { TCardItem } from "@/lib/types";

interface CardSectionProps {
  items: TCardItem[];
  onCardClick?: (card: TCardItem) => void;
}

const CardSection = ({ items, onCardClick }: CardSectionProps) => {
  return (
    <>
      {items.map((item) => (
        <Card
          className="w-full"
          key={item.id}
          tittle={item.title}
          image={Array.isArray(item.image) ? item.image[0] ?? "" : item.image ?? ""}
          description={item.description}
          url={item.url}
          onClick={() => onCardClick?.(item)}
        />
      ))}
    </>
  );
};

export default CardSection;

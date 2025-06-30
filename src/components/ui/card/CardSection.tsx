"use client";
import React from "react";
import Card from "./Card";
import { TCardItem } from "@/lib/types";

interface CardSectionProps {
  title: string;
  items: TCardItem[];
  onCardClick?: (card: TCardItem) => void;
}

const CardSection = ({ title, items, onCardClick }: CardSectionProps) => {
  return (
    <div>
      <p className="text-xl font-bold  uppercase font-poppins">{title}</p>
      <div className="pt-8 flex flex-row gap-5">
        {items.map((item) => (
          <Card
            className="w-1/4"
            key={item.id}
            tittle={item.title}
            image={item.image[0]}
            description={item.description}
            onClick={() => onCardClick?.(item)}
          />
        ))}
      </div>
    </div>
  );
};

export default CardSection;

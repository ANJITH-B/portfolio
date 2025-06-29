'use client'
import React from 'react'
import Card from './Card'

interface CardSectionProps {
  title: string;
  items: {
    id: number;
    image: any;
    title: string;
    description: string;
  }[];
  onCardClick ? : (card: any) => void ;
}

const CardSection = ({title , items , onCardClick}: CardSectionProps) => {
  return (
    <div>
        <p className="text-xl font-bold  uppercase font-poppins">{title}</p>
        <div className="pt-8 flex flex-row gap-5">
          {items.map((item ) => (
            <Card
              className="w-1/4"
              key={item.id}
              tittle={item.title}
              image={Array.isArray(item.image) ? item.image[1] : item.image}
              description={item.description}
              onClick={() => onCardClick?.(item)}
            />
          ))}
        </div>
    </div>
  )
}

export default CardSection
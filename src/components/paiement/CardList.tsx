import { useState, useEffect } from 'react'
import { BankCard } from '../../types/cardTypes'
import { CardService } from '../../services.tsx/cardService'

function  CardList() {
  const [cards, setCards] = useState<BankCard[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const fetchCards = async () => {
    try {
      setIsLoading(true)
      const data = await CardService.getAllCards()
      setCards(data)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchCards()
  }, [])

  return (
    <div>
      {isLoading ? (
        <p>Chargement...</p>
      ) : (
        <ul>
          {cards.map(card => (
            <li key={card.id}>
              {card.brand} - **** **** **** {card.last_four_digits}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
export default CardList
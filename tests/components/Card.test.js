import { render, screen } from '@testing-library/vue'
import Card from '@/components/Card.vue'  

describe('Card.vue', () => {
  it('affiche la liste des animaux', () => {
    const animals = [
      { id: 1, name: 'Rex', description: 'Chien joueur, adore les promenades et les friandises.' },
      { id: 2, name: 'Miaou', description: 'Chat câlin, aime dormir au soleil.' },
    ]

    render(Card, { props: { animals } })

    expect(screen.getByText('Rex')).toBeTruthy()
    expect(screen.getByText('Chien joueur, adore les promenades et les friandises.')).toBeTruthy()

    expect(screen.getByText('Miaou')).toBeTruthy()
    expect(screen.getByText('Chat câlin, aime dormir au soleil. ')).toBeTruthy()
  })
})

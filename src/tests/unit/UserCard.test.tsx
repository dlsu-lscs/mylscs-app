import { render, screen } from '@testing-library/react'
import UserCard from '@/features/userCard/UserCard'
import { User } from '../../types/user'
import '@testing-library/jest-dom'

const mockUser: User = {
  name: 'Sean Denzel Robenta',
  email: 'sean_robenta@dlsu.edu.ph',
  idNum: '123',
  position: 'Vice President',
  committee: 'Research and Development',
}

describe('UserCard', () => {
  it('renders complete user data', () => {
    render(<UserCard {...mockUser} />)

    expect(screen.getByText('Sean Denzel Robenta')).toBeInTheDocument()
    const elements = screen.getAllByText('123')
    expect(elements[0]).toBeInTheDocument() // for the first occurrence
    expect(screen.getByText('Vice President')).toBeInTheDocument()
    expect(screen.getByText('Research and Development')).toBeInTheDocument()
    expect(screen.getByText('sean_robenta@dlsu.edu.ph')).toBeInTheDocument()
  })

  it('renders fallback values if props are missing', () => {
    render((<UserCard />) as any) // test fallback rendering

    expect(screen.getByText('Lorem Ipsum Name')).toBeInTheDocument()
    expect(screen.getAllByText('123').length).toBeGreaterThan(0)
    expect(screen.getByText('Vice President')).toBeInTheDocument()
    expect(screen.getByText('Research and Development')).toBeInTheDocument()
    expect(screen.getByText('email_email@dlsu.edu.ph')).toBeInTheDocument()
  })
})

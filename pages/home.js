import { useSession } from 'next-auth/react'
import NewTweet from 'components/NewTweet'

export default function Home() {
  const { data: session, status } = useSession()

  if (status === 'loading') {
    return <p>...</p>
  }

  return (
    <div>
      {session ? <NewTweet /> : <p>You are not logged in 😞</p>}
    </div>
  )
}
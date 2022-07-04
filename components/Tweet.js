import timeago from 'lib/timeago'

export default function Tweet({ tweet }) {
  return (
    <p>
      {timeago.format(new Date(tweet.createdAt))}{' '}
      {tweet.author.name}{' '}
      {tweet.content}
    </p>
  )
}
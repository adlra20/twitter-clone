export const getTweets = async (prisma) => {
  return await prisma.tweet.findMany({
    where: {},
    orderBy: [
      {
        id: 'desc'
      }
    ],
    include: {
      author: true,
    },
  })
}

export const getUserTweets = async (name, prisma) => {
  const tweets = await prisma.tweet.findMany({
    where: {
      author: {
        name: name,
      },
    },
    orderBy: [
      {
        id: 'desc',
      },
    ],
    include: {
      author: true,
    },
  })

  return tweets
}
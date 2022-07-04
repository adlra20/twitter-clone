export const getTweets = async (prisma, take) => {
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
    take,
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

export const getTweet = async (id, prisma) => {
  const tweet = await prisma.tweet.findUnique({
    where: {
      id: parseInt(id),
    },
    include: {
      author: true,
    },
  })

  return tweet
}
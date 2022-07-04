export const getTweets = async (prisma, take) => {
  return await prisma.tweet.findMany({
    where: {
      parent: null, // Prevent replies in the homepage
    },
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

export const getReplies = async (id, prisma) => {
  const tweets = await prisma.tweet.findMany({
    where: {
      parent: parseInt(id),
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

export const getUserTweets = async (name, prisma) => {
  const tweets = await prisma.tweet.findMany({
    where: {
      author: {
        name: name,
      },
      parent: null, // Don't show the replies in the profile 
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
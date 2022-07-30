const Reddit = {
  fetchPosts: (type, querry) => {
    return fetch(`https://www.reddit.com/${type}.json`, {
      method: 'GET',
      mode: 'cors',
    })
  },
}

export default Reddit;
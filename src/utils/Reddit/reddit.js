const Reddit = {
  fetchPosts: (type) => {
    const url = `https://www.reddit.com/${type}.json`;
    return fetch(url, {
      method: 'GET',
      mode: 'cors',
    })
  },
  fetchMorePosts: (type, query) => {
    const url = `https://www.reddit.com/${type}.json?after=${query}`;
    return fetch(url, {
      method: 'GET',
      mode: 'cors',
    })
  }
}

export default Reddit;
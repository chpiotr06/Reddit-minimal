export const normalizePostData = (data) => {
  const normalized = {};
  normalized.after = data.after;
  normalized.posts = data.children.map(post => {
    const { title, ups, total_awards_received, created, author, url, is_video, id } = post.data;
    return {
      title,
      ups,
      total_awards_received,
      created,
      author,
      url,
      is_video,
      id
    }
  });
  return normalized;
}
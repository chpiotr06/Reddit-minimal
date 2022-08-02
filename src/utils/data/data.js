export const normalizePostData = (data) => {
  const normalized = {};
  normalized.after = data.after;
  normalized.posts = data.children.map(post => {
    const { title, ups, total_awards_received, subreddit, author, url, is_video, id, selftext_html, permalink, domain, over_18, media} = post.data;
    let { is_reddit_media_domain } = post.data;
    let isImage, hasMedia = false;

    if(domain.includes('self.')){
      is_reddit_media_domain = true;
    }
    if(url.includes('.jpg') || url.includes('.gif') || url.includes('.png')){
      isImage = true;
    }
    if(media || isImage || is_video){
      hasMedia = true;
    } 
    return {
      title,
      ups,
      total_awards_received,
      subreddit,
      author,
      url,
      is_video,
      id,
      selftext: selftext_html,
      permalink,
      isRedditMediaDomain: is_reddit_media_domain,
      domain,
      over_18,
      mediaObject: media,
      hasMedia,
      isImage
    }
  });
  return normalized;
}

export const htmlDecode = (input) => {
  const doc = new DOMParser().parseFromString(input, "text/html");
  return doc.documentElement.textContent;
}
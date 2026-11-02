import { getCollection, type CollectionEntry } from 'astro:content';

export async function getPublishedPosts() {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export async function getSeries() {
  const posts = await getPublishedPosts();
  const groups = new Map<string, typeof posts>();
  for (const post of posts) {
    if (!post.data.series) continue;
    const group = groups.get(post.data.series) ?? [];
    group.push(post);
    groups.set(post.data.series, group);
  }
  return [...groups.entries()]
    .map(([name, entries]) => ({
      name,
      posts: entries.sort((a, b) => a.data.date.valueOf() - b.data.date.valueOf() || a.data.title.localeCompare(b.data.title)),
    }))
    .sort((a, b) => b.posts[b.posts.length - 1].data.date.valueOf() - a.posts[a.posts.length - 1].data.date.valueOf() || a.name.localeCompare(b.name));
}

export function formatDate(date: Date) {
  return new Intl.DateTimeFormat('ko-KR', {
    year: 'numeric', month: 'short', day: 'numeric', timeZone: 'UTC',
  }).format(date);
}

export function postUrl(post: CollectionEntry<'blog'>) {
  return `/posts/${post.id}/`;
}

import getReadingTime from 'reading-time';
import {getCollection} from 'astro:content';

const normalizePost = async post => {
	const {id, body, data, slug} = post;
	const {Content} = await post.render();

	return {
		...data,
		id,
		slug,
		url: data.redirectUrl ?? `/blog/${slug}`,
		isRedirect: data.redirectUrl !== undefined,
		readingTime: Math.ceil(getReadingTime(body).minutes),
		Content,
	};
};

const load = async function ({includeUnlisted = false} = {}) {
	const posts = await getCollection('blog', app => !app.data.draft);

	const normalizedPosts = await Promise.all(
		posts.map(async post => normalizePost(post)),
	);

	return normalizedPosts
		.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate))
		.filter(app => includeUnlisted || !app.isUnlisted);
};

let cachedPosts;

export const fetchPosts = async () => {
	cachedPosts ??= load();
	return cachedPosts;
};

export const findPostsByIds = async ids => {
	if (!Array.isArray(ids)) {
		return [];
	}

	const posts = await fetchPosts();

	// eslint-disable-next-line unicorn/no-array-reduce
	return ids.reduce((r, id) => {
		posts.some(post => id === post.id && r.push(post));

		return r;
	}, []);
};

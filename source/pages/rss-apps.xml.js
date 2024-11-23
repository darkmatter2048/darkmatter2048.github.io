import rss from '@astrojs/rss';
import {fetchApps} from '~/utils/apps.js';

export const GET = async context => {
	let items = await fetchApps();

	items = items
		.map(item => ({
			link: item.url,
			title: item.title,
			pubDate: item.pubDate,
			description: item.subtitle,
		}));

	return rss({
		title: 'DaYe — New Apps',
		description: 'New apps by DaYe',
		site: context.site,
		items,
		trailingSlash: false,
	});
};

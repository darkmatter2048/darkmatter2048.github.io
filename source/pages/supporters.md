---
layout: ~/layouts/MarkdownLayout.astro
title: Supporters
---

<style is:inline>
.reward-price {
	font-size: 14px;
	position: relative;
	bottom: 2px;
	left: 2px;
	letter-spacing: 0;
}

#thanks-gif {
	margin-top: 30px;
	margin-left: 20px;
	border-radius: 50%;
}

.sponsor {
	box-sizing: border-box;
	display: inline-block;
	vertical-align: middle;
	padding: 20px 0;
	margin-right: 40px;
}

.sponsor:last-of-type {
	margin-right: 0;
}

.sponsor img {
	padding: 0;
	margin: 0;
	box-shadow: none;
}

@media (prefers-color-scheme: dark) {
	.sponsor {
		background-color: #fff;
		border-radius: 5px;
		margin: 20px 0;
		padding: 20px;
		position: unset !important;
	}
}

.silver-sponsor .sponsor {
	display: block;
}

/* Fix the Twitter widget width on mobile */
twitterwidget {
	width: unset !important;
}
</style>

<img id="thanks-gif" src="https://user-images.githubusercontent.com/170270/34912417-66acc388-f8e1-11e7-8350-8e7a321ef97f.gif" width="130" align="right" class="hidden sm:block">

# Thanks! <span class="pl-2">🙌</span>

我真的很感谢所有支持我在[GitHub](https://github.com/darkmatter2048)上的开源工作的优秀人士和公司。 .

<!-- ## <span>🦄🌈</span> Sponsor <span class="reward-price">[$1500/month](https://github.com/sponsors/sindresorhus)</span>

None -->

<!-- ## <span>🦄</span> Sponsor <span class="reward-price not-prose">[$1000/month](https://www.patreon.com/bePatron?c=95723&rid=1917470)</span> -->

<a href="https://www.qiaoxh.com/?from=dyblog.online" class="sponsor" rel="nofollow" style="position:relative;left:-3px">
	<img src="/assets/thanks/logo.png" width="310" alt="GitHub">
</a>
<br>
<a href="https://www.devpole.com/?from=dyblog.online" class="sponsor" rel="nofollow" style="position:relative;left:-30px">
	<img src="/assets/thanks/poster-logo.png" width="380" alt="WorkOS">
</a>
<br>




## 赞助者 <span class="reward-price not-prose">

我永远感谢这些以前支持我的人和公司

- [DevPole极数边缘云](https://www.devpole.com/?from=dyblog.online)
- [乔星欢](https://www.qiaoxh.com/?from=dyblog.online)

## 成为一名赞助者

[支持我的开源工作 🙌](donate)
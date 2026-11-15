---
layout: ~/layouts/MarkdownLayout.astro
title: 感谢你对开源的支持！
---

<style>
.seko-offer {
	display: grid;
	grid-template-columns: 72px minmax(0, 1fr);
	gap: 1.25rem;
	margin: 2rem 0;
	padding: 1.5rem;
	border: 1px solid #e7e9ef;
	border-left: 4px solid #6955d8;
	border-radius: 8px;
	background: #fff;
	box-shadow: 0 2px 8px rgb(20 24 40 / 8%);
}

.seko-offer__logo {
	width: 72px;
	height: 72px;
	border: 1px solid #e7e9ef;
	border-radius: 8px;
}

.seko-offer__content {
	min-width: 0;
}

.seko-offer__title {
	margin: 0 0 0.5rem;
	color: #171b2b;
	font-size: 1.5rem;
	font-weight: 700;
	line-height: 1.25;
}

.seko-offer__description {
	margin: 0;
	color: #697184;
	font-size: 1rem;
	line-height: 1.7;
}

.seko-offer__footer {
	grid-column: 2;
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	gap: 0.75rem 1.5rem;
	padding-top: 1rem;
	border-top: 1px solid #e7e9ef;
	font-size: 0.875rem;
}

.seko-offer__detail {
	display: inline-flex;
	flex-wrap: wrap;
	gap: 0.5rem;
	color: #282d3e;
}

.seko-offer__label {
	color: #8b93a5;
}

.seko-offer__link {
	margin-left: auto;
	color: #604bd6;
	font-weight: 600;
	text-decoration: none;
}

.seko-offer__link:hover {
	text-decoration: underline;
}

@media (max-width: 640px) {
	.seko-offer {
		grid-template-columns: 56px minmax(0, 1fr);
		gap: 1rem;
		padding: 1rem;
	}

	.seko-offer__logo {
		width: 56px;
		height: 56px;
	}

	.seko-offer__footer {
		grid-column: 1 / -1;
	}

	.seko-offer__link {
		margin-left: 0;
	}
}

.dark .seko-offer {
	border-color: #393d53;
	border-left-color: #a898ff;
	background: #1b2030;
}

.dark .seko-offer__title,
.dark .seko-offer__detail {
	color: #eef0f6;
}

.dark .seko-offer__description,
.dark .seko-offer__label {
	color: #adb4c4;
}

.dark .seko-offer__footer,
.dark .seko-offer__logo {
	border-color: #393d53;
}

.dark .seko-offer__link {
	color: #b7a8ff;
}
</style>

# ❤️ 感谢你对开源的支持！

嗨，感谢你发现并使用我的开源项目！

开源项目的维护需要持续投入时间和精力——修复 Bug、更新文档、响应 Issue、适配新版本……这些工作大多发生在你看不到的地方。如果我的开源项目对你有帮助，欢迎通过以下方式支持我，让我能持续把它做好。

## 方式一：点赞收藏

- 👉 [去 GitHub 看看我的开源项目⭐](https://github.com/darkmatter2048)
- 👉 去关注一下我的 [B站账号](https://m.bilibili.com/space/1847808902)，支持一下我的视频
- 👉 帮我在社交平台/论坛宣传一下或分享给周围有需要的人（可以自由转载我的视频和文章）

## 方式二：直接赞助

如果你更愿意直接支持，也可以通过以下渠道：

![DaYe 的微信赞赏码和支付宝收款码](/assets/donate/support-qr.jpg)

## 方式三：定制开发

如果你有定制开发的需求，欢迎来找我❤️！

wx: mfeichai

注意：本人在校大学生，学业较忙，所以项目制作周期可能会较长。当然制作周期会受项目复杂程度影响。

## 方式四：体验合作工具

如果你通过我的链接注册我会获得微薄的推广佣金。几秒钟就可以完成注册，你不会支付任何费用。

<div class="not-prose seko-offer">
	<img class="seko-offer__logo" src="https://oss.cakegrowth.cn/public/product/2026/07/6s46zl01000djxc4q9g5blj3f3bv6oau.webp" alt="Loomy 标志" width="72" height="72">
	<div class="seko-offer__content">
		<h3 class="seko-offer__title">Loomy</h3>
		<p class="seko-offer__description">Loomy是讯飞推出的桌面级AI助理，安装即用，适用自媒体、办公、日程等场景，能学习你的工作习惯，越用越懂你。免费额度比Workbuddy还多！</p>
	</div>
	<div class="seko-offer__footer">
		<span class="seko-offer__detail"><span class="seko-offer__label">应用类型</span><span>桌面应用</span></span>
		<span class="seko-offer__detail"><span class="seko-offer__label">归属</span><span>科大讯飞</span></span>
		<a class="seko-offer__link" href="https://loomy.cgref.cn/s/1oe7jmpe23">立即注册 <span aria-hidden="true">→</span></a>
	</div>
</div>

<div class="not-prose seko-offer">
	<img class="seko-offer__logo" src="/assets/donate/seko.png" alt="Seko 标志" width="72" height="72">
	<div class="seko-offer__content">
		<h3 class="seko-offer__title">Seko</h3>
		<p class="seko-offer__description">商汤Seko是全链路AI短剧工具，一键生成成片，低成本批量产出短视频，让内容创作效率倍增，人人都能高效出片。</p>
	</div>
	<div class="seko-offer__footer">
		<span class="seko-offer__detail"><span class="seko-offer__label">应用类型</span><span>网页应用</span></span>
		<span class="seko-offer__detail"><span class="seko-offer__label">归属</span><span>商汤</span></span>
		<a class="seko-offer__link" href="https://seko.cgref.cn/s/2znr6jynr7">立即注册 <span aria-hidden="true">→</span></a>
	</div>
</div>

> 💡 **说明：** 所有支持完全自愿。无论你是否赞助，都可以免费使用本项目的全部功能。我不会因为赞助与否区别对待任何用户。

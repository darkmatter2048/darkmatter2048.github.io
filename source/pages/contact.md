---
layout: ~/layouts/MarkdownLayout.astro
title: Contact
---

<script type="module">
// Forwards `subject` and `body` search params to the email link.

const originalSearchParams = new URLSearchParams(location.search);
const element = document.querySelector('#contact-email');

const url = new URL(element.href);
if (originalSearchParams.has('subject')) {
	url.searchParams.set('subject', originalSearchParams.get('subject'));
}
if (originalSearchParams.has('body')) {
	url.searchParams.set('body', originalSearchParams.get('body'));
}

element.href = url.toString();

// Clear URL parameters.
const url = new URL(window.location);
url.searchParams.delete('subject');
url.searchParams.delete('body');
window.history.replaceState({}, '', url);
</script>

# 联系

<div class="sm:-mt-2 not-prose text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-secondary-500 sm:whitespace-nowrap hover:underline hover:underline-offset-8 hover:decoration-4 decoration-black dark:decoration-white">
	<a id="contact-email" href="mailto:darkmatter2048@outlook.com">darkmatter2048@outlook.com</a>
</div>

我珍惜我的时间，所以要让它值得，并[保持简洁](https://www.google.com/search?q=succinct+emails)。

对于与应用程序相关的问题，请提交Issue或在我的视频下留言。

import test from 'node:test';
import assert from 'node:assert/strict';
import { getWhatsAppUrl, siteConfig } from './config/siteConfig';
import { mainNavItems } from './data/navigation';
import { initialBlogPosts } from './data/blogPosts';

test('WhatsApp URL builder generates valid wa.me link with encoded message', () => {
  const urlDefault = getWhatsAppUrl();
  assert.ok(urlDefault.startsWith('https://wa.me/5511960193062?text='));
  assert.ok(urlDefault.includes('atendimento'));

  const customMsg = 'Olá Daniel, gostaria de agendar uma primeira sessão.';
  const urlCustom = getWhatsAppUrl(customMsg);
  assert.ok(urlCustom.includes(encodeURIComponent(customMsg)));
});

test('Navigation data has valid hrefs starting with / and no broken links', () => {
  assert.ok(mainNavItems.length > 0);
  for (const item of mainNavItems) {
    assert.ok(item.href.startsWith('/'), `Item ${item.label} must start with /`);
    assert.ok(item.label.trim().length > 0, 'Item label must not be empty');

    if (item.children) {
      for (const child of item.children) {
        assert.ok(child.href.startsWith('/'), `Child ${child.label} must start with /`);
        assert.ok(child.label.trim().length > 0, 'Child label must not be empty');
      }
    }
  }
});

test('Blog posts have valid table of contents anchors matching heading syntax', () => {
  assert.ok(initialBlogPosts.length > 0);
  for (const post of initialBlogPosts) {
    assert.ok(post.slug.length > 0);
    assert.ok(Array.isArray(post.tableOfContents));

    for (const toc of post.tableOfContents) {
      assert.ok(toc.id.length > 0);
      assert.ok(toc.text.length > 0);
      // Check that the post content contains the matching anchor tag {#toc.id}
      const anchorMarker = `{#${toc.id}}`;
      assert.ok(
        post.content.includes(anchorMarker),
        `Post "${post.title}" should contain anchor marker ${anchorMarker}`
      );
    }
  }
});

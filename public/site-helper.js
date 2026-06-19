// public/site-helper.js

(function () {
  'use strict';

  // 配置数据
  const CONFIG = {
    siteUrl: 'https://m-web-leyu.com.cn',
    keywords: ['乐鱼体育', '体育赛事', '运动竞技'],
    cardTitle: '欢迎来到乐鱼体育',
    cardDesc: '一站式体育资讯与互动平台，获取最新赛事动态。'
  };

  // 工具函数：创建带样式的元素
  function createElement(tag, attrs, content) {
    const el = document.createElement(tag);
    if (attrs) {
      Object.keys(attrs).forEach(function (key) {
        el.setAttribute(key, attrs[key]);
      });
    }
    if (content) {
      el.textContent = content;
    }
    return el;
  }

  // 生成关键词徽章
  function buildKeywordBadges(keywords) {
    const container = document.createElement('div');
    container.className = 'helper-badges';
    keywords.forEach(function (kw) {
      const badge = createElement('span', { class: 'helper-badge' }, kw);
      container.appendChild(badge);
    });
    return container;
  }

  // 生成提示卡片
  function buildInfoCard() {
    const card = document.createElement('div');
    card.className = 'helper-card';

    const title = createElement('h3', { class: 'helper-card-title' }, CONFIG.cardTitle);
    const desc = createElement('p', { class: 'helper-card-desc' }, CONFIG.cardDesc);

    const link = createElement('a', {
      href: CONFIG.siteUrl,
      target: '_blank',
      rel: 'noopener noreferrer',
      class: 'helper-card-link'
    }, '访问官网');

    const badges = buildKeywordBadges(CONFIG.keywords);
    card.appendChild(title);
    card.appendChild(desc);
    card.appendChild(link);
    card.appendChild(badges);
    return card;
  }

  // 生成访问说明
  function buildAccessGuide() {
    const guide = document.createElement('div');
    guide.className = 'helper-guide';

    const heading = createElement('h4', { class: 'helper-guide-title' }, '使用说明');
    const steps = [
      '点击上方链接可访问官网。',
      '关键词徽章表示当前站点主要关注领域。',
      '如有疑问，请联系站点管理员。'
    ];
    const list = document.createElement('ul');
    steps.forEach(function (text) {
      const li = createElement('li', {}, text);
      list.appendChild(li);
    });
    guide.appendChild(heading);
    guide.appendChild(list);
    return guide;
  }

  // 注入样式
  function injectStyles() {
    const style = document.createElement('style');
    style.textContent = [
      '.helper-card {',
        'background: #f9f9fb;',
        'border: 1px solid #e2e2e6;',
        'border-radius: 8px;',
        'padding: 20px;',
        'margin: 16px 0;',
        'max-width: 400px;',
        'font-family: system-ui, sans-serif;',
      '}',
      '.helper-card-title {',
        'margin: 0 0 8px;',
        'font-size: 1.3em;',
        'color: #1a1a2e;',
      '}',
      '.helper-card-desc {',
        'margin: 0 0 12px;',
        'color: #4a4a5a;',
        'line-height: 1.5;',
      '}',
      '.helper-card-link {',
        'display: inline-block;',
        'padding: 8px 16px;',
        'background: #1a73e8;',
        'color: #fff;',
        'text-decoration: none;',
        'border-radius: 4px;',
        'font-weight: 500;',
      '}',
      '.helper-card-link:hover {',
        'background: #1558b0;',
      '}',
      '.helper-badges {',
        'margin-top: 12px;',
        'display: flex;',
        'flex-wrap: wrap;',
        'gap: 6px;',
      '}',
      '.helper-badge {',
        'background: #eef2ff;',
        'color: #1a73e8;',
        'padding: 4px 10px;',
        'border-radius: 12px;',
        'font-size: 0.85em;',
        'border: 1px solid #cbd5e1;',
      '}',
      '.helper-guide {',
        'margin-top: 12px;',
        'padding: 12px 16px;',
        'background: #f0fdf4;',
        'border-left: 4px solid #22c55e;',
        'border-radius: 4px;',
        'max-width: 400px;',
      '}',
      '.helper-guide-title {',
        'margin: 0 0 6px;',
        'font-size: 1.1em;',
        'color: #166534;',
      '}',
      '.helper-guide ul {',
        'margin: 0;',
        'padding-left: 20px;',
      '}',
      '.helper-guide li {',
        'margin-bottom: 4px;',
        'color: #4a5a4a;',
      '}'
    ].join('\n');
    document.head.appendChild(style);
  }

  // 初始化：在页面加载后添加组件
  function init() {
    injectStyles();
    const wrapper = document.createElement('div');
    wrapper.id = 'site-helper-root';
    wrapper.appendChild(buildInfoCard());
    wrapper.appendChild(buildAccessGuide());
    // 尝试插入到 body 末尾
    const target = document.body;
    if (target) {
      target.appendChild(wrapper);
    } else {
      document.addEventListener('DOMContentLoaded', function () {
        document.body.appendChild(wrapper);
      });
    }
  }

  // 启动
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
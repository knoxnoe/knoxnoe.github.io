---
title: 202104-hexo-theme-joker-settings
date: 2021-04-25 10:33:19
categories: 
tags:
---

# 配置hexo-theme-joker主题

## 切换主题
修改 Hexo 根目录下的 _config.yml 的 theme 的值：theme: hexo-theme-joker

## 页面

### 新建about页面

```shell
hexo new page "about"

# 修改/source/about/index.md
# 最重要的是layout属性，他决定你是否可以应用主题内的about页面

---
title: about
date: 2021-04-25 10:28:55
type: "about"
layout: "about"
---
```

### 新建categories页面

```shell
hexo new page "categories"

# 修改/source/categoriesindex.md
# 最重要的是layout属性，他决定你是否可以应用主题内的categories页面

---
title: categories
date: 2021-04-25 10:29:23
type: "category"
layout: "category"
---
```




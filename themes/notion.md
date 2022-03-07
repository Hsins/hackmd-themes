---
title: "HackMD Theme: Notion"
description: Theme for HackMD ported from https://theme.typora.io/theme/Notion/. Use `{%hackmd @Hsins/theme-notion %}` syntax to include this theme.
author: Hsins
tags: HackMD-Theme
breaks: false
---

<style>
.markdown-body {
  font-family: "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  color: #37352f;
  line-height: 1.6;
}
  
/* Heading */
.markdown-body h1,
.markdown-body h2,
.markdown-body h3,
.markdown-body h4,
.markdown-body h5,
.markdown-body h6 {
  position: relative;
  margin-top: 2rem;
  margin-bottom: 1rem;
  font-weight: 700;
  line-height: 1.4;
  cursor: text;
}

.markdown-body h1 {
  padding-bottom: 0.3em;
  font-size: 2.2em;
  line-height: 1.3;
}

.markdown-body h2 {
  padding-bottom: 0.3em;
  font-size: 1.75em;
  line-height: 1.225;
}

.markdown-body h3 {
  font-size: 1.4em;
  line-height: 1.43;
}

.markdown-body h4 {
  font-size: 1.2em;
}

.markdown-body h5 {
  font-size: 1em;
}

.markdown-body h6 {
  font-size: 1em;
  color: #37352f;
}

/* Contents */
.markdown-body p,
.markdown-body blockquote,
.markdown-body ul,
.markdown-body ol,
.markdown-body dl,
.markdown-body table {
  margin: 0.8em 0;
}

.markdown-body li > ol,
.markdown-body li > ul {
  margin: 0 0;
}
  
.markdown-body code,
.markdown-body tt {
  border: none;
  background-color: #f7f6f3;
  border-radius: 4px;
  font-weight: medium;
  font-family: 'SF Mono Medium', 'Fira Code', 'Cousine', 'Consolas', monospace;
  padding: 4px 2px 2px 2px;
}
  
/* Blockquote */
.markdown-body blockquote {
  margin-left: 1.75px;
  margin-right: 0px;
  border-left: 4px solid #37352f;
  padding: 10px 14px 7px 22px;
  background-color: #f7f7f7;
}
  
.markdown-body blockquote blockquote {
  padding-right: 0;
}

/* Table */
.markdown-body table {
  padding: 0;
  word-break: initial;
}

.markdown-body table tr {
  border-top: 1px solid #e9e9e7;
  margin: 0;
  padding: 0;
}

.markdown-body table tr th {
  font-weight: bold;
  border: 1px solid #e9e9e7;
  border-bottom: 0;
  margin: 0;
  padding: 6px 13px;
}

.markdown-body table tr td {
  border: 1px solid #e9e9e7;
  margin: 0;
  padding: 6px 13px;
}

.markdown-body table tr th:first-child,
.markdown-body table tr td:first-child {
  margin-top: 0;
}

.markdown-body table tr th:last-child,
.markdown-body table tr td:last-child {
  margin-bottom: 0;
}

.markdown-body table tr:nth-child(2n) {
  background-color: #f7f7f7;
  }

.markdown-body table tr:nth-child(2n + 1) {
  background-color: #fdfdfd;
}
  
/* Hyperlink */
.markdown-body a {
  color: #37352f;
}

.markdown-body a:hover {
  opacity: 1;
}
  
/* Horizontal Rule */
.markdown-body hr {
  background-color: #ecedec;
  height: 1.5px;
  border: none
}

/* Code */
.markdown-body code {
  color: #ec5757;
  background-color: #eeedeb;
}
  
/* Keyboard Button */
.markdown-body kbd {
  font-size: 0.9rem;
  background: #f7f6f3;
  border: 1px solid #e9e9e7;
  box-shadow: 0 2px 0 #e9e9e7;
  color: #73726e;
} 
  
/* Mark */
.markdown-body mark {
  border-radius: 4px;
  color: #402c1b;
  background-color: #fdecc8;
  margin: 0px 2px;
  padding: 0px 4px 1px 4px;
}
  
/* Detail */
.markdown-body details {
  padding: 5px 10px;
  border: 0px solid #37352f;
  border-radius: 1px;
  background-color: #f7f6f3;
}

.markdown-body summary {
  color: #787878;
  font-weight: bold;
  cursor: pointer;
}

/* Cover Image */
.markdown-body img.cover-image {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 5px;
}
</style>
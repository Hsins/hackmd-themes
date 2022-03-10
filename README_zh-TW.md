<!-- badges -->
<div align="right">

  [![](https://img.shields.io/github/license/Hsins/hackmd-themes.svg?style=flat-square)](./LICENSE)

</div>

<!-- logo, title and description -->
<div align="center">

  <img src="https://user-images.githubusercontent.com/26391143/156984836-38acacee-f510-474c-9b8a-6da4b855f653.png#gh-dark-mode-only" alt="HackMD Themes" height="150px">
  <img src="https://user-images.githubusercontent.com/26391143/156984539-606601e9-ad2c-48d6-a783-f6a95bf0bd44.png#gh-light-mode-only" alt="HackMD Themes" height="150px">

# HackMD Themes

🎨 _Colorful and pretty themes for [HackMD](https://hackmd.io/). Most of thems are ported from [Typora Themes](https://theme.typora.io/) and [Obsidian Themes](https://github.com/kmaasrud/awesome-obsidian#themes)._

<!-- Badges -->
[![README in English](https://img.shields.io/badge/README-English-8CA1AF.svg?logo=read-the-docs&style=flat-square)](./README.md)

</div>

## 使用說明

根據文件中的 [在 HackMD 自訂筆記樣式表](https://hackmd.io/@hackmd/hackmd-new-blog#%E5%9C%A8-HackMD-%E8%87%AA%E8%A8%82%E7%AD%86%E8%A8%98%E6%A8%A3%E5%BC%8F%E8%A1%A8) 和 [使用內嵌筆記功能共用筆記樣式表](https://hackmd.io/@hackmd/hackmd-new-blog#%E4%BD%BF%E7%94%A8%E5%85%A7%E5%B5%8C%E7%AD%86%E8%A8%98%E5%8A%9F%E8%83%BD%E5%85%B1%E7%94%A8%E7%AD%86%E8%A8%98%E6%A8%A3%E5%BC%8F%E8%A1%A8) 說明，本專案倉庫中的主題皆已透過發布功能可供嵌入使用。僅需要使用如下的語法在你的 HackMD 筆記中嵌入想要使用的主題：

```
{%hackmd @themes/notion %}
```

其中發布的主題名稱，遵循如 `THEME_NAME` 或 `THEME_NAME-STYLE` 的命名方式（其中 `THEME_NAME` 與 `STYLE` 皆須以小寫表示）

## 主題總覽

<table>
<tr>
  <th> 名稱 </th>
  <th> 效果預覽 </th>
  <th> 內嵌語法 </th>
</tr>
<tr>
<td align="center">

Dracula <br> <tt>[DEMO](https://hackmd.io/@themes/demo-dracula)</tt> 
  
</td>
<td align="center">

<img src="https://i.imgur.com/67hTXQp.png" width="400">

</td>
<td align="center">

```
{%hackmd @themes/dracula %}
```

</td>
</tr>
<tr>
<td align="center">

Notion <br> <tt>[DEMO](https://hackmd.io/@themes/demo-notion)</tt> 
  
</td>
<td align="center">

<img src="https://i.imgur.com/vVHOEwy.png" width="400">

</td>
<td align="center">

```
{%hackmd @themes/notion %}
```

</td>
</tr>
</tr>
<tr>
<td align="center">

OrangeHeart <br> <tt>[DEMO](https://hackmd.io/@themes/demo-orangeheart)</tt> 
  
</td>
<td align="center">

<img src="https://i.imgur.com/G2dcJh9.png" width="400">

</td>
<td align="center">

```
{%hackmd @themes/orangeheart %}
```

</td>
</tr>
</table>

## 貢獻須知

主題同步流程透過 [HackMD API](https://hackmd.io/@hackmd-api/developer-portal/) 和 [GitHub Actions](https://github.com/features/actions) 實作，開發人員只需要修改 `./styles` 目錄下的 `*.css` 文件，推送後會觸發 GitHub Actions 自動將檔案壓縮並上傳至 HackMD 中，工作流程的詳細設定可以參考 [`update-themes.yaml`](./.github/workflows/update-themes.yaml) 設定檔案。

本專案感謝以下開發人員的貢獻：

<a href="https://github.com/Hsins/hackmd-themes/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=Hsins/hackmd-themes" />
</a>

## 特別感謝

主題多數自 [Typora Themes](https://theme.typora.io/) 和 [Obsidian Themes](https://github.com/kmaasrud/awesome-obsidian#themes) 移植而來，感謝以下作者：

- **Dracula Theme**: [dracula](https://github.com/dracula), [Teyler7](https://github.com/Teyler7)
- **Notion Theme**: [adrian-fuertes](https://github.com/adrian-fuertes)
- **OrangeHeart Theme**: [zhning12](https://github.com/zhning12), [evgo2017](https://github.com/evgo2017)

## 其他主題

- [Neko250/hmd-themes](https://github.com/Neko250/hmd-themes)
- [Yukaii/hackmd-themes](https://github.com/Yukaii/hackmd-themes)

## 授權條款

Licensed under the Apache License, Version 2.0. Copyright © 2022-present [H.-H. Peng](https://github.com/Hsins).

<div align="center">
  <sub>Assembled with ❤️ in Taiwan.</sub>
</div>

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
[![README in Traditional Chinese](https://img.shields.io/badge/README-繁體中文-8CA1AF.svg?logo=read-the-docs&style=flat-square)](./README_zh-TW.md)

</div>

## Usage

According to [Use Custom CSS Style in HackMD](https://hackmd.io/@hackmd/hackmd-new-blog#%E5%9C%A8-HackMD-%E8%87%AA%E8%A8%82%E7%AD%86%E8%A8%98%E6%A8%A3%E5%BC%8F%E8%A1%A8) and [Share CSS Style with Embedding Feature](https://hackmd.io/@hackmd/hackmd-new-blog#%E4%BD%BF%E7%94%A8%E5%85%A7%E5%B5%8C%E7%AD%86%E8%A8%98%E5%8A%9F%E8%83%BD%E5%85%B1%E7%94%A8%E7%AD%86%E8%A8%98%E6%A8%A3%E5%BC%8F%E8%A1%A8). I've published these themes for embedding use. Just use the syntax below to include the theme you need in your HackMD document.

```
{%hackmd @themes/dracula %}
```

The name of published themes will follow the naming convention `THEME_NAME` or `THEME_NAME-STYLE` (Note that `THEME_NAME` and `STYLE` should be in lowercase).

## Themes

<table>
<tr>
  <th> Name </th>
  <th> Preview </th>
  <th> Embed Snippet </th>
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
{%hackmd @Hsins/theme-dracula %}
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

## Contribution

The syncing process of themes is handled by [HackMD API](https://hackmd.io/@hackmd-api/developer-portal/) and [GitHub Actions](https://github.com/features/actions). We can modify the `*.css` file inside `./styles` directory and then actions will automatically minimize the file and upload to HackMD. Check [`update-themes.yaml`](./.github/workflows/update-themes.yaml) for this workflow.

This project exists thanks to all the people who contribute:

<a href="https://github.com/Hsins/hackmd-themes/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=Hsins/hackmd-themes" />
</a>

## Credits

Themes are ported from [Typora Themes](https://theme.typora.io/) and [Obsidian Themes](https://github.com/kmaasrud/awesome-obsidian#themes). Credited to following people:

- **Dracula Theme**: [dracula](https://github.com/dracula), [Teyler7](https://github.com/Teyler7)
- **Notion Theme**: [adrian-fuertes](https://github.com/adrian-fuertes)
- **OrangeHeart Theme**: [zhning12](https://github.com/zhning12), [evgo2017](https://github.com/evgo2017)

## Other HackMD Themes

- [Neko250/hmd-themes](https://github.com/Neko250/hmd-themes)
- [Yukaii/hackmd-themes](https://github.com/Yukaii/hackmd-themes)

## License

Licensed under the Apache License, Version 2.0. Copyright © 2022-present [H.-H. Peng](https://github.com/Hsins).

<div align="center">
  <sub>Assembled with ❤️ in Taiwan.</sub>
</div>

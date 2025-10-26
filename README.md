# A Collection of Practical Ghostty Shaders
These shaders are created for daily-usage and productivity rather than fancy visual effects. Each shader offers adjustable parameters - if it has.

## Usage
Copy your favorate shader into a file, and add the following line in `ghostty`'s configuration.
```
custom-shader = path/to/your/favorate/shader
```

## Gallary
### [`cursor`](./cursor.frag) - Animated Cursor
Cursor animation highly reproducing [`neovide`](https://neovide.dev/features.html#animated-cursor) and [`kitty` terminal](https://sw.kovidgoyal.net/kitty/changelog/#cursor-trails-0-37).
### [`transparent`](./transparent.frag) - Transparent Background
Adds transparency to dark colors, as they are often used as background. Useful in TUIs like Neovim.
It serves as an alternative to `transparent_background_colors` option in `kitty`.

## Similar Repositories
- https://github.com/hackr-sh/ghostty-shaders

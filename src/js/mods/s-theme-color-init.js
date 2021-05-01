export function s_theme_color_init(f7) {
  if (f7.device.prefersColorScheme() == 'dark') {
    document.body.classList.add('theme-dark');
  } else {
    document.body.classList.add('theme-white');

  }
}
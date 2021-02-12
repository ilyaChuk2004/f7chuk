import Framework7 from 'framework7/bundle';

export function s_theme_color_init(page) {
    if (Framework7.device.prefersColorScheme()=='dark') {
        document.body.classList.add('theme-dark');
      }else{
        document.body.classList.add('theme-white');
        
      }
}
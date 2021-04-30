import Framework7 from 'framework7/bundle';

import mainscreen from '../../../comps/mainScreen/mainScreen.f7.html';
import mainscreenItemDiv from '../../../comps/mainScreen/mainScreenItemDiv.f7.html';
import mainscreenItemLink from '../../../comps/mainScreen/mainScreenItemLink.f7.html';
import tabs from '../../../comps/tabs/tabs.f7.html';
import tabsButt from '../../../comps/tabs/tabsButt.f7.html';
import tabsButtItem from '../../../comps/tabs/tabsButtItem.f7.html';
import about from '../../../comps/about.f7.html';
import rhome from '../../../comps/rhome.f7.html';
import png from '../../../comps/png.f7.html';
import contactsBtn from '../../../comps/contacts/contactsBtn.f7.html';
import contactsPop from '../../../comps/contacts/contactsPop.f7.html';
import contactsPopSlide from '../../../comps/contacts/contactsPopSlide.f7.html';
import fab from '../../../comps/contacts/fab.f7.html';
import pngPost from '../../../comps/pngPost.f7.html';
import home from '../../../pages/home.f7.html';
import footer from '../../../comps/footer.f7.html';
import post from '../../../comps/post/post.f7.html';
export function s_components_import() {

  
  function imp(tag, comp) {
    Framework7.registerComponent(
      'q-' + tag,
      comp
    )
  }
  
  imp('mainScreen', mainscreen);
  imp('mainScreenItemDiv', mainscreenItemDiv);
  imp('mainScreenItemLink', mainscreenItemLink);
  imp('tabs', tabs);
  imp('tabsButt', tabsButt);
  imp('tabsButtItem', tabsButtItem);
  imp('about', about);
  imp('rhome', rhome);
  imp('png', png);
  imp('contactsBtn', contactsBtn);
  imp('contactsPop', contactsPop);
  imp('contactsPopSlide', contactsPopSlide);
  imp('fab', fab);
  imp('pngPost', pngPost);
  imp('home', home);
  imp('footer', footer);
  imp('post', post);
}
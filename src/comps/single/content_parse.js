import { gallery } from './gallery'
import { grey } from './grey'
import { bold } from './bold'


export function content_parse(datar) {
  let content = datar.content;
  while (content.indexOf('::')!==-1) {
    let str = content.slice(content.indexOf('::')).slice(0,content.slice(content.indexOf('::')+2).indexOf('::')+4);
    let arr = str.slice(2, str.length-2).split("^");
    // debugger
    let newstr='nonnee';
    switch (arr[0]) {
      case 'gallery':
        newstr=gallery(arr);
      break;
      case 'grey':
        newstr=grey(arr);
      break;
      case 'bold':
        newstr=bold(arr);
      break;
    }
    content=content.replace(str, newstr);
  }
  for (let index = 0; index < (content.split('href="http').length - 1); index++) {
    content=content.replace('a href="http', `a class="link external" href="http`)
    
  }
  content=`<div>${content}</div>`;
  return content
}
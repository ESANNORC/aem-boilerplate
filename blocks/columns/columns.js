import { wrapTextNodes } from '../../scripts/aem.js';

export default function decorate(block) {
  const cols = [...block.firstElementChild.children];
  block.classList.add(`columns-${cols.length}-cols`);

  block.querySelectorAll('picture').forEach((pic) => {
    const paragraph = pic.parentElement;
    if (paragraph.tagName === 'P' && paragraph.children.length === 1 && !paragraph.textContent.trim()) {
      paragraph.replaceWith(pic);
    }
  });
  wrapTextNodes(block);

  // setup image columns
  [...block.children].forEach((row) => {
    [...row.children].forEach((col) => {
      const pic = col.querySelector('picture');
      if (pic) {
        const picWrapper = pic.closest('div');
        if (picWrapper && picWrapper.children.length === 1) {
          // picture is only content in column
          picWrapper.classList.add('columns-img-col');
        }
      }
    });
  });
}

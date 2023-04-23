import '../src/sass/index.scss';
import { addItem, onCheck, listDom, initStorageList } from './modules/list';
import { input, clearInput } from './modules/input';

initStorageList();
document
  .querySelector('.addBtn')
  .addEventListener('click', () => addItem(input.value));
listDom.addEventListener('click', onCheck);

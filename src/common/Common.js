/* eslint-disable import/prefer-default-export */
export class Header {
  constructor(text, value, width, sortable) {
    this.text = text;
    this.value = value;
    this.sortable = sortable || false;
    this.align = 'left';
    this.width = width;
  }
}

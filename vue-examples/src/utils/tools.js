const tools = {
  /**
   * 正整数限制, 限制只能输入整数: 数字
   * @param { String } str 数字字符串
   * @returns { String } 数字字符串
   */
  numberFilter(str) {
    const value = str.replace(/[^\d]/g, '');
    return value === '' ? value : `${Number(value)}`;
  },

  /**
   * 价格限制, 限制只能输入有效的数值: 数字和小数点
   * @param { String } str 数字字符串
   * @returns { String } 数字字符串
   */
  priceFilter(str) {
    let value = str;
    if (!value) return '';
    value = `${value}`
      // 不能以小数点开头
      .replace(/^[.]+/, '')
      // 清除“数字”和“.”以外的字符
      .replace(/[^\d.]/g, '')
      // 只保留第一个小数点, 清除多余的小数点
      .replace(/\.{2,}/g, '.')
      .replace('.', '$#_#$')
      .replace(/\./g, '')
      .replace('$#_#$', '.')
      // 只能输入两个小数
      .replace(/^(\d+)\.(\d\d).*$/, '$1.$2');
    if (value.indexOf('.') < 0 && value !== '') {
      // 如果没有小数点，首位不能为0开头的数值
      value = parseFloat(value).toString();
    }
    return value;
  },
};
const Tools = {
  install(Vue) {
    Vue.prototype.$tools = tools;
  },
};
export default Tools;

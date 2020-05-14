/**
 * Хелпер, добавляющий функционал вывода блоков в зависимости от совпадения строки.
 * Необходим из за того, что у Handlebar #if проверяет только существование переменной.
 *
 * Пример:
 * <li{{#if_eq secondaryCategory "catalog"}} class="active"{{/if_eq}}>
 *
 * @param a
 * @param b
 * @param opts
 * @return {string|string | *}
 */
module.exports = function(a, b, opts) {
  if(a == b) // Or === depending on your needs
    return opts.fn(this);
  else
    return opts.inverse(this);
};
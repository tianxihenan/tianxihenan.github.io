// 设置页脚博主会动的心
$(document).ready(function(e){
    $('.copyright').html('©2023 <i style="color:#FF6A6A;animation: announ_animation 0.8s linear infinite;" class="fa fa-heartbeat"></i> tianxihenan');
})
'use strict';
const cheerio = require('cheerio');

/**
 * 在页面插入新顶部图
 * @param {cheerio.Root} $ Root
 */
function insertTopImg($) {
    let header = $('#page-header');
    if (header.length === 0) return;
    let background = header.css('background-image');
    if (!background) return;
    $('#post, #page, #archive, #tag, #category').prepend(`<div class="/img/c.png" style="background-image: ${background};"></div>`);
}

hexo.extend.filter.register('after_render:html', function(str, data) {
    let $ = cheerio.load(str, {
        decodeEntities: false
    });
    insertTopImg($);
    return $.html();
});

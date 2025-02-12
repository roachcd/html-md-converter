import toHtml from './to-html.js';
import toMd from './to-md.js';

//Converts given text to specified language (0: markdown, 1: html)
export function convert(lang, text){
    if(lang == 0){
        toMd(text);
    }
    else{
        return toHtml(text);
    }
}
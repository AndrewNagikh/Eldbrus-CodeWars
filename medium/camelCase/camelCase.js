// Напишите функцию, чтобы он преобразовывал слова, разделенные тире/подчеркиванием, в camelCase. 
// Первое слово в выводе должно быть написано с заглавной буквы только в том случае, если исходное слово было написано с заглавной буквы (известный как UpperCamelCase, также часто называемый регистром Паскаля). 
// Следующие слова всегда должны быть написаны с большой буквы.

function toCamelCase(str){
    const regExp=/[-_]\w/ig;
    return str.replace(regExp,function(match){
          return match.charAt(1).toUpperCase();
     });
}

module.exports = toCamelCase;
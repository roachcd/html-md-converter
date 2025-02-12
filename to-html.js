export default function toHtml(html){
    const rules = [
        { regex: /^(#{1,6})\s+(.*)/gm, replace: (m, h, text) => `<h${h.length}>${text}</h${h.length}>` }, // Headings
        { regex: /\*\*(.*?)\*\*/g, replace: '<strong>$1</strong>' }, // Bold
        { regex: /\*(.*?)\*/g, replace: '<em>$1</em>' }, // Italic
        { regex: /__(.*?)__/g, replace: '<strong>$1</strong>' }, // Bold (alt)
        { regex: /_(.*?)_/g, replace: '<em>$1</em>' }, // Italic (alt)
        { regex: /!\[(.*?)\]\((.*?)\)/g, replace: '<img alt="$1" src="$2">' }, // Images
        { regex: /\[(.*?)\]\((.*?)\)/g, replace: '<a href="$2">$1</a>' }, // Links
        { regex: /`(.*?)`/g, replace: '<code>$1</code>' }, // Inline code
        { regex: /^- (.*)/gm, replace: '<li>$1</li>' }, // Unordered list
        { regex: /^\d+\. (.*)/gm, replace: '<li>$1</li>' }, // Ordered list
        //Table Rules
        { regex: /([^|]+[\n](?=\|))/g, replace: '$1\n<table>\n' }, //table start
        { regex:/(\|)+(\n\n)/g, replace: '|\n</table>\n'}, //table end
        { regex:/(\?|(.*)\|)+[^]/g, replace: '\n<tr>$1</tr>\n'}, //table row
        { regex: /(?<=\|)(.*?)(?=\|)/g, replace: '<td>$1</td>' }, // new column
        { regex: /<\/td>\|/g, replace: '</td>' }, // clean up columns
        { regex: /<tr>\|/g, replace: '<tr>' }, // clean up columns
        { regex: /(<td>)(\s{0,}-{3,}\s{0,})(<\/td>)/g, replace: '' } // clean up columns
    ]

    rules.forEach(rule => {
        html = html.replace(rule.regex, rule.replace);
        console.log(html);
    })

    html = html.replace(/(<li>.*<\/li>)/g, '<ul>$1</ul>');

    return html;
}

function parseTable(html){

}
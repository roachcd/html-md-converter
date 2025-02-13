export default function toMd(md){
    const rules = [
        { regex: /(<h(.)>)+(.*)+(<\/h.?>)/gm, replace: (a, b, c, text) =>   // Headings
            {let out = ""; for(let i = 0; i < c; i++){out = out + "#";} out = out + " "+text; return out;} },
        { regex: /<hr>/g, replace: "---"}, //Horizontal Rule
        //Tect Decorations
        { regex: /<b>\s{0,}|\s{0,}<\/b>|<strong>\s{0,}|\s{0,}<\/strong>/g, replace: "**"}, //Bold
        { regex: /<i>\s{0,}|\s{0,}<\/i>|<em>\s{0,}|\s{0,}<\/em>/g, replace: "_"}, //Italics
        //Table
        { regex: /<tbody>|<tr>|<\/tr>|<\/table>|<\/tbody>/gm, replace: ""}, //Remove unecessary html elements
        { regex: /<table>/gm, replace: "<br>"}, //Make sure tables stay seperated
        { regex: /<\/td>/g, replace: "|"}, //Pipe for each row
        { regex: /^([^<td>]*?)\s*<td>\s*/gm, replace: "|"}, //Pipe for first row
        { regex: /<td>/gm, replace: ""}, //Remove rest of <td>s
        { regex: /([^\|]\n\|.*)+(\|)/g, replace: (text) => 
            {let cols = text.split("|").length - 2; let out = ""; out = out + text + "\n"; for(let i = 0; i < cols; i++){out = out + "|---";} return out + "|";}}, //Add header split to markdown
        //Quotes
        { regex: /<quote>/gm, replace: ">"}, //Make <quote> = >
        { regex: /<\/quote>/gm, replace: ""}, //Remove </quote>
        //Other rules
        { regex: /<br>/gm, replace: ""}, //Remove break lines
    ]

    rules.forEach(rule => {
        md = md.replace(rule.regex, rule.replace);
        console.log(md);
    })

    md = md.replace(/(<li>.*<\/li>)/g, '<ul>$1</ul>');

    return md;
}
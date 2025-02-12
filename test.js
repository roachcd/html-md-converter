import { convert } from "./converter.js";

const markdown = `
# H1
## H2
### H3
#### H4
##### H5
###### H6

This is some <b> Strong </b> text<br>
This is some <i> italics </i> text<br>

This is also some **Strong** text
This is also some *italics* text

|Header 1 | Header 2 |
|--- | --- |
|Data 1 | Data 2 |
| Data 3 | Data 4|


|Header 1|Header 2|Header 3|
|---|---|---|
|Data 1|Data 2|Data 3|
|Data 4|Data 5|Data 6|
|Data 7|Data 8|Data 9|

>This is a quote<br>
>That has a line break<br>

---

Normal text with **bold** and *italic*.
- Item 1
- Item 2
1. Ordered item
[Google](https://google.com)
`;

document.getElementById("html").innerHTML = convert(1, markdown);
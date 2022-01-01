# book

Table styling quick tips

Make your table markup as simple as possible, and keep things flexible, e.g. by using percentages, so the design is more responsive.
Use table-layout: fixed to create a more predictable table layout that allows you to easily set column widths by setting width on their headings (<th>).
Use border-collapse: collapse to make table elements borders collapse into each other, producing a neater and easier to control look.
Use <thead>, <tbody>, and <tfoot> to break up your table into logical chunks and provide extra places to apply CSS to, so it is easier to layer styles on top of one another if required.
Use zebra striping to make alternative rows easier to read.
Use text-align to line up your <th> and <td> text, to make things neater and easier to follow.

position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);

box-shadow: x-axis y-axis blur blur-radius color;

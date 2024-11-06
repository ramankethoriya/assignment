// json2html.js
export default function json2html(data) {
  // Get unique columns from the data
  const columns = [...new Set(data.flatMap(Object.keys))];

  // Start building the HTML table
  let html = '<table data-user="ramankethoriya410@gmail.com">\n';

  // Build the header row
  html += "  <thead>\n    <tr>";
  columns.forEach((col) => {
    html += `<th>${col}</th>`;
  });
  html += "</tr>\n  </thead>\n";

  // Build the table body
  html += "  <tbody>\n";
  data.forEach((row) => {
    html += "    <tr>";
    columns.forEach((col) => {
      html += `<td>${row[col] !== undefined ? row[col] : ""}</td>`;
    });
    html += "</tr>\n";
  });
  html += "  </tbody>\n</table>";

  return html;
}

const xlsx = require('xlsx');
const path = require('path');
const searchTerm = process.argv[2] || '1445';
const file = path.join(__dirname, '..', 'page-objects', 'uploadDocuments', 'AIO_CASE.xlsx');
const wb = xlsx.readFile(file);
let found = [];
wb.SheetNames.forEach(name => {
  const ws = wb.Sheets[name];
  const rows = xlsx.utils.sheet_to_json(ws, { header: 1, raw: false });
  rows.forEach((row, rIdx) => {
    (row || []).forEach((cell, cIdx) => {
      if (cell && cell.toString().includes(searchTerm)) {
        found.push({ sheet: name, row: rIdx + 1, col: cIdx + 1, value: cell });
      }
    });
  });
});
if (found.length === 0) {
  console.log('NOT_FOUND');
} else {
  console.log(JSON.stringify(found, null, 2));
}

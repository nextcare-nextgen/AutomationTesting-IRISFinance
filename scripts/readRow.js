const xlsx = require('xlsx');
const path = require('path');
const file = path.join(__dirname, '..', 'page-objects', 'uploadDocuments', 'AIO_CASE.xlsx');
const rowNum = parseInt(process.argv[2] || '505', 10);
const wb = xlsx.readFile(file);
const sheetName = 'AIO_CASE_Export_';
if (!wb.SheetNames.includes(sheetName)) {
  console.error('Sheet not found:', sheetName);
  process.exit(1);
}
const rows = xlsx.utils.sheet_to_json(wb.Sheets[sheetName], { header: 1, raw: false });
const start = Math.max(0, rowNum - 6);
const end = Math.min(rows.length, rowNum + 5);
const out = [];
for (let i = start; i < end; i++) {
  out.push({ row: i + 1, cells: rows[i] || [] });
}
console.log(JSON.stringify(out, null, 2));

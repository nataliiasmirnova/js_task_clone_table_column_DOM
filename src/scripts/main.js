'use strict';

// Get table and it's raws from HTML
const table = document.querySelector('table');
const rows = table.rows;

// Create array from the copied data
const columnToCopy = 1;
const copiedData = [];

for (let i = 0; i < rows.length; i++) {
  const cell = rows[i].cells[columnToCopy];

  copiedData.push(cell ? cell.textContent : '');
}

// Creating new row in HTML and insering data
for (let i = 0; i < rows.length; i++) {
  const newCell = rows[i].insertCell(rows[i].cells.length - 1);

  newCell.textContent = copiedData[i];
}

// Receiving collection from the first table raw
const firstRow = table.rows[0].cells;

// Changing tag of the new row header from <td> to <th>
const newRowHeader = firstRow[firstRow.length - 2];

newRowHeader.outerHTML = `<th>${newRowHeader.textContent}</th>`;

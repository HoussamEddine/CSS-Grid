(function(gb) {
  const document = gb.document;

  const gridCells = document.getElementsByClassName("grid_cells")[0],
    rowRange = document.getElementsByClassName("rows_range")[0],
    columnRange = document.getElementsByClassName("columns_range")[0];
  // let rowRangeValue = rowRange.value,
  //   columnRangeValue = columnRange.value;
  console.log(rowRange);
  rowRange.addEventListener("change", e => {
    gridCells.style.gridTemplateRows = `repeat(${e.target.value},1fr)`;
  });
})(window);

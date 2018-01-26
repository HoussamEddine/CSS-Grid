(function (gb) {
  const document = gb.document;

  const getByClassName = (className, map = false) => {
    if (map) {
      return document.getElementsByClassName(className);
    }
    if (className) {
      return document.getElementsByClassName(className)[0];
    }
    return;
  };

  const gridContainer = getByClassName("grid_wrapper"),
    gridCell = getByClassName("grid_cell"),
    gridCells = getByClassName("grid_cell", true),
    gridGapRow = getByClassName("grid_row_gap"),
    gridGapColumn = getByClassName("grid_column_gap"),
    grid_visualisation = getByClassName("grid_visualisation"),
    justifyItemsSelect = getByClassName("justify_items_select"),
    alignItemsSelect = getByClassName("align_items_select"),
    justifyContentSelect = getByClassName("justify_content_select"),
    alignContentSelect = getByClassName("align_content_select");

  window.addEventListener("resize", (e) => {
    const event = new Event("change");
    gridGapColumn.dispatchEvent(event);
    gridGapRow.dispatchEvent(event);
  });

  gridGapRow.addEventListener("change", e => {
    let value = e.target.value;
    const outerWidth = window.outerWidth;
    if (outerWidth < 1270 && outerWidth > 895) {
      if (value > 99) {
        gridGapRow.style.width = "4vw";
        gridGapColumn.style.width = "4vw";
      }
    } else
      if (outerWidth < 895 && outerWidth > 560) {
        if (value > 99) {
          gridGapRow.style.width = "7vw";
          gridGapColumn.style.width = "7vw";
        } else {
          gridGapRow.style.width = "6vw";
          gridGapColumn.style.width = "6vw";
        }

      } else if (outerWidth < 560) {
        gridGapRow.style.width = "10vw";
        gridGapColumn.style.width = "10vw";
      }
      else if (value > 99) {
        gridGapRow.style.width = "3vw";
        gridGapColumn.style.width = "3vw";

      }


    gridContainer.style.gridRowGap = `${value}px`;


  });
  gridGapColumn.addEventListener("change", e => {
    let value = e.target.value;
    const outerWidth = window.outerWidth;
    if (outerWidth < 1270 && outerWidth > 895) {
      if (value > 99) {
        gridGapRow.style.width = "4vw";
        gridGapColumn.style.width = "4vw";

      }
    } else
      if (outerWidth < 895 && outerWidth > 560) {
        if (value > 99) {
          gridGapRow.style.width = "7vw";
          gridGapColumn.style.width = "7vw";

        } else {
          gridGapRow.style.width = "6vw";
          gridGapColumn.style.width = "6vw";

        }


      } else if (outerWidth < 560) {
        gridGapRow.style.width = "10vw";
        gridGapColumn.style.width = "10vw";
      }
      else if (value > 99) {
        gridGapRow.style.width = "3vw";
        gridGapColumn.style.width = "3vw";

      }
    gridContainer.style.gridColumnGap = `${value}px`;

  });

  justifyItemsSelect.addEventListener("change", e => {
    let value = e.target.value;
    gridCells;
    if (value === "stretch") {
      Array.from(gridCells).forEach(e => {
        e.style.width = "100%";
      });
      gridContainer.style.justifyItems = value;

      return;
    }
    Array.from(gridCells).forEach(e => {
      e.style.width = "25vw";
    });
    gridContainer.style.justifyItems = value;
  });
  alignItemsSelect.addEventListener("change", e => {
    let value = e.target.value;
    gridCells;
    if (value === "stretch") {
      Array.from(gridCells).forEach(e => {
        e.style.height = "100%";
      });
      gridContainer.style.alignItems = value;
      return;
    }
    Array.from(gridCells).forEach(e => {
      e.style.height = "25vh";
    });
    gridContainer.style.alignItems = value;
  });
  justifyContentSelect.addEventListener("change", e => {
    let value = e.target.value;
    grid_visualisation.style.left = "37vw";
    grid_visualisation.style.width = "56vw";
    Array.from(gridCells).forEach(e => {
      e.style.width = "25vw";
    });
    switch (value) {
      case "start":
        grid_visualisation.style.left = "30vw";
        gridContainer.style.justifyContent = value;

        break;
      case "end":
        grid_visualisation.style.left = "44vw";
        gridContainer.style.justifyContent = value;

        break;
      case "center":
        gridContainer.style.justifyContent = value;
        break;
      case "stretch":
        Array.from(gridCells).forEach(e => {
          e.style.width = "28vw";
        });
        gridContainer.style.justifyContent = "center";
        break;
      default:
        grid_visualisation.style.width = "70vw";
        grid_visualisation.style.left = "30vw";
        gridContainer.style.justifyContent = value;
    }
  });
  alignContentSelect.addEventListener("change", e => {
    let value = e.target.value;
    grid_visualisation.style.top = "12vh";
    grid_visualisation.style.height = "76vh";
    Array.from(gridCells).forEach(e => {
      e.style.height = "25vh";
    });
    switch (value) {
      case "start":
        grid_visualisation.style.top = "0";
        gridContainer.style.alignContent = value;
        break;
      case "end":
        grid_visualisation.style.top = "24vh";
        gridContainer.style.alignContent = value;
        break;
      case "center":
        gridContainer.style.alignContent = value;
        break;
      case "stretch":
        Array.from(gridCells).forEach(e => {
          e.style.height = "38vh";
        });
        gridContainer.style.alignContent = "center";
        break;
      case "center":
        break;
      default:
        grid_visualisation.style.height = "100vh";
        grid_visualisation.style.top = "0";
        gridContainer.style.alignContent = value;
    }
  });
})(window);

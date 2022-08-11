console.log("Hey Back to School DS23");
let viz;

// Create a variable to store the viz container
// Will then be able to call these things when building
const vizContainer = document.getElementById("vizContainer");

// Create a variable to store the dashboard options
const option = {
  device: "desktop",
  height: "800px",
  width: "1100px",
};

// Create a variable to store the URL of the dashboard
const url =
  "https://public.tableau.com/views/EmbeddingWorkbookProfitsAcrossME-Asia/OfficeSupplyProfitsacrossMEandAsia?";

//tableau.Viz is a call to the books being referenced at the URL in the index.html file
function initViz() {
  viz = new tableau.Viz(vizContainer, url, option);
}

// Listeners go here - once content loaded, initiate the viz
document.addEventListener("DOMContentLoaded", initViz);

// Buttons go here - clickable interactivity!
// Export PDF button options
const exportpdfbutton = document.getElementById("exportPDF");
exportpdfbutton.addEventListener("click", exportPDFfunction);
function exportPDFfunction() {
  viz.showExportPDFDialog();
}

// Export PowerPoint button
const exportppbutton = document.getElementById("exportPP");
exportppbutton.addEventListener("click", exportPPfunction);
function exportPPfunction() {
  viz.showExportPowerPointDialog();
}

// Filter function
document
  .getElementById("filterButton")
  .addEventListener("click", applyfilterfunction);

function applyfilterfunction() {
  console.log("Hello World");
  const minValue = document.getElementById("minValue").value;
  const maxValue = document.getElementById("maxValue").value;
  console.log(minValue, maxValue);
  const workbook = viz.getWorkbook();
  const activeSheet = workbook.getActiveSheet();
  console.log(activeSheet);
  const sheets = activeSheet.getWorksheets();
  console.log(sheets);
  const sheettofilter = sheets[0];
  sheettofilter
    .applyRangeFilterAsync("SUM(Sales)", { min: minValue, max: maxValue })
    .then(alert("viz filtered"));
}

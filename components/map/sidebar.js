var sidebar = L.control.sidebar("sidebar", {
  position: "left",
});

map.addControl(sidebar);

function displaySidebar(sidebarData) {
  // Start with the close button in the sidebar content
  let sidebarContent =
    '<button class="closeButton" type="button" onclick="sidebar.hide()">X</button>';

  if (typeof sidebarData === "object" && sidebarData !== null) {
    // Iterate over each key-value pair in the sidebarData object
    sidebarContent += '<ol style="font-size: 16px;">';
    for (const key in sidebarData) {
      if (sidebarData.hasOwnProperty(key)) {
        sidebarContent += `<br><br><strong>${key}:</strong> ${sidebarData[key]}<br>`;
      }
    }
    sidebarContent += "</ol>";
  }

  sidebar.setContent(sidebarContent);
  sidebar.show();
}

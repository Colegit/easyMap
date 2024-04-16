var sidebar = L.control.sidebar("sidebar", {
  position: "left",
});

map.addControl(sidebar);

function displaySidebar(sidebarData) {
  sidebar.setContent(
    '<button class="closeButton" type="button" onclick=sidebar.hide()>X</button>'
  );
  sidebar.show();
}

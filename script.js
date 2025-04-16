const sidebar = document.getElementById("sidebar");
const newSidebar = document.getElementById("new-sidebar");

// open sidebar table
function openSidebar(event) {
  event.preventDefault();
  if (sidebar) {
    sidebar.classList.add("open");
    // closethe new sidebar if it is open
    if (newSidebar.classList.contains("open")) {
      newSidebar.classList.remove("open");
    }
  } else {
    console.error("Sidebar element not found");
  }
}

// close sidebar table
function closeSidebar(event) {
  if (sidebar) {
    sidebar.classList.remove("open");
  } else {
    console.error("Sidebar element not found");
  }
}

// open new sidebar table
function openNewSidebar(event) {
  event.preventDefault();
  if (newSidebar) {
    newSidebar.classList.add("open");
    // close the sidebar if it is open
    if (sidebar.classList.contains("open")) {
      sidebar.classList.remove("open");
    }
  } else {
    console.error("New sidebar element not found");
  }
}

// close new sidebar table
function closeNewSidebar(event) {
  if (newSidebar) {
    newSidebar.classList.remove("open");
  } else {
    console.error("New sidebar element not found");
  }
}

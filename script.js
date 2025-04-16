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

// close sidebar when clicking outside of it
sidebar.addEventListener("click", (event) => {
  event.stopPropagation();
});

newSidebar.addEventListener("click", (event) => {
  event.stopPropagation();
});

// close sidebar when clicking outside of it
document.addEventListener("click", (event) => {
  const isClickOnDropdown =
    event.target.closest("#tableDropdown") ||
    event.target.closest(".dropdown-menu");
  const isClickOnNewButton = event.target.closest(".btn-new");

  if (sidebar.classList.contains("open")) {
    const isClickOnSidebar = sidebar.contains(event.target);
    if (!isClickOnSidebar && !isClickOnDropdown) {
      closeSidebar(event);
    }
  }
  if (newSidebar.classList.contains("open")) {
    const isClickInsideNewSidebar = newSidebar.contains(event.target);
    if (!isClickInsideNewSidebar && !isClickOnNewButton) {
      console.log("Clicked outside, closing new sidebar");
      closeNewSidebar();
    }
  }
});

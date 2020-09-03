let initialState = { basket: [] };

// Initialisation
if (
  sessionStorage.getItem("store.state") === null ||
  sessionStorage.getItem("store.state").length === 0
) {
  sessionStorage.setItem("store.state", JSON.stringify(initialState));
}

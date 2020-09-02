let initialState = {
  basket: [
    {
      id: 0,
      product: {
        id: 1,
        name: "iPhone X",
        price: "899€",
        imgURL:
          "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTW8BEYHyqthct0rn2fkqo-Ud7yJqe-JzrWZIiz3Q3sSqLHb4Kb5u4&usqp=CAc",
        category: "Smartphones",
        tags: "Quality, Ergonomy",
      },
      quantity: 2,
    },
  ],
};

export function initSessionStorage() {
  if (
    typeof sessionStorage !== "undefined" &&
    (sessionStorage.getItem("store.state") === null ||
      sessionStorage.getItem("store.state").length === 0)
  ) {
    sessionStorage.setItem("store.state", JSON.stringify(initialState));
  }
}

export function syncSessionStorage(state) {
  sessionStorage.setItem("store.state", JSON.stringify(state));
}

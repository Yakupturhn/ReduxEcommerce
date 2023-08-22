export const searchAction = (keyword) => async (dispatch) => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    dispatch({
      type: "SEARCH",
      payload: data.filter(
        (dt) =>
          dt.title.includes(keyword) ||
          dt.description.includes(keyword) ||
          dt.category.includes(keyword)
      ),
    });
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};

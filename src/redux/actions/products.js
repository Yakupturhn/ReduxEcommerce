export const getProducts = () => async (dispatch) => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    dispatch({ type: "GET_PRODUCTS", payload: data });
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};

export const productsActionDetail = (id) => async (dispatch) => {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    dispatch({ type: "GET_DETAILS", payload: data });
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};

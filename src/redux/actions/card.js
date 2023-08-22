export const productsCard = (id, quantity) => async (dispatch, getState) => {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    dispatch({
      type: "ADD_CARD",
      payload: {
        id: data.id,
        image: data.image,
        title: data.title,
        description: data.description,
        price: data.price,
        qty: quantity,
      },
    });
    const {
      card: { cardItems },
    } = getState();

    localStorage.setItem("cardItems", JSON.stringify(cardItems));
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};

export const removeCart = (productId) => (dispatch, getState) => {
  dispatch({ type: "REMOVE_CARD", payload: productId });
  const {
    card: { cardItems },
  } = getState();
  localStorage.setItem("cardItems", JSON.stringify(cardItems));
};

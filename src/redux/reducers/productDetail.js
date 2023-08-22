export const productsDetail = (state = { products: {} }, action) => {
  switch (action.type) {
    case "GET_DETAILS":
      return {
        ...state,
        products: action.payload,
      };

    default:
      return state;
  }
};

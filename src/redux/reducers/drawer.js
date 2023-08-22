const initialState = {
  drawer: false,
};

export const drawerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DRAWER":
      return {
        ...state, // Mevcut state'in tüm özelliklerini kopyala
        drawer: action.payload,
      };

    default:
      return state; // varsayılan olarak başlangıç durumunu döndür
  }
};

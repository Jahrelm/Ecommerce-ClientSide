import * as types from "../constants/action-types";

const initialState = {
  cart: [],
  loading: false,
  error: null,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_CART_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case types.FETCH_CART_SUCCESS:
      return {
        ...state,
        loading: false,
        cart: action.payload,
      };

    case types.FETCH_CART_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case types.ADD_TO_CART_SUCCESS: {
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        const updatedCart = state.cart.map((item) =>
          item.id === action.payload.id
            ? {
                ...item,
                quantity: item.quantity + action.payload.quantity,
                totalCost: (
                  parseFloat(item.price) *
                  (item.quantity + action.payload.quantity)
                ).toFixed(2),
              }
            : item
        );
        return { ...state, cart: updatedCart };
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }],
        };
      }
    }

    case types.ADD_TO_CART_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case types.DELETE_FROM_CART_SUCCESS: {
      return {
        ...state,
        cart: state.cart.filter((product) => product.id !== action.payload),
      };
    }
    case types.CHECKOUT_SUCCESS:
      return {
        ...state,
        loading: false,
        stripeSession: action.payload,
      };

    case types.CHECKOUT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case types.CLEAR_CART_SUCCESS:
    case types.SIGN_UP_SUCCESS:
      return {
        ...state,
        cart: [],
        loading: false,
        error: null,
      };

    case types.CLEAR_CART_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default cartReducer;

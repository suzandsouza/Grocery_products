// export const initialState={
//     basket:[],
//     user : JSON.parse(localStorage.getItem("user")),
//     address: {},
// }

// export const getBasketTotal = (basket)=>
//     basket.reduce((amount,item)=>item.price+amount,0)

// const reducer = (state,action)=>{
//     console.log('action performed is: -> ',action)
//     //make the switch block
//     switch(action.type){
//         case "ADD_TO_BASKET":
//             return{
//                 ...state,
//                 basket:[...state.baske, action.item],
//             }
        
//         case "REMOVE_FROM_BASKET":
//             const index = state.basket.findIndex(
//                 (basketItem)=>basketItem.id === action.id       //try to match the basket item + the one in the local storage

//             )
//             let newBasket = [...state.basket]
//             if(index>=0){
//                 newBasket.splice(index,1);  //splice i.e remove that index item from the baset
//             }
//             else{
//                 console.warn(`can't remove item with it ${index}`)
//             }
//             return{
//                 ...state,
//                 basket: newBasket,
//             }

//             case 'SET_ADDRESS':
//                 return{
//                     ...state,
//                     address:{ ...action.item},
//                 }
//             case 'SET_USER':
//                 return{
//                     ...state,
//                     user: action.user,
//                 }
//             case 'EMPTY_BASKET':
//                 return{
//                     ...state,
//                     basket: [],
//                 };
//             default:
//                 return state
//     }
// }


// export default reducer

export const initialState = {
  basket: [],
  user: JSON.parse(localStorage.getItem("user")),
  address: {},
};

export const getBasketTotal = (basket) =>
  basket.reduce((amount, item) => item.price+amount.price,0);

const reducer = (state, action) => {
  console.log("action >>>>", action);

  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(`
          can't remove product whose id is ${index}
          `);
      }

      return {
        ...state,
        basket: newBasket,
      };

    case "SET_ADDRESS":
      return {
        ...state,
        address: { ...action.item },
      };

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
      
//after sucessful payment
    case "EMPTY_BASKET":
      return {
        ...state,
        basket: [],
      };
    default:
      return state;
  }
};

export default reducer;
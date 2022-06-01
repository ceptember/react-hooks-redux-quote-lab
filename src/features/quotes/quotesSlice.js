// Action Creators
// TODO: Create action creators as defined in tests

export function addQuote(quote){
  return {
    type: "quotes/add",
      payload: quote,
    };
}; 

export function removeQuote(quoteId){
  return {
    type: "quotes/remove",
    payload: quoteId,
  }
};

export function upvoteQuote(quoteId){
  return {
    type: "quotes/upvote",
    payload: quoteId,
  }
};

export function downvoteQuote(quoteId){
  return {
    type: "quotes/downvote",
    payload: quoteId,
  }
};



// Reducer
const initialState = [];

export default function quotesReducer(state = initialState, action) {

  switch(action.type){
    case "quotes/add":
      return [...state, action.payload]; 
    case "quotes/remove":
      return state.filter( x => x.id != action.payload);
    case "quotes/upvote":
      let quote_up = state.find( x => x.id == action.payload)
      quote_up.votes += 1; 
      return [...state.filter( x => x.id != action.payload), quote_up]; 
    case "quotes/downvote":
      let quote_down = state.find( x => x.id == action.payload)
      if (quote_down.votes > 0){
        quote_down.votes -= 1; 
        return [...state.filter( x => x.id != action.payload), quote_down]; 
      }
      else{
        return state; 
      }
    default:
      return state;
  }


  
}

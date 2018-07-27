
let initialstate = { data: []};
 
export const FormReducer = (state = initialstate, action) => {
  switch (action.type) {
       
    case 'SAVE':
     const arraynew =  state.data.concat(action.obj);
   //  alert(action.obj.first +  " " + action.obj.last);
   // alert(arraynew[0].first);
        return {
          ...state,
          data : arraynew,
        }
    case 'EDIT':
        // console.log(state.data[action.index].first +" State before #####");
        // console.log(state.data[action.index].last +" State before #####");
        // console.log(action.obj.first   +" action #####");
        // console.log(action.obj.last   +" action #####");
        state.data[action.index]= action.obj;
        // console.log(state.data[action.index].first  +" action #####");
        // console.log(state.data[action.index].last +" State before #####");
        return state;
    case 'DELETE' :
        return {
          data : action.arraynew,
          }
    default:
        return state;
  }
};
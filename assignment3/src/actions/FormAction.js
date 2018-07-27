
import {Alert} from 'react-native';

export function save(obj){
 //  alert(obj);
    return (dispatch) => {

        dispatch({type : 'SAVE',obj});
        
    };
}

export function edit(obj,index){
  //  alert(index);
  console.log(obj.first+" Action OBJ");
  console.log(obj.last+ " Action OBJ");
    return (dispatch) => {
        dispatch({type : 'EDIT',obj,index});
    }
}


export function deletedata(arraynew){
        return (dispatch) => {
            dispatch({type : 'DELETE',arraynew});
        }
}
import React, {Component} from 'react';
import {View, Text,StyleSheet,Image,FlatList,TouchableOpacity} from 'react-native'
import * as Actions from '../actions/FormAction';
import {connect} from 'react-redux';
import store from '../store/assignment3_store';
import { bindActionCreators } from 'redux';

 class Formshow extends Component{
    constructor(props){
            super(props);
           state = {
               refreshing : false,
           } 
    }
    
  render() {
    
      
     
    return (
    <View>
        <FlatList 
        data ={this.props.data}
        renderItem ={ ({item, index})=>{
            return (
                <View style ={styles.element1}>
                <View style = {styles.text1}>
                    <Text >
                        {item.first}
                    </Text>
                </View>
                <View style = {styles.text2}>
                    <Text >
                        {item.last}
                    </Text>
                </View>
                <View>
                    <TouchableOpacity onPress = {()=>this.onclic(index)}> 
                        <Image  
                            style={styles.text3}
                            source={require('../images/editicon.jpg')}/>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity onPress = {()=>this.onclic2(index)}>
                        <Image style={styles.text3}
                            source={require('../images/cancelbtn.jpg')}/>
                    </TouchableOpacity>
                </View>
                </View>
                
                );
            }}>
        </FlatList>
        
    </View>
    );
    //didBlurSubscription.remove();
  }
  onclic(index) {

    
      const {
        navigate 
       } = this.props.navigation;
     navigate('FormScreen',{index});
  }
  onclic2(index){
        //alert(this.props.data);
        const arraynew = this.props.data.slice();
        arraynew.splice(index,1);
        // alert(arraynew[index]);
        this.props.deletedata(arraynew);
  }
}

function mapDispatchToProps(dispatch) {

    return bindActionCreators(Actions, dispatch);
    
  }
  function mapStateToProps(state) {
 
     const arraynew = state.FormReducer.data;   
    return {
        data : arraynew
         
    }
    }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Formshow);
  
  
const styles = StyleSheet.create({
container: {
    flex : 1,
   // justifyContent: 'center',
    backgroundColor : '#3c4577',
    // alignItems: 'center',
},
element1 : {
   // flex : 0.1,
    flexDirection : 'row',
    backgroundColor : 'white',
    padding : 10,
    borderColor: 'black',
    borderWidth: 1,
    
},
text1 : {
    fontSize : 17,
    padding: 20,
    width : 120,

},
text2 : {
    fontSize : 17,
    padding : 20,
    width : 120,

},
text3 : {
    height : 7,
    width : 7,
    padding : 20,
    margin:20
},
});

import React, {Component} from 'react';
import {View,Text,StyleSheet,TextInput,TouchableOpacity} from 'react-native';
import {Provider} from 'react-redux'; 

import { bindActionCreators } from 'redux';
import * as Actions from '../actions/FormAction';
import {connect} from 'react-redux';

//import Navigator from './src/navigator/navigator';
//import FormHome from './src/components/FormHome';
//import store from './src/store/assignment3_store';
 class FormScreen extends Component{
  constructor(props){
    super(props);
    state = {
      input1 : '',
      input2 : '',

    }
  }

componentWillMount(){
  const index = this.props.navigation.state.params.index;
  const i = this.props.data[index].first
  const j = this.props.data[index].last
  this.setState({input1: i, input2 : j});
}

  
  render() {
    const index = this.props.navigation.state.params.index;
      return (
      <View style={styles.container}>
        <View style = {styles.input1_container}>
       <View style = {styles.containerchild1}>
        <Text style= {styles.firstname}>
          First Name :
          </Text>
          <TextInput style={styles.input1}
              value={this.state.input1}
              onChangeText={ (input1) => this.setState({input1})}
             // value = {this.state.input1}
          />
        </View>
        <View style = {styles.containerchild2}>
        <Text style = {styles.lastname}>
        Last Name :
          </Text >
          <TextInput
              style={styles.input2}
              value={this.state.input2}
              onChangeText={(input2 )=> this.setState({input2})}
          />
          </View>
        </View>
        <View style = {styles.btn1_container}>
          <TouchableOpacity style={styles.btn1}
              onPress={()=>this.onclic(index)}>
              <Text style = {styles.OKbtn}>
                  OK
              </Text>
          </TouchableOpacity>
          
        </View>
        
      </View>
    );
  }
  onclic(index){
     let a = this.state.input1;
    let b = this.state.input2;
   let obj = {
    first : a,
    last : b
    }
    this.props.edit(obj,index);
    const { navigate } = this.props.navigation;
   // const { push } = this.props.navigation;
   // const { reset } = this.props.navigation;
  // push('Formshow', "helloFromHome");
  navigate('Formshow', "helloFromHome");
//     reset({
//     index: 0,
//     key: null,
//     actions: [push({ routeName: 'ParentStackScreen' })]
// })
    //alert("Saved");
  }
}

function mapDispatchToProps(dispatch) {

  return bindActionCreators(Actions, dispatch);
  
}
function mapStateToProps(state) {
    const FormReducer = state.FormReducer;
  return {
         data :  FormReducer.data
  }
  }

export default connect(mapStateToProps, mapDispatchToProps)(FormScreen);
const styles = StyleSheet.create({
  container : {
            flex: 1,
            // justifyContent: 'center',
             alignItems: 'center',
             backgroundColor : '#D6EEDA',
      },
      input1_container : {
        //  backgroundColor : 'white'
      },
      containerchild1 : {
          flexDirection : 'row',
          marginTop : 50,
      },
    containerchild2 : {
        flexDirection : 'row',
        marginTop  : 20,
    },
    btn1_container : {
      flexDirection : 'row',
      marginTop : 40,
    },
    input1 : {
              height: 50,
              width : 180, 
              borderColor: 'black',
              borderWidth: 1,
              backgroundColor : 'white',
              borderRadius : 8,
              },
    input2 : {
                height: 50,
                width : 180, 
                borderColor: 'black',
                borderWidth: 1,
                backgroundColor : 'white',
                borderRadius : 8,
      },
      firstname : {
        padding : 20,
      },
      lastname : {
        padding : 20,
      },
      OKbtn : {
        // padding : 20,
        // backgroundColor : 'teal',
        // marginRight : 10,
        // borderRadius : 10,
      },
      NEXTbtn : {
        // padding : 20,
        // backgroundColor : 'teal',
      },
      btn1 : {
        paddingLeft : 20,
        paddingTop : 5,
        paddingRight : 20,
        paddingBottom : 5,
        borderRadius : 8,
        backgroundColor : 'teal',
        marginRight : 10,
      },
      btn2 : {
        paddingLeft : 20,
        paddingTop : 5,
        paddingRight : 20,
        paddingBottom : 5,
        backgroundColor : 'teal',
        borderRadius : 8,
      }
});
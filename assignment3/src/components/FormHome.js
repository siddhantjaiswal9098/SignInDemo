
import React, {Component} from 'react';
import {TouchableOpacity, Text, View,TextInput,StyleSheet,Image} from 'react-native';
//import {StackNavigator} from 'react-navigation';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions/FormAction';
import {connect} from 'react-redux';


class FormHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data : [], 
      input1 : "",
      input2 : "",
    };
  }

  
  render() {
 //   alert(this.input1);
    // if(this.input1 == undefined || this.input2 == undefined)
    // {
    //   alert("Please Enter All the Values.");
    // }
    return (
      <View style={styles.container}>
       <Image style={{width: 100, height: 100,alignContent : 'center',marginTop: 40}}
              source={require('../images/user.png')}/>
        <View style = {styles.input1_container}>
       
       <View style = {styles.containerchild1}>
        <Text style= {styles.firstname}>
          First Name :
          </Text>
          <TextInput 
          style={styles.input1} 
          editable = {true}
          maxLength = {30}
          key = 'idTextInput1'
             // placeholder="First Name"
              onChangeText={ input1 => this.setState({input1})}
              value = {this.state.input1}
          />
        </View>
        <View style = {styles.containerchild2}>
        <Text style = {styles.lastname}>
        Last Name  :
          </Text >
          <TextInput
              style={styles.input2}
              editable = {true}
              key = 'idTextInput'
              maxLength = {20}
            //  placeholder="Last Name"
              onChangeText={ input2 => this.setState({input2})}
              value = {this.state.input2}
          />
          </View>
        </View>
        <View style = {styles.btn1_container}>
          <TouchableOpacity style={styles.btn1}
              onPress={()=>this.onclic()}>
              <Text style = {styles.OKbtn}>
                  Save
              </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn1}
              onPress={()=>this.onclic1()}>
              <Text style = {styles.NEXTbtn}>
                  Next
              </Text>
          </TouchableOpacity>
          
        </View>
        
      </View>
    );
  }
 
  onclic(){
    
    const a = this.state.input1;
    const b = this.state.input2;
    if(a=='' || b==''){
      alert("Please Enter All the Values");
    }
    else{

      
     // this.state.input1 = ''
     // this.state.input2 = ''
      this.setState({input1:''})
      this.setState({input2:''})
   const obj = {
    first : a,
    last : b
    }
    this.props.save(obj);
    alert("Data Added Successfully..!!!")
  } 
  }
  onclic1(){
    const { navigate } = this.props.navigation;
    navigate('Formshow', "helloFromHome");
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

export default connect(mapStateToProps, mapDispatchToProps)(FormHome);




const styles = StyleSheet.create({
  container : {
            flex: 1,
             alignItems: 'center',
             backgroundColor : '#D6EEDA',
      },
      input1_container : {

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
              fontSize: 20,
              },
    input2 : {
                height: 50,
                width : 180, 
                borderColor: 'black',
                borderWidth: 1,
                backgroundColor : 'white',
                borderRadius : 8,
              fontSize: 20,
      },
      firstname : {
        padding : 20,
        fontFamily: 'Cochin',
      },
      lastname : {
        padding : 20,
        fontFamily: 'Cochin',
      },
      OKbtn : {
        
        fontSize : 20,
      },
      NEXTbtn : {
        
        fontSize : 20,
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




// const styles = StyleSheet.create({
//   container : {
//         flex: 1,
//      //   flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor : '#3c4577'
//   },
//   input1_container : {
//         flex : 3,
//         justifyContent : 'flex-end',
//         flexDirection:'row',
//         marginTop : 230,
//         alignItems : 'baseline',

//   },
//   firstname : {
//         fontSize : 20,
//         marginRight : 30,
//   },
//   input1 : {

//         height: 50,
//         width : 180, 
//         borderColor: 'black',
//         borderWidth: 1,
//         backgroundColor : 'white',
        
//   },
//   NEXTbtn : {
//       fontSize : 20,
//   },
//   OKbtn : {
//       fontSize : 20,
//   },
//   input2_container : {
//         flex : 2,
//         justifyContent : 'flex-start',
//         flexDirection:'row',
//         marginTop: 0,
//   },
//   lastname : {
//     fontSize : 20,
//     marginRight : 30,
// },
//   input2 : {
//         height: 50,
//         width : 180,
//         borderColor: 'black', 
//         borderWidth: 1,
//         backgroundColor : 'white'
//   },
//   btn1_container : {
//         flex : 6,
//         flexDirection:'row',
//         //  flexWrap:'wrap'
//   },
//   btn1 : {
//         height: 40,
//         width : 80,
//         color: 'black',
//        // fontSize: 120,
//         backgroundColor: 'gray',
//         borderWidth: 1,
//         marginTop: 50,
//         marginLeft : 20,
//   }
// });

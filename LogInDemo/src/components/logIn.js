import React, { Component } from 'react';
import {StyleSheet,Text,View,PixelRatio,TouchableOpacity,Image,TextInput} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/SimpleLineIcons';
import {connect} from 'react-redux';
import * as Actions from '../actions/actionSignupPage'
import {bindActionCreators} from 'redux';

const userIcon = (<Icon name="user-o" size={30} color="#000" />)
const lockIcon = (<Icon1 name="lock" size={30} color="#000" />)


class logIn extends Component {
      constructor(props){
        super(props);
      }
      
    state = {
 
      ImageSource: null,
      email : '',
      password : '',
      name : '',
      lname : '',
    
    };
  
    selectPhotoTapped() {
      const options = {
        quality: 1.0,
        maxWidth: 500,
        maxHeight: 500,
        storageOptions: {
          skipBackup: true
        }
      };
  
      ImagePicker.showImagePicker(options, (response) => {
        console.log('Response = ', response);
  
        if (response.didCancel) {
          console.log('User cancelled photo picker');
        }
        else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        }
        else if (response.customButton) {
          console.log('User tapped custom button: ', response.customButton);
        }
        else {
          let source = { uri: response.uri };
  
          this.setState({
 
            ImageSource: source
 
          });
        }
      });
    }
  
    render() {
     const data = this.props.data;
       return (
        <View style={styles.container}>
          <Text style = {styles.registration} >
            LOGIN SCREEN
          </Text>
          <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
            <View style={styles.ImageContainer}>
              { this.state.ImageSource === null ? <Text></Text> :
              <Image style={styles.ImageContainer} source={this.state.ImageSource} />
              }
            </View>
          </TouchableOpacity>
            <Text style = 'styles.text1'></Text>
            <View style = {styles.inlineView}>
              <View style = {styles.viewfont}>
              {userIcon}
              </View>
              <TextInput
              style={styles.inputfield}
              //  onChangeText={(text) => this.setState({text})}
              value= {this.props.data.email}
              placeholder='SomeUser@gmail.com'/>
            </View>
            <View style = {styles.inlineView}>
              <View style = {styles.viewfont}>
                {lockIcon}
              </View>
              <TextInput
                style={styles.inputfield}
                //  onChangeText={(text) => this.setState({text})}
                value= {this.props.data.password}
                placeholder='*********'/>
            </View>
            <LinearGradient
          colors={['#00DBBE', '#00E6B4', '#00F8B4']}
          style={{ padding: 15, alignItems: 'center',paddingLeft : 80,paddingRight : 80,      marginTop : 40,  shadowColor: '#000',
          shadowOffset: { width: 0, height: 0 },
          shadowOpacity: 0.5,
          shadowRadius: 8,}}>
          <Text
            style={{
              backgroundColor: 'transparent',
              fontSize: 15,
              color: '#fff',
            }}>
            Create Account
          </Text>
        </LinearGradient>
        <TouchableOpacity onPress= {() => this.alreadyUser()} >
        <Text style = {styles.signinbtn}>
                Already have an Account
            </Text>
        </TouchableOpacity>
        </View>
           
      );
    }
  alreadyUser(){
    alert("abhi ye ni kia");
  }
  }
   
function mapDispatchToProps(dispatch) {

  return bindActionCreators(Actions, dispatch);
  
}
function mapStateToProps(state) {
    const ReducerSignupPage = state.ReducerSignupPage;  
  return {
         data :  ReducerSignupPage.data
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(logIn);
  

const styles = StyleSheet.create({
 
    container: {
      flex: 1,
   //  justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FCFFFE'
      
    },
    registration : {
      marginTop : 30,
      fontSize : 23,
      marginBottom : 30,
    },
    ImageContainer: {
      borderRadius: 80,
      width: 160,
      height: 160,
      backgroundColor: '#00F1B8',
      borderColor: '#00F1B8',
      borderWidth: 1 / PixelRatio.get(),
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#DFEAE5',
      borderWidth : 12, 
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: .5,
      shadowRadius: 12, 
     // marginBottom : 30,
      
    },
    inputfield : {
      height: 45,
      width : 200,
      // borderColor: 'black', 
      // borderWidth: 1,
      borderBottomColor: 'gray',
        borderBottomWidth: 1,
        
    },
    createAccount : {
        padding: 20,
        paddingLeft : 100,
        paddingRight : 100,
        marginTop : 40,
        backgroundColor: 'transparent',
        //backgroundColor : '#00F1B8',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 8,
        color : 'white',
    },
    signinbtn : {
      marginTop : 30,
    },
    text1 : {
      marginTop : 30,
    },
    inlineView : {
      flexDirection : 'row',
      marginTop : 8,
    },
    viewfont : {
      marginTop : 10  ,
      marginRight : 4,
    //  borderBottomColor: 'gray',
    //  borderBottomWidth: 1,
      },
      radiobtnview : {
        flexDirection : 'row',
        marginTop : 20,
      //  selectedButtonColor='#757171',
       // backgroundColor : '#00F1B8',
       
      },
  });
 
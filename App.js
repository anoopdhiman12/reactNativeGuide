

import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';


export default class App extends Component {
  state = {
    placeName: "",
    places: []
  }

  placeNameChangedHandler = (val) => {
    this.setState({
      placeName: val
    })
  }

  placeSubmitHandler = () => {
    
    if(this.state.placeName.trim() === "") {
      return
    }
    //alert(this.state.placeName.trim())
    this.setState(prevState => {
      return {
        places: prevState.places.concat(prevState.placeName)
      }
    })
  }

  render() {
    const placeOutput  = this.state.places.map((place, i) => (
      <Text key={i}>{place}</Text>
    ))
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput 
          style={styles.placeInput}
          value={this.state.placeName}
          onChangeText={this.placeNameChangedHandler}
          placeholder='Add Awsome Places'
          />
        <Button 
        title="Add"
        style={styles.placeButton}
        onPress={this.placeSubmitHandler}
        />
        </View>
        <View>
          {placeOutput}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  inputContainer: {
    //flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  placeInput: {
    width: "70%"
  },
  placeButton:{
    width:"30%"
  }
  
});

import React from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { RNS3 } from 'react-native-aws3';

export default class App extends React.Component {

  takePic(){
    ImagePicker.showImagePicker({}, (response) => {
      console.log(response)
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to AWS s3 Uploader
        </Text>
        <TouchableOpacity onPress={this.takePic.bind(this)}>
          <Text>Take Picture</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

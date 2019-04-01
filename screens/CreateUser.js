import React from 'react';
import { ScrollView, StyleSheet, TextInput, Text } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { Button, Card  } from 'react-native-material-ui';
import axios from 'axios';

export default class CreateUser extends React.Component {
  static navigationOptions = {
    title: 'Create User',
  };

  constructor(props){
    super(props);
    this.state = {
      name: '',
      job: '',
      response: {
        id: '',
        name: '',
        job: '',
        createdAt: '',
      }
    }
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <TextInput
          style={{height: 40}}
          placeholder="Name"
          onChangeText={(text) => this.setState({name:text})}
        />
        <TextInput
          style={{height: 40}}
          placeholder="Job"
          onChangeText={(text) => this.setState({job:text})}
        />
        <Button raised primary text="Create now!" onPress={this.create.bind(this)} />
        <Card style={styles.result}>
          <Text>ID: {this.state.response.id}</Text>
          <Text>Name: {this.state.response.name}</Text>
          <Text>Job: {this.state.response.job}</Text>
          <Text>Date Crated: {this.state.response.createdAt}</Text>
        </Card>
      </ScrollView>
    );
  }

  create(){
    axios.post('https://reqres.in/api/user',{
        "name": this.state.name,
        "job": this.state.job
    }).then(function (response) {
      this.setState({ response: {
        id: response.data.id,
        name: response.data.name,
        job: response.data.job,
        createdAt: response.data.createdAt
      }})
      alert('Success!');
    }.bind(this)).catch(function (error) {
      // console.log(error);
      alert('error');
    });
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: '#fff',
  },
  result: {
    paddingLeft: 15,
    paddingRight: 15,
  }
});

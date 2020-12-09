import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  FlatList
} from 'react-native';

import { EvilIcons } from '@expo/vector-icons';
import skillData from './skillData.json';
import SkillProcess from './components/SkillProcess';

export default class SkillScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.droidSafeArea}>
        <View style={styles.container}>
          <Image source={require('./images/logo.png')} style={{width: 187.5, height: 51, marginLeft: 187}} />

          <View style={styles.user}>
            <EvilIcons name="user" size={26} color="black" style={{marginTop: 4, marginLeft: 3, color: '#3EC6FF'}} />
            <View style={{marginLeft: 11}}>
              <Text style={{fontSize: 12, color: '#003366'}}>Hai,</Text>
              <Text style={{fontSize: 16, color: '#003366'}}>Thomas Felix</Text>
            </View>
          </View>

          <Text style={{fontSize: 36, color: '#003366', marginLeft: 16}}>SKILL</Text>
          <View style={styles.border}></View>

          <View style={styles.category}>
            <View style={styles.subCategory}>
              <Text style={styles.subCategoryText}>Library / Framework</Text>
            </View>
            <View style={styles.subCategory}>
              <Text style={styles.subCategoryText}>Bahasa Pemrograman</Text>
            </View>
            <View style={styles.subCategory}>
              <Text style={styles.subCategoryText}>Teknologi</Text>
            </View>
          </View>

          <FlatList
            data={skillData.items}
            renderItem={(skill) => <SkillProcess skill={skill} />}
            keyExtractor={(item) => item.id}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: 'Roboto'
  },

  droidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === 'android' ? 25 : 0
  },

  user: {
    marginTop: 3,
    marginLeft: 16,
    marginBottom: 16,
    flexDirection: 'row'
  },

  border: {
    borderBottomColor: '#3EC6FF',
    marginLeft: 16,
    marginRight: 16,
    marginBottom: 10,
    borderBottomWidth: 4
  },

  category: {
    marginLeft: 16,
    marginRight: 16,
    marginBottom: 10,
    flexDirection: 'row'
  },

  subCategory: {
    backgroundColor: '#B4E9FF',
    borderRadius: 6,
    marginHorizontal: 5
  },

  subCategoryText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#003366',
    marginTop: 9,
    marginBottom: 9,
    marginLeft: 8,
    marginRight: 8
  }
});
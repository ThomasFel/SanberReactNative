import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  SafeAreaView
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import VideoItem from './components/videoItem';
import data from './data.json';

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.droidSafeArea}>
      <View style={styles.container}>
        <View style={styles.navBar}>
          <Image source={require('./images/logo.png')} style={{width: 98, height: 22}} />
          <View style={styles.rightNav}>
            <TouchableOpacity>
              <Icon style={styles.navItem} name="videocam" size={25} />
            </TouchableOpacity>

            <TouchableOpacity>
              <Icon style={styles.navItem} name="search" size={25} />
            </TouchableOpacity>
            
            <TouchableOpacity>
              <Icon style={styles.navItem} name="account-circle" size={25} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.body}>
          <FlatList 
            data={data.items}
            renderItem={(video) => <VideoItem video={video.item}/>}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={() => <View style={{height: 0.5, backgroundColor: '#E5E5E5'}} />}
          />
        </View>
        <View style={styles.tabBar}>
          <TouchableOpacity style={styles.tabItem}>
            <Icon name="home" size={24} />
            <Text style={styles.tabTitle}>Beranda</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.tabItem}>
            <Icon name="explore" size={24} />
            <Text style={styles.tabTitle}>Eksplorasi</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.tabItem}>
            <Icon name="subscriptions" size={24} />
            <Text style={styles.tabTitle}>Subscription</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.tabItem}>
            <Icon name="notifications" size={24} />
            <Text style={styles.tabTitle}>Notifikasi</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.tabItem}>
            <Icon name="video-library" size={24} />
            <Text style={styles.tabTitle}>Koleksi</Text>
          </TouchableOpacity>
        </View>
      </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  navBar: {
    height: 55,
    backgroundColor: 'white',
    elevation: 3,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  rightNav: {
    flexDirection: 'row'
  },
  navItem: {
    marginLeft: 25
  },
  body: {
    flex: 1
  },
  tabBar: {
    backgroundColor: 'white',
    height: 50,
    borderTopWidth: 0.5,
    borderColor: '#E5E5E5',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  tabTitle: {
    fontSize: 10,
    color: '#3C3C3C',
    paddingTop: 1
  },
  droidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === 'android' ? 25 : 0
  }
});
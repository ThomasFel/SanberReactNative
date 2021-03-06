import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView
} from 'react-native';

import { EvilIcons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class RegisterScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.droidSafeArea}>
        <View style={styles.container}>
          <Text style={styles.title}>Tentang Saya</Text>
          <View style={styles.profile}>
            <EvilIcons name="user" size={200} color="black" style={{marginBottom: 24}}/>
            <Text style={styles.userTitle}>Thomas Felix</Text>
            <Text style={styles.jobTitle}>React Native Developer</Text>
          </View>
          <View style={styles.portofolio}>
            <Text style={styles.boxTitle}>Portofolio</Text>
            <View style={styles.border}></View>
            <View style={styles.portofolioIcon}>
                <View style={styles.iconGitlab}>
                    <Icon style={styles.gitIcon} name="gitlab" size={40} />
                    <Text style={styles.textIcon}>@ThomasFelix</Text>
                </View>
                <View style={styles.iconGithub}>
                    <Icon style={styles.gitIcon} name="github" size={40} />
                    <Text style={styles.textIcon}>@ThomasFel</Text>
                </View>
            </View>
          </View>
          <View style={styles.contact}>
            <Text style={styles.boxTitle}>Hubungi Saya</Text>
            <View style={styles.border}></View>
            <View style={styles.iconFacebook}>
                <Icon style={styles.socIcon} name="facebook-official" size={40} />
                <Text style={styles.textIcon}>Thomas Felix</Text>
            </View>
            <View style={styles.iconInstagram}>
                <Icon style={styles.socIcon} name="instagram" size={40} />
                <Text style={styles.textIcon}>@thomas.felix</Text>
            </View>
            <View style={styles.iconTwitter}>
                <Icon style={styles.socIcon} name="twitter" size={40} />
                <Text style={styles.textIcon}>@ThomFel</Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    fontFamily: 'Roboto'
  },

  droidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === 'android' ? 25 : 0
  },

  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#003366',
    textAlign: 'center',
    marginTop: 64,
    marginBottom: 12
  },

  profile: {
    justifyContent: 'center',
    alignItems: 'center'
  },

  userTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#003366',
    textAlign: 'center',
    marginBottom: 8
  },

  jobTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#3EC6FF',
    textAlign: 'center',
    marginBottom: 16
  },

  portofolio: {
      width: 359,
      height: 140,
      borderRadius: 16,
      backgroundColor: '#EFEFEF',
      marginBottom: 9
  },

  boxTitle: {
    fontSize: 18,
    paddingTop: 5,
    paddingLeft: 8,
    paddingBottom: 8,
    color: '#003366'
  },

  border: {
      borderBottomWidth: 1,
      marginLeft: 8,
      marginRight: 8,
      width: 343
  },

  portofolioIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 19.69
  },
  
  gitIcon: {
    color: '#3EC6FF'
  },

  textIcon: {
    fontSize: 16,
    marginTop: 11,
    marginBottom: 17,
    fontWeight: 'bold',
    color: '#003366'
  },

  iconGitlab: {
    marginRight: 60,
    justifyContent: 'center',
    alignItems: 'center'
  },

  iconGithub: {
    marginLeft: 60,
    justifyContent: 'center',
    alignItems: 'center'
  },

  contact: {
    width: 359,
    height: 251,
    borderRadius: 16,
    backgroundColor: '#EFEFEF',
  },

  socIcon: {
    color: '#3EC6FF',
    marginRight: 19
  },

  iconFacebook: {
    marginLeft: 89.81,
    marginTop: 18.81,
    flexDirection: 'row'
  },

  iconInstagram: {
    marginLeft: 89.81,
    marginTop: 29.62,
    flexDirection: 'row'
  },

  iconTwitter: {
    marginLeft: 89.81,
    marginTop: 29.62,
    marginTop: 21.62,
    flexDirection: 'row'
  }
});
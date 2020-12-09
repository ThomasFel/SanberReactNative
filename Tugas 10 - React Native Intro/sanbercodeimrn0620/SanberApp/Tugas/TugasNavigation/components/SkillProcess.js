import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  SafeAreaView
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function SkillProcess(props) {
    return (
      <SafeAreaView style={styles.droidSafeArea}>
        <View style={styles.container}>
            <Icon style={{marginLeft: 5}}name={props.skill.item.iconName} size={80} color="#003366" />
            <View style={{flex: 1, marginLeft: 29.69, marginTop: 13, marginBottom: 8}}>
                <Text style={{fontSize: 24, fontWeight: 'bold', color: '#003366'}}>{props.skill.item.skillName}</Text>
                <Text style={{fontSize: 16, fontWeight: 'bold', color: '#3EC6FF'}}>{props.skill.item.categoryName}</Text>
                <Text style={{fontSize: 48, fontWeight: 'bold', color: '#FFFFFF', alignSelf: 'flex-end', marginTop: -10}}>{props.skill.item.percentageProgress}</Text>
            </View>
            
            <Icon name="chevron-right" size={80} color="#003366" />
        </View>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: 'Roboto',
    flexDirection: 'row',
    backgroundColor: '#B4E9FF',
    borderRadius: 8,
    alignItems: 'center',
    elevation: 5,
    justifyContent: 'space-around',
    marginLeft: 14,
    marginRight: 18,
    marginBottom: 8
  },

  droidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === 'android' ? 25 : 0
  },
});
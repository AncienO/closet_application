import React from 'react';
import {View, StyleSheet, Text, SafeAreaView} from 'react-native';

function LaunchScreen(props) {
    return (
        <View style={styles0.color}>
          <View style={styles2.color2}/>
          <View style={styles1.color1}/>
          <View style={styles2.color2}/>
    
          <View style={styles1.closet}>
            <Text style={closet.closets} numberOfLines={1}>
              Closet
            </Text>
          </View>
    
          <View style={styles2.color2}/>
          <View style={styles1.color1}/>
          <View style={styles2.color2}/>
    
        </View>
    ); 
}
    
    
const styles = StyleSheet.create({
    container: {
        
    }
});
    
const styles0 = StyleSheet.create({
    color:{
    backgroundColor: '#fff',
    flex: 1,
    flexDirection: 'row',
    }
});
    
const styles1 = StyleSheet.create({
    color1:{
    backgroundColor: 'rgb(151,99,67)',
    flex: 1,
    },
      
    closet:{
    flexWrap:'nowrap',
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'fixed',
    backgroundColor: 'rgb(151,99,67)',
    }
});
    
const styles2 = StyleSheet.create({
    color2:{
    backgroundColor: 'rgb(171,120,85)',
    flex: 1,
    shadowColor: 'black',
    shadowOpacity: '1',
    shadowOffset: '1',
    
    }
});
    
const closet = StyleSheet.create({
    closets:{
    fontSize: 46,
    color: '#fff',
    fontWeight: 'bold',
    fontFamily: 'San Francisco', 
    }
})
    

export default LaunchScreen;
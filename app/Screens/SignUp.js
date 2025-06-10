import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, Button} from 'react-native';

function SignUp() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <Text style={styles.textStyle}>
                    Welcome to Closet
                </Text>

                <View style={styles.signupContainer}>
                        <Text style={styles.signUpTextStyle}>Sign Up</Text>

                        <View style={styles.inputBoxes}>
                            <Text>Name</Text>
                        </View>

                        <View style={styles.inputBoxes}>
                            <Text>Username or Email</Text>
                        </View>

                        <View style={styles.inputBoxes}>
                            <Text>Username or Email</Text>
                        </View>

                        <View style={styles.inputBoxes}>
                            <Text>Password</Text>
                        </View>

                        <View style={styles.inputBoxes}>
                            <Text>Re-Type Password</Text>
                        </View>


                </View>

                {/*sign up with google*/}
                <View style={styles.googleContainer}>

                </View>

                {/*login buttons*/}
                <View style={styles.signInContainer}>

                </View>
            </View>
        </SafeAreaView>
    );
}

const styles=StyleSheet.create({
    container:{
        backgroundColor: 'rgb(151,99,67)',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    textStyle:{
        color: '#fff',
        fontSize: '29',
        flex: 1,
    },

    signUpTextStyle:{
        color: '#fff',
        fontSize: '25',
        flex: 1,
        top: 15,
        right: 75,
        fontWeight: 'bold'
    },

    signupContainer:{
        backgroundColor: 'rgb(171,120,85)',
        height: '55%',
        width: '70%',
        position: 'absolute',
        top: 110,
        shadowColor: 'black',
        shadowOpacity: '1',
        shadowOffset: '1',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-evenly'

    },

    googleContainer:{
        backgroundColor: 'rgb(171,120,85)',
        width: '70%',
        height: '10%',
        position: 'absolute',
        bottom: 140,
        shadowColor: 'black',
        shadowOffset: '1',
        shadowOpacity: '20',
        borderRadius: 50
    },

    signInContainer:{
        backgroundColor: 'rgb(171,120,85)',
        width: '70%',
        height: '10%',
        position: 'absolute',
        bottom: 55,
        shadowColor: 'black',
        shadowOffset: '1',
        shadowOpacity: '20',
        borderRadius: 50
    },

    // inputBoxesContainer:{
    //     justifyContent: 'center',  
    // },

    inputBoxes: {
        backgroundColor:  'rgb(151,99,67)',
        width: '90%',
        height: '12%',
        


    }

});

export default SignUp;
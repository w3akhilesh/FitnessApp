import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function WorkoutComponent({ progress = 0.5 }) { // progress is a number between 0 and 1
    // Calculate the width of the progress bar
    const progressBarWidth = progress * 100; // assuming full width is 100%

    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['#EDECF3', '#F5F3FB']}
                start={[0, 0]}
                end={[1, 0]}
                style={styles.gradient}
            >
                <View style={styles.content}>
                    <Text style={styles.title}>Fullbody Workout</Text>
                    <Text style={styles.details}>180 Calories Burn | 20minutes</Text>
                </View>
                <TouchableOpacity style={styles.button}>
                    {/* Your button icon goes here */}
                </TouchableOpacity>
                <View style={styles.progressBarContainer}>
                    <LinearGradient
                        colors={['#92A3FD','#C58BF2']} // Replace with your gradient colors
                        start={[0, 0]}
                        end={[1, 0]}
                        style={[styles.progressBar, { width: `${progressBarWidth}%` }]}
                    />
                </View>
            </LinearGradient>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        overflow: 'hidden',
        elevation: 3, // Only for Android shadow
        shadowOffset: { width: 1, height: 1 }, // IOS
        shadowColor: '#333', // IOS
        shadowOpacity: 0.3, // IOS
        shadowRadius: 2, // IOS
        marginBottom: 20, // Add space at the bottom
    },
    gradient: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 15,
        position: 'relative', // For absolute positioning of the progress bar
    },
    content: {
        flex: 1, // Makes sure the content takes up the available space minus button width
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    details: {
        fontSize: 14,
        color: '#666',
    },
    button: {
        // Style your button here
    },
    progressBarContainer: {
        position: 'absolute', // Position over the gradient
        left: 0,
        right: 0,
        bottom: 0,
        height: 12, // Height of the progress bar
    },
    progressBar: {
        height: '100%',
        borderRadius: 5, // Optional: if you want rounded corners
    },
});

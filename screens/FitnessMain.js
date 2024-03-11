import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import WorkoutComponent from '../components/workout';

const workouts = [
    { title: 'Fullbody Workout', calories: 180, duration: 20, icon: 'fitness' },
    { title: 'Lowerbody Workout', calories: 200, duration: 30, icon: 'barbell' },
    // Add more workouts as needed
];

const FitnessMainScreen = () => {
    const renderWorkoutItem = (workout, progress = 50) => (
        <TouchableOpacity style={styles.workoutItem} key={workout.title}>
            <View style={styles.workoutIcon}>
                <Ionicons name={workout.icon} size={24} color="#fff" />
            </View>
            <View style={styles.workoutDetails}>
                <Text style={styles.workoutTitle}>{workout.title}</Text>
                <Text style={styles.workoutInfo}>{workout.calories} Calories Burn | {workout.duration} minutes</Text>
                <View style={styles.progressBarContainer}>
                    <LinearGradient
                        colors={['#92A3FD', '#C58BF2']} // Replace with your gradient colors
                        start={[0, 0]}
                        end={[1, 0]}
                        style={[styles.progressBar, { width: `40%` }]}
                    />
                </View>
            </View>
        </TouchableOpacity>
    );

    return (
        <LinearGradient colors={['#f7f7f7', '#fffffe']} style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Text style={styles.heading}>Latest Workout</Text>
                {workouts.map(renderWorkoutItem)}
            </ScrollView>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },
    scrollContainer: {
        padding: 20,
        paddingTop: 80,
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#000',
    },
    workoutItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        width: '100%'
    },
    workoutIcon: {
        backgroundColor: '#92A3FD',
        borderRadius: 8,
        padding: 10,
        marginRight: 20,
    },
    workoutDetails: {
        flex: 1,
    },
    workoutTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#222',
        marginBottom: 4,
    },
    workoutInfo: {
        fontSize: 14,
        color: '#222',
        marginBottom: 20,
    },
    seeMoreButton: {
        backgroundColor: '#222',
        borderRadius: 8,
        paddingVertical: 12,
        paddingHorizontal: 20,
        alignItems: 'center',
    },
    seeMoreButtonText: {
        fontSize: 16,
        color: '#6E45E2',
    },
    progressBarContainer: {
        marginTop: 15,
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

export default FitnessMainScreen;
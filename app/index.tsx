import { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Link, router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Sprout } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function SplashScreen() {
  useEffect(() => {
    // Auto-redirect after 2 seconds
    const timer = setTimeout(() => {
      router.replace('/welcome');
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <LinearGradient
      colors={['#285430', '#5F8D4E', '#A4BE7B']}
      style={styles.container}
    >
      <StatusBar style="light" />
      <View style={styles.logoContainer}>
        <Sprout size={80} color="#FFFFFF" strokeWidth={1.5} />
        <Text style={styles.logoText}>FarmConnect</Text>
      </View>
      <Text style={styles.tagline}>
        Expert advice, bountiful harvests
      </Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#5F8D4E',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logoText: {
    fontSize: 42,
    fontWeight: '700',
    color: '#FFFFFF',
    marginTop: 16,
    letterSpacing: 1,
  },
  tagline: {
    fontSize: 18,
    color: '#FFFFFF',
    opacity: 0.9,
    textAlign: 'center',
    maxWidth: '80%',
    marginTop: 12,
  }
});
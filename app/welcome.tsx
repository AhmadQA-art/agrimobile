import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Image 
        source={{ uri: 'https://images.pexels.com/photos/2382665/pexels-photo-2382665.jpeg' }} 
        style={styles.backgroundImage} 
      />
      
      <LinearGradient
        colors={['rgba(255,255,255,0)', 'rgba(255,255,255,0.9)', '#ffffff']}
        style={styles.gradient}
      >
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Connect with Agricultural Experts</Text>
          <Text style={styles.subtitle}>
            Get personalized advice for your farm directly from specialists in the field
          </Text>
          
          <View style={styles.buttonContainer}>
            <Link href="/login" asChild>
              <TouchableOpacity style={styles.loginButton}>
                <Text style={styles.loginButtonText}>Login</Text>
              </TouchableOpacity>
            </Link>
            
            <Link href="/signup" asChild>
              <TouchableOpacity style={styles.signupButton}>
                <Text style={styles.signupButtonText}>Create Account</Text>
              </TouchableOpacity>
            </Link>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: '60%',
    justifyContent: 'flex-end',
  },
  contentContainer: {
    padding: 32,
    paddingBottom: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#285430',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: '#4B6F44',
    lineHeight: 24,
    marginBottom: 32,
  },
  buttonContainer: {
    gap: 16,
  },
  loginButton: {
    backgroundColor: '#5F8D4E',
    paddingVertical: 16,
    borderRadius: 10,
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
  signupButton: {
    backgroundColor: 'transparent',
    paddingVertical: 16,
    borderRadius: 10,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#5F8D4E',
  },
  signupButtonText: {
    color: '#5F8D4E',
    fontSize: 18,
    fontWeight: '600',
  },
});
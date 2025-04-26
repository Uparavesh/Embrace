import React from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions } from 'react-native';
import { Video, ResizeMode } from 'expo-av';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useSSO } from '@clerk/clerk-expo';
import { COLORS } from '@/constants/theme.ts';
import { styles } from '@/styles/auth.styles.ts';

const screenWidth = Dimensions.get('window').width;

export default function Login() {
  const router = useRouter();
  const { startSSOFlow } = useSSO();

  const handleGoogleLogin = async () => {
    try {
      const { createdSessionId, setActive } = await startSSOFlow({
        strategy: 'oauth_google',
      });

      if (setActive && createdSessionId) {
        await setActive({ session: createdSessionId });
        router.replace('/(tabs)/Home');
      }
    } catch (error) {
      console.error('OAuth error:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.brandSection}>
        <View style={styles.logo}>
          <Image source={require('@/assets/images/LOGO.png')} style={styles.logo} />
        </View>
        <Text style={styles.appName}>Embrace</Text>

        {/* 🎥 Illustration video */}
        <Video
          source={require('@/assets/videos/illustration.mp4')}
          style={{
            width: screenWidth - 40,
            height: 300,
            marginTop: 20,
            borderRadius: 12,
          }}
          resizeMode={ResizeMode.CONTAIN}
          shouldPlay
          isLooping={false}
          useNativeControls={false}
        />
      </View>

      <View style={styles.loginSection}>
        <TouchableOpacity
          style={styles.googleButton}
          onPress={handleGoogleLogin}
          activeOpacity={0.9}
        >
          <View style={styles.googleIconContainer}>
            <Ionicons name="logo-google" size={20} color={COLORS.textPrimary} />
          </View>
          <Text style={styles.googleButtonText}>Continue with Google</Text>
        </TouchableOpacity>

        <Text style={styles.termsText}>
          By continuing, you agree to our Terms and Privacy Policy.
        </Text>
      </View>
    </View>
  );
}

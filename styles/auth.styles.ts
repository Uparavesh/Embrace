import { StyleSheet } from 'react-native';
import { COLORS } from '@/constants/theme.ts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  brandSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 1,
  },
  appName: {
    fontSize: 30,
    fontWeight: 'bold',
    color: COLORS.textPrimary,
  },
  loginSection: {
    gap: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.grey,
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    color: COLORS.textPrimary,
    backgroundColor: COLORS.white,
  },
  loginButton: {
    backgroundColor: COLORS.primary,
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  loginButtonText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: '600',
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.surface,
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 8,
    justifyContent: 'center',
  },
  googleIconContainer: {
    marginRight: 8,
  },
  googleButtonText: {
    color: COLORS.textPrimary,
    fontSize: 16,
  },
  termsText: {
    textAlign: 'center',
    fontSize: 12,
    color: COLORS.textSecondary,
    marginTop: 12,
  },
  bottomLinkRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 4,
    marginTop: 20,
  },
  bottomText: {
    color: COLORS.textSecondary,
    fontSize: 14,
  },
  bottomLink: {
    color: COLORS.primary,
    fontWeight: '500',
    fontSize: 14,
  },
  heading: {
    fontSize: 22,
    fontWeight: '700',
    color: COLORS.textPrimary,
    textAlign: 'center',
    marginBottom: 20,
  },
});

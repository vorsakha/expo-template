import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import { Routes } from './src/routes';
import { theme } from './src/styles/theme';

import nunito from './src/assets/fonts/Nunito.ttf';

export default function App() {
  const [loaded] = useFonts({
    Nunito: nunito,
  });

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="auto" />
      <Routes />
    </ThemeProvider>
  );
}

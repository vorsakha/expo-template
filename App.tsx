import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import styled, { ThemeProvider } from 'styled-components/native';
import { theme } from './src/styles/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StyledContainer>
        <StyledText>Open up App.tsx to start working on your app!</StyledText>
        <StatusBar style="auto" />
      </StyledContainer>
    </ThemeProvider>
  );
}

const StyledContainer = styled(View)`
  flex: 1;
  background-color: '#fff';
  align-items: center;
  justify-content: center;
`;

const StyledText = styled(Text)`
  font-weight: bold;
`;

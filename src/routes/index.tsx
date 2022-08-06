import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppRoutes } from './app.routes';

declare global {
  namespace ReactNavigation {
    interface RootParamList {
      SignIn: undefined;
      SignUp: undefined;
      Profile: undefined;
      ManageSocial: undefined;
      Playlist: undefined;
      ProfileModal: undefined;
      AuthModal?: {
        trackId: number;
      };
      TrackPlayer: {
        trackId?: number;
        trackTitle?: string;
        trackDescription?: string;
        trackImageUrl?: string;
        trackFileUrl?: string;
        playlistImageUrl: string;
        playlistTitle: string;
        playlistDescription: string;
        playlistId: number;
      };
      Tracks: {
        playlistId?: number;
        playlistCoverImageUrl?: string;
        playlistTitle?: string;
        playlistDescription?: string;
      };
      Rate: {
        trackId?: number;
        playlistImageUrl?: string;
        playlistTitle?: string;
        playlistDescription?: string;
        playlistId?: number;
      };
      UseTerms?: {
        title?: string;
      };
      PrivacyPolicy?: {
        title?: string;
      };
      ForgotPassword?: {
        title?: string;
      };
    }
  }
}

export type ParamList = {
  AuthModal: {
    trackId: number;
  };
  SignIn: {
    trackId: number;
  };
  SignUp: {
    trackId: number;
  };
  Rate: {
    trackId: number;
    playlistImageUrl: string;
    playlistTitle: string;
    playlistDescription: string;
    playlistId: number;
  };
  Tracks: {
    playlistId: number;
    playlistTitle: string;
    playlistDescription: string;
    playlistCoverImageUrl: string;
  };
  TrackPlayer: {
    trackId: number;
    trackTitle: string;
    trackDescription: string;
    trackImageUrl: string;
    trackFileUrl: string;
    playlistImageUrl: string;
    playlistTitle: string;
    playlistDescription: string;
    playlistId: number;
  };
  UseTerms: {
    title: string;
  };
  PrivacyPolicy: {
    title: string;
  };
  ForgotPassword: {
    title: string;
  };
};

export function Routes() {
  return (
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  );
}

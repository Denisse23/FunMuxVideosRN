import Config from "react-native-config";

const firebaseConfig = Object.freeze({
      apiKey: Config['FIREBASE_API_KEY'],
      authDomain: Config['FIREBASE_AUTH_DOMAIN'],
      projectId: Config['FIREBASE_PROJECT_ID'],
      storageBucket: Config['FIREBASE_STORAGE_BUCKET_ID'],
      appId: Config['FIREBASE_APP_ID'],
});

export default firebaseConfig;
  
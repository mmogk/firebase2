import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from './screens/Home';
import RegisterScreen from './screens/Register';
import LoginScreen from './screens/Login';

import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3-OuldOr-j-EKMReEu0nJ4-aDzivpoTo",
  authDomain: "fir-1-80c5b.firebaseapp.com",
  projectId: "fir-1-80c5b",
  storageBucket: "fir-1-80c5b.appspot.com",
  messagingSenderId: "331518143491",
  appId: "1:331518143491:web:1dd0f564452ae38bbfb236"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);


export default function App() {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen  name="Home" component={HomeScreen} />
        <Stack.Screen  name="Login" component={LoginScreen} />
        <Stack.Screen  name="Register" component={RegisterScreen} />
        <Stack.Screen  name="Edit" component={EditScreen} />
        <Stack.Screen  name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "./firebaseConfig";

export const signUp = async (
  email: string,
  password: string,
  displayName: string,
) => {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email.trim(),
    password,
  );
  const user = userCredential.user;

  // Update the user's display name
  await updateProfile(user, { displayName });
};

export const signIn = async (email: string, password: string) => {
  const userCredential = await signInWithEmailAndPassword(
    auth,
    email.trim(),
    password,
  );

  return userCredential.user;
};

export const logOut = async () => {
  await signOut(auth);
};

import { auth, googleProvider } from "../../services/firebase";
import { signInWithPopup } from "firebase/auth";

const handleGoogleLogin = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;
    console.log("User signed in:", user);
    // You can close modal, redirect, etc.
  } catch (error) {
    console.error("Google sign-in error:", error);
  }
};

export default handleGoogleLogin;
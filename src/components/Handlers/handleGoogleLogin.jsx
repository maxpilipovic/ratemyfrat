import React from "react";
import { auth, googleProvider, db } from "../../services/firebase";
import { deleteUser, signInWithPopup } from "firebase/auth";
import { setDoc, doc, serverTimestamp } from "firebase/firestore";

const handleGoogleLogin = async ({ onSuccess, onError }) => {

  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;

    const email = user.email || "";
    const isEduEmail = email.toLowerCase().endsWith(".edu");

    if (!isEduEmail) {
      await deleteUser(user);
      if (onError) onError("Please use a valid .edu email to sign up.");
      return false;
    }

    await setDoc(doc(db, "users", user.uid), {
      uid: user.uid,
      email: email,
      displayName: user.displayName || "",
      isVerified: isEduEmail,
      createdAt: serverTimestamp(),
      lastLogin: serverTimestamp(),
      role: "user"
    }, { merge: true }); //Merge so existing user data is updated not overwritten

    console.log("User signed in:", user);

    if (onSuccess) onSuccess();

    return true;
    //xxx
  } catch (error) {
    console.error("Google sign-in error:", error);
    if (onError) onError("An error occurred during Google sign-in. Please try again.");
    return false;
  }
};

export default handleGoogleLogin;
import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase";

export const getFratById = async (id) => {
  const docRef = doc(db, "fraternities", id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() };
  } else {
    return null;
  }
};
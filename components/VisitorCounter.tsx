"use client";

import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  increment,
} from "firebase/firestore";

export default function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    const ref = doc(db, "stats", "visitors");

    const updateVisitor = async () => {
      const snap = await getDoc(ref);

      if (!snap.exists()) {
        await setDoc(ref, { count: 1 });
        setCount(1);
      } else {
        const currentCount = snap.data().count || 0;

        await updateDoc(ref, {
          count: increment(1),
        });

        setCount(currentCount + 1);
      }
    };

    updateVisitor();
  }, []);

  return (

  <div style={{ fontSize: "14px", opacity: 0.8 }}>
    👀 Visitors: {count ?? "Loading..."}
  </div>

  );
}
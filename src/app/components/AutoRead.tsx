import { useEffect } from "react";
import { speakText } from "../utilis/textToSpeech";

export default function AutoRead() {
  useEffect(() => {
    speakText("Welcome to our accessible website!");
  }, []);

  return <h1>Accessible Page</h1>;
}

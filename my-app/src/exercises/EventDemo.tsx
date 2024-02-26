import ImageButton from "../components/ImageButton";
import { BaseProps } from "../types";
import { useState } from "react";

export default function EventDemo1({ title }: BaseProps) {
  const [textFromBtn, setTextFromBtn] = useState("");
  return (
    <>
      <h2>{title}</h2>
      <ImageButton
        image="https://cdn.wanderer.moe/honkai-star-rail/splash-art/kafka-full.png"
        onClick={() => setTextFromBtn("Stelleron Hunter - Kafka")}
      />
      <ImageButton
        image="https://cdn.wanderer.moe/honkai-star-rail/splash-art/silver-wolf-full.png"
        onClick={() => setTextFromBtn("Stelleron Hunter - Silver Wolf")}
      />
      <ImageButton
        image="https://cdn.wanderer.moe/honkai-star-rail/splash-art/serval-full.png"
        onClick={() => setTextFromBtn("Belobog - Serval Landau")}
      />
      <ImageButton
        image="https://cdn.wanderer.moe/honkai-star-rail/splash-art/sampo-full.png"
        onClick={() => setTextFromBtn("Belobog - Sampo Koski")}
      />
      <ImageButton
        image="https://cdn.wanderer.moe/honkai-star-rail/splash-art/qingue-full.png"
        onClick={() => setTextFromBtn("Xianzhou - Qingue")}
      />
      <h3>{textFromBtn}</h3>
    </>
  );
}

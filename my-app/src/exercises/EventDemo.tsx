import ImageButton from "../components/ImageButton";
import { BaseProps } from "../types";
import { useState } from "react";

export default function EventDemo1({ title }: BaseProps) {
  const [textFromBtn, setTextFromBtn] = useState("");
  return (
    <>
      <h2>{title}</h2>
      <ImageButton
        image="https://upload-os-bbs.hoyolab.com/upload/2022/05/26/7934611/d9ab700ee0713acf78eb04d930f5c3fc_5451538034192478718.png?x-oss-process=image%2Fresize%2Cs_1000%2Fauto-orient%2C0%2Finterlace%2C1%2Fformat%2Cwebp%2Fquality%2Cq_80"
        onClick={() => setTextFromBtn("Origin: Stelleron Hunter - Name: Kafka")}
    
      />
      <ImageButton
        image="https://upload-os-bbs.hoyolab.com/upload/2022/05/26/7934611/72d6e7d3bd7dd99d9c77141aec062999_2457063951615317658.png?x-oss-process=image%2Fresize%2Cs_1000%2Fauto-orient%2C0%2Finterlace%2C1%2Fformat%2Cwebp%2Fquality%2Cq_80"
        onClick={() => setTextFromBtn("Origin: Stelleron Hunter - Name: Silver Wolf")}
    
      />
      <ImageButton
        image="https://upload-os-bbs.hoyolab.com/upload/2022/05/26/7934611/1836168f23c1d2dd58082be166b39bfc_9192481015576009498.png?x-oss-process=image%2Fresize%2Cs_1000%2Fauto-orient%2C0%2Finterlace%2C1%2Fformat%2Cwebp%2Fquality%2Cq_80"
        onClick={() => setTextFromBtn("Origin: Belobog - Name: Serval Landau")}
   
      />
      <ImageButton
        image="https://upload-os-bbs.hoyolab.com/upload/2022/05/26/7934611/b82eefaf3431d2417565b3ef9e7fe711_3293112108286371035.png?x-oss-process=image%2Fresize%2Cs_1000%2Fauto-orient%2C0%2Finterlace%2C1%2Fformat%2Cwebp%2Fquality%2Cq_80"
        onClick={() => setTextFromBtn("Origin: Belobog - Name: Sampo Koski")}

      />
      <ImageButton
        image="https://upload-os-bbs.hoyolab.com/upload/2022/05/26/7934611/6f2bb7c621fb703f9980c0536b3682c3_2071736025467404354.png?x-oss-process=image%2Fresize%2Cs_1000%2Fauto-orient%2C0%2Finterlace%2C1%2Fformat%2Cwebp%2Fquality%2Cq_80"
        onClick={() => setTextFromBtn("Origin: Herta Space Station - Name: Herta")}

      />
      <h3>{textFromBtn}</h3>
    </>
  );
}

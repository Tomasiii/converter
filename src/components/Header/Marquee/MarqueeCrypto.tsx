import { useEffect, useRef, useState } from "react";
import Marquee from "react-fast-marquee";

import CryptoItem from "@/components/Header/Marquee/CryptoItem";
import SkeletonLoader from "@/components/SkeletonLoader/SkeletonLoader";

import { capitalize } from "@/utils/capitalize";

import style from "./marquee.module.scss";

const MarqueeCrypto = () => {
  const socket = useRef<WebSocket | null>(null);
  const [coins, setCoins] = useState<Record<string, string>>({});
  const prevCoins = useRef(coins);

  useEffect(() => {
    socket.current = new WebSocket(
      "wss://ws.coincap.io/prices?assets=bitcoin,monero,ethereum,wrapped-bitcoin"
    );
    socket.current.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setCoins((prev) => ({ ...prev, ...data }));
    };
  }, []);

  useEffect(() => {
    prevCoins.current = coins;
  });

  const coinsName = Object.keys(coins);
  const coinsPrice = Object.values(coins);

  return (
    <>
      {coinsName.length ? (
        <Marquee
          pauseOnHover
          className={style.marquee}
          style={{ width: 650 }}
          gradientWidth={11}
        >
          {coinsName.map((name, i) => (
            <CryptoItem
              key={name}
              label={capitalize(name)}
              value={+coinsPrice[i]}
              isCheaper={prevCoins.current[name] > coinsPrice[i]}
            />
          ))}
        </Marquee>
      ) : (
        <SkeletonLoader height={50} width={500} />
      )}
    </>
  );
};

export default MarqueeCrypto;

import { ArrowDown, ArrowUp } from "../icons";
import styles from "./introduction.module.css";

export default function BitcoinWidget(): JSX.Element {
  return (
    <div className={`${styles.animation} border-none rounded-3xl bg-black w-40 h-40`}>
      <div className="absolute top-1 left-0 p-2 text-white">
        <p className="font-helvetica-bold text-[10px]">BTC/USD</p>
        <p className="font-helvetica-bold text-xs font-bold">€96,076.80</p>
      </div>
      <div className="absolute bottom-1 left-0 p-2 text-white font-helvetica-bold font-bold text-xs">
        <p className="font-helvetica-bold text-[8px]">24h volume</p>
        <p className="font-helvetica-bold text-[10px] font-bold text-red-500 flex flex-row">
            <span className="flex flex-col justify-center mr-1"><ArrowDown /></span> 17.32%
        </p>
      </div>
      <div className="absolute bottom-1 right-0 p-2 text-white font-helvetica-bold font-bold text-xs">
        <p className="font-helvetica-bold text-[8px]">24h change</p>
        <p className="font-helvetica-bold text-[10px] font-bold text-green-500 flex flex-row">
            <span className="flex flex-col justify-center mr-1"><ArrowUp /></span> 1.36%</p>
      </div>
      <div className={`${styles.magicpattern} absolute bottom-14 right-2 w-full`}></div>
    </div>
  );
}

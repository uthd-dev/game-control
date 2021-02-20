import { useState } from "react";
import styles from "./action-modal.module.css";

import OptionSelector from "./option-selector";

export interface Action {
  name: string;
  id: string;
  opts: {
    durations?: Array<number>;
    levels?: Array<number>;
    basePrice: number;
  };
}

export interface Props {
  title: string;
  actions: Array<Action>;
  userBal: number;
  type: "good" | "bad";
  variant: "item" | "enchant" | "potion";
}

interface Cart {
  items: Array<CartItem>;
  value: number;
}

interface CartItem {
  name: string;
  level?: number;
  duration?: number;
}

export default function ActionCard({ defaultProps }) {
  const [cart, setCart] = useState<Cart>();
  const { title, actions, userBal, type, variant }: Props = defaultProps;

  return (
    <div className={`${type == "good" ? styles.cardGood : styles.cardBad} ${styles.card}`}>
      <div id="col-left" className={styles.options}>
        {actions.map((action, index) => {
          return <OptionSelector action={action} index={index} setCart={setCart} />
        })}
      </div>

      <div id="col-right" className={styles.checkoutWrapper}>
        <div id="action-container" className={styles.checkout}></div>
      </div>
    </div>
  );
}

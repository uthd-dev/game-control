import { useEffect, useState } from "react";
import { motion } from 'framer-motion';
import styles from "./action-modal.module.css";

import OptionSelector from "./option-selector";

import { ModalVariants, SelectorVariants } from "./animations";

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

export interface CartItem {
  id: string;
  level?: number;
  duration?: number;
  price: number;
}

export default function ActionCard({ defaultProps, visible }) {
  const [items, setItems] = useState([]);
  const { title, actions, userBal, type, variant }: Props = defaultProps;

  useEffect(() => {
    let form = document.getElementById("action-form");
    form.addEventListener("change", (event) => {
      let element: HTMLFormElement = event.target as HTMLFormElement;
      let elemInfo: Array<string> = element.id.split("-");
      let actionId: string = elemInfo[0];
      let type: string = elemInfo[1];

      let newItems: Array<CartItem> = items;

      if (newItems.find((el) => el.id == actionId)) {
        let itemIndex: number = newItems.findIndex((el) => el.id == actionId);
        newItems[itemIndex] = {
          id: actionId,
          level: type == "level" ? element.value : newItems[itemIndex]?.level,
          duration:
            type == "duration" ? element.value : newItems[itemIndex]?.duration,
          price: actions.find((el) => el.id == actionId).opts.basePrice,
        };
        setItems(newItems);
      } else {
        let newItem: CartItem = {
          id: actionId,
          level: type == "level" ? element.value : 0,
          duration: type == "duration" ? element.value : 0,
          price: actions.find((el) => el.id == actionId).opts.basePrice,
        };
        newItems.push(newItem);
        setItems(newItems);
      }
      console.log(items);
    });
  }, []);

  return (
    <motion.div
      initial={visible ? "shown" : "hidden"}
      animate={visible ? "shown" : "hidden"}
      variants={ModalVariants}
      className={`${type == "good" ? styles.cardGood : styles.cardBad} ${
        styles.card
      }`}
    >
      <div id="col-left" className={styles.options}>
        <form id="action-form">
          {actions.map((action, index) => {
            return (
              <OptionSelector
                action={action}
                index={index}
                setCart={() => {}}
              />
            );
          })}
        </form>
      </div>

      <div id="col-right" className={styles.checkoutWrapper}>
        <div id="action-container" className={styles.checkout}></div>
      </div>
    </motion.div>
  );
}

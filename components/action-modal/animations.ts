
export const ModalVariants = {
    shown: {
        opacity: 1,
        display: "flex",
        transition: {
            when: "beforeChildren",
            staggerChildren: 0.1,
        }
    },
    hidden: {
        opacity: 0,
        transition: {
            when: "afterChildren",
            staggerChildren: 0.1,
            staggerDirection: -1,
        },
        transitionEnd: {
            display: "none",
        }
    }
}

export const SelectorVariants = {
    shown: {
        opacity: 1,
    },
    hidden: {
        opacity: 0,
    }
}
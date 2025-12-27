"use client";

import { useEffect, useState } from "react";
import { Flex, Text } from "@/once-ui/components";
import styles from "@/components/Header.module.scss";

export const Header = () => {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setOpacity(Math.max(0, 1 - scrollY / 100));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Flex
      fitHeight
      className={styles.position}
      as="header"
      zIndex={9}
      fillWidth
      padding="16"
      paddingX="l"
      horizontal="center"
      vertical="center"
    >
      <Flex fillWidth vertical="center" hide="s">
        <Text variant="heading-strong-m">Derick Ruiz</Text>
      </Flex>
      <Flex fillWidth horizontal="end" vertical="center" hide="s" style={{ opacity }}>
        <Text variant="body-default-m" onBackground="neutral-weak">
          Technical Writer &amp; JavaScript Dev
        </Text>
      </Flex>
    </Flex>
  );
};

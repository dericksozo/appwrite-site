"use client";

import { Avatar, Column, Flex, Heading, SmartImage, SmartLink, Tag, Text } from "@/once-ui/components";
import styles from "./Posts.module.scss";
import { formatDate } from "@/app/utils/formatDate";
import { person } from "@/app/resources/content";

interface PostProps {
  post: any;
  thumbnail: boolean;
}

export default function Post({ post, thumbnail }: PostProps) {
  const tags = post.metadata.tag.split(",").map((tag: string) => tag.trim());
  const href = post.metadata.externalLink || `/blog/${post.slug}`;

  return (
    <SmartLink
      fillWidth
      className={styles.hover}
      unstyled
      key={post.slug}
      href={href}
    >
      <Column
        position="relative"
        fillWidth
        paddingY="12"
        paddingX="16"
        gap="16"
      >
        {post.metadata.image && thumbnail && (
          <SmartImage
            priority
            fillWidth
            className={styles.image}
            sizes="640px"
            border="neutral-alpha-weak"
            cursor="interactive"
            radius="m"
            src={post.metadata.image}
            alt={"Thumbnail of " + post.metadata.title}
            aspectRatio="16 / 9"
          />
        )}
        <Column position="relative" fillWidth gap="8">
          <Heading as="h2" variant="heading-strong-l" wrap="balance">
            {post.metadata.title}
          </Heading>
          <Flex gap="12" vertical="center">
            <Avatar src={person.avatar} size="s" />
            <Text variant="label-default-s" onBackground="neutral-weak">
              {person.name}
            </Text>
            <Text variant="label-default-s" onBackground="neutral-weak">
              •
            </Text>
            <Text variant="label-default-s" onBackground="neutral-weak">
              {post.metadata.publishedAt && formatDate(post.metadata.publishedAt, false)}
            </Text>
          </Flex>
          {tags.length > 0 && (
            <Flex gap="8">
              {tags.map((tag: string, index: number) =>
                index < 3 ? <Tag key={index} label={tag} variant="neutral" /> : null
              )}
            </Flex>
          )}
        </Column>
      </Column>
    </SmartLink>
  );
}

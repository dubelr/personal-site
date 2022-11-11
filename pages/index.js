import {
  Avatar,
  HStack,
  VStack,
  Heading,
  Text,
  Wrap,
  Button,
  Center,
  Flex,
  Spacer,
  Tooltip,
} from "@chakra-ui/react";
import Head from "next/head";
import { HiDocumentText, HiMail } from "react-icons/hi";
import { GrLinkedinOption, GrGithub } from "react-icons/gr";
export default function Home() {
  let name = "Robert Dubel";
  let buttons = [
    {
      text: "Resume",
      icon: HiDocumentText,
      path: "resume.pdf",
      color: "blue",
    },
    {
      text: "Email",
      icon: HiMail,
      path: "mailto:dubel.r@northeastern.edu",
      color: "green",
    },
    {
      text: "robert-dubel",
      icon: GrLinkedinOption,
      path: "https://www.linkedin.com/in/robert-dubel/",
      color: "linkedin",
    },
    {
      text: "bobby-dubel",
      icon: GrGithub,
      path: "https://github.com/bobby-dubel",
      color: "gray",
    },
  ];
  let personalSiteProjectURL = "https://github.com/bobby-dubel/personal-site"
  return (
    <div>
      <Head>
        <title>{name}</title>
        <meta name="description" content="Robert Dubel's personal website" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Flex align="center" direction="column" h="100vh" w="100vw" py="5vh" px="25px">
        <Flex maxW="555px" direction="column">
          <HStack spacing={4}>
            <Avatar size="xl" src="/profile.jpg" />
            <VStack align="left">
              <Heading size="lg">{name}</Heading>
              <Text>
                Software Engineer, Student, Outdoors Club President at Northeastern. He/Him
              </Text>
            </VStack>
          </HStack>
          <Wrap spacing={2} py={5}>
            {buttons.map((button) => (
              <Button
                w="max-content"
                variant="outline"
                color="black"
                _hover={{
                  bg: button.color + ".50",
                  color: button.color + ".700",
                  boxShadow: "md",
                  borderColor: button.color + ".500",
                  transition: "100ms linear"
                }}
                key={button.text}
                leftIcon={<button.icon />}
                onClick={() => (window.location.href = button.path)}
              >
                {button.text}
              </Button>
            ))}
          </Wrap>
          <Text align="left">
            Hi! {"I'm"} Robert, a full-time engineer co-op at
            Plainspoken Digital (political discourse analysis startup) and a Junior at
            Northeastern University.
          </Text>
          <Text as="span" align="left" pt={3}>
            {"I'm "}most interested in solving large-scale enterprise problems
            in logistics, finance, and climate tech. Currently{" "}
            <Text as="span" fontWeight="semibold">
              seeking summer and fall 2023 internship opportunities. 
            </Text>
          </Text>
        </Flex>
        <Spacer />
        <Flex maxW="555px" direction="column">
          <Text mt="75px" as="span" align="center" color="gray.400">
            Created with Next.js, Chakra UI, Vercel. View source on{" "}
            <a href={personalSiteProjectURL}><b>GitHub</b></a>.
          </Text>
        </Flex>
      </Flex>
    </div>
  );
}

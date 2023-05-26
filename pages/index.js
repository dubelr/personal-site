import { chakra } from "@chakra-ui/react";
import Image from "next/image";
import {
  HStack,
  VStack,
  Heading,
  Text,
  Wrap,
  Button,
  Flex,
  Spacer,
  Tooltip,
} from "@chakra-ui/react";
import Head from "next/head";
import { HiDocumentText, HiMail } from "react-icons/hi";
import { GrLinkedinOption, GrGithub } from "react-icons/gr";

export default function Home() {
  let name = "Bobby Dubel";
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
      text: "LinkedIn",
      icon: GrLinkedinOption,
      path: "https://www.linkedin.com/in/robert-dubel/",
      color: "linkedin",
    },
    {
      text: "GitHub",
      icon: GrGithub,
      path: "https://github.com/dubelr",
      color: "gray",
    },
  ];
  let personalSiteProjectURL = "https://github.com/bobby-dubel/personal-site";
  const ChakraImg = chakra(Image, {
    baseStyle: { maxH: 100, maxW: 100 },
    shouldForwardProp: (prop) =>
      [
        "width",
        "height",
        "src",
        "alt",
        "quality",
        "placeholder",
        "blurDataURL",
        "loader ",
      ].includes(prop),
  });
  return (
    <div>
      <Head>
        <title>{name}</title>
        <meta name="description" content="Bobby Dubel's personal website" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Flex
        align="center"
        direction="column"
        h="100vh"
        w="100vw"
        py="5vh"
        px="25px"
      >
        <Flex maxW="555px" direction="column">
          <HStack spacing={5}>
            <ChakraImg
              src="/profile.jpg"
              alt="descriptive"
              width="65"
              height="65"
              borderRadius="50%"
            />
            <VStack align="left">
              <Heading size="lg">{name}</Heading>
              <Text>
                Software Engineer, Student. He/Him
              </Text>
            </VStack>
          </HStack>
          <Wrap spacing={3} py={5} overflow="visible">
            {buttons.map((button) => (
              <Tooltip label={button.label} key={button.text}>
              <Button
                w="max-content"
                variant="outline"
                bg={"gray.50"}
                color={"black.900"}
                borderColor={"black.700"}
                borderBottomWidth={"2px"}
              _hover={{
                  marginTop: "4px",
                  boxShadow: "md",
                  borderBottomWidth: "3px",
                  transition: "80ms linear",
                  bg: button.color + ".50",
                  color: button.color + ".900",
                  borderColor: button.color + ".700",
                  borderBottomWidth: "2.5px",
                }}
                _active={{
                  marginTop: "6px",
                  bg: button.color + ".100",
                  boxShadow: "sm",
                  borderBottomWidth: "2px",
                  transition: "80ms linear",
                }}
                key={button.text}
                leftIcon={<button.icon />}
                onClick={() => (window.location.href = button.path)}
              >
                {button.text}
              </Button>
              </Tooltip>
            ))}
          </Wrap>
          <Text align="left">
            {"Hi! I'm Bobby, a recent grad from Northeastern Unviersity with full-time software engineering experience at Ray, a political analytics startup. I'm interested in solving challenging problems in tech, finance, and climate solutions."}
          </Text>
          <Text as="span" align="left" pt={3} fontWeight="semibold">
            Currently seeking summer 2023 internships with full-time potential.
          </Text>
        </Flex>
        <Spacer />
        <Flex maxW="555px" direction="column">
          <Text mt="75px" as="span" align="center" color="gray.400">
            Built with Next.js, Chakra UI, Vercel. View source on{" "}
            <a href={personalSiteProjectURL}>
              <b>GitHub</b>
            </a>
            .
          </Text>
        </Flex>
      </Flex>
    </div>
  );
}

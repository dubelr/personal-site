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
      color: "orange",
    },
    {
      text: "Email",
      icon: HiMail,
      path: "mailto:dubel.r@northeastern.edu",
      color: "green",
    },
    {
      text: "@robert-dubel",
      icon: GrLinkedinOption,
      path: "https://www.linkedin.com/in/robert-dubel/",
      color: "linkedin",
    },
    {
      text: "@bobby-dubel",
      icon: GrGithub,
      path: "https://github.com/bobby-dubel",
      color: "teal",
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
      <Center py="75px" px="25px">
        <Flex w="620px" direction="column">
          <HStack spacing={4}>
            <Avatar size="xl" src="/profile.jpg" />
            <VStack align="left">
              <Heading size="lg">{name}</Heading>
              <Text>
                Software Engineer, Outdoors Club President @ Northeastern
                University. He/Him
              </Text>
            </VStack>
          </HStack>
          <Wrap spacing={2} py={5}>
            {buttons.map((button) => (
              <Button
                variant="outline"
                m="sm"
                color="black"
                _hover={{
                  bg: button.color + ".50",
                  color: button.color + ".700",
                  boxShadow: "md",
                  borderColor: button.color + ".200",
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
            Plainspoken Digital (politics lead-generation startup) and a Junior at
            Northeastern University.
          </Text>
          <Text as="span" align="left" pt={3}>
            {"I'm "}most interested in solving large-scale enterprise problems
            in logistics, finance, and climate tech. Currently{" "}
            <Text as="span" fontWeight="semibold">
              seeking summer-fall 2023 internship opportunities.
            </Text>
          </Text>
        </Flex>
      </Center>
      <footer px="25px">
        <Center>
          <Text color="gray.300">
            Created with Next.js, Chakra UI; deployed with Vercel. View project on{" "}
            <a href={personalSiteProjectURL}><b>GitHub</b></a>.
          </Text>
        </Center>
      </footer>
    </div>
  );
}

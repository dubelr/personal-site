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
  Spacer
} from "@chakra-ui/react";
import Head from "next/head";
import {HiDocumentText, HiMail, } from "react-icons/hi";
import { GrLinkedinOption, GrGithub } from "react-icons/gr";

export default function Home() {
  let name = "Robert Dubel";
  let buttons = [
    { text: "Resume", icon: HiDocumentText, path:"resume.pdf" },
    { text: "Email", icon: HiMail, path:"mailto:dubel.r@notheastern.edu" },
    { text: "@robert-dubel", icon: GrLinkedinOption, path:"https://www.linkedin.com/in/robert-dubel/" },
    { text: "@bobby-dubel", icon: GrGithub, path:"https://github.com/bobby-dubel" },
  ]
  return (
    <div>
      <Head>
        <title>{name}</title>
        <meta name="description" content="Robert Dubel's personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Center pt="150px" px="25px">
        <Flex w="620px" direction="column">
            <HStack spacing={4}>
              <Avatar size="xl" src="/profile.jpg" />
              <VStack align="left">
                <Heading size="lg">{name}</Heading>
                <Text>Software Engineer, Student. He/Him</Text>
              </VStack>
            </HStack>
            <Wrap spacing={2} pt={5}>
              {buttons.map((button) => (
                <Button 
                variant="outline"
                m="sm"
                color="alphaWhite"
                key={button.text}
                leftIcon={<button.icon />}
                  onClick={() => window.location.href = button.path}
                >
                  {button.text}
                </Button>
              ))}
            </Wrap>
            <Text align="left" pt={5}>
              Test ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
              ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod ipsum
              dolor sit amet, consectetur adipiscing elit. Sed euismod.
            </Text>
            create buttons that link to the appropriate page and have the appropriate icon and text and automatically resize based on the number of buttons and page width
        </Flex>
      </Center>
    </div>
  );
}

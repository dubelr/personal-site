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
import { GrLinkedin, GrGithub } from "react-icons/gr";
export default function Home() {
  let name = "Bobby Dubel";
  let buttons = [
    { text: "Resume", icon: HiDocumentText, path:"resume" },
    { text: "Email", icon: HiMail, path:"mailto:dubel.r@notheastern.edu" },
    { text: "@robert-dubel", icon: GrLinkedin, path:"https://www.linkedin.com/in/bobby-dubel-5b1b3b1b9/" },
    { text: "@bobby-dubel", icon: GrGithub, path:"github.com/bobbydubel" },
  ]
  return (
    <div>
      <Head>
        <title>{name}</title>
        <meta name="description" content="Robert Dubel's personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Center pt="75px" px="50px">
        <Flex w="620px" direction="column">
            <HStack spacing={4}>
              <Avatar size="xl" src="/profile.jpg" />
              <VStack align="left">
                <Heading size="lg">{name}</Heading>
                <Text>Software Engineer, Student. He/Him</Text>
              </VStack>
            </HStack>
            <Wrap spacing={5} pt={5}>
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

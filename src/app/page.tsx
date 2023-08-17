"use client";

import {
  Button,
  Center,
  ChakraProvider,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";

export default function Home() {
  const [repoUrl, setRepoUrl] = useState("");
  const [firstCommit, setFirstCommit] = useState("");
  const [lastCommit, setLastCommit] = useState("");
  const [output, setOutput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const res = { repoUrl, firstCommit, lastCommit };
    console.log(res);
    setOutput(JSON.stringify(res, null, 2));
  };

  return (
    <ChakraProvider>
      <Center>
        <VStack>
          <Heading alignSelf="center" textAlign="center" size="4xl" mt={8}>
            Autoblog
          </Heading>
          <form onSubmit={handleSubmit}>
            <VStack alignSelf="center" mt={8} spacing={8} width="lg">
              <FormControl isRequired>
                <FormLabel>GitHub URL</FormLabel>
                <Input
                  type="url"
                  placeholder="https://github.com/freeCodeCamp/freeCodeCamp"
                  value={repoUrl}
                  onChange={(e) => setRepoUrl(e.target.value)}
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>First Commit</FormLabel>
                <Select
                  placeholder="Select first commit"
                  value={firstCommit}
                  onChange={(e) => setFirstCommit(e.target.value)}
                >
                  <option>Commit 1</option>
                  <option>Commit 2</option>
                  <option>Commit 3</option>
                </Select>
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Last Commit</FormLabel>
                <Select
                  placeholder="Select last commit"
                  value={lastCommit}
                  onChange={(e) => setLastCommit(e.target.value)}
                >
                  <option>Commit 1</option>
                  <option>Commit 2</option>
                  <option>Commit 3</option>
                </Select>
              </FormControl>

              <Button type="submit" colorScheme="blue">
                Submit
              </Button>
            </VStack>
          </form>
          <Text mt={8}>{output}</Text>
        </VStack>
      </Center>
    </ChakraProvider>
  );
}

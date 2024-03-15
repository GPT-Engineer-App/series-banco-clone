import React from "react";
import { Box, Heading, Text, Flex, Image, Button, Input, Stack, Icon } from "@chakra-ui/react";
import { FaSearch, FaPlay } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Navbar */}
      <Flex as="nav" align="center" justify="space-between" wrap="wrap" padding="1.5rem" bg="gray.900" color="white">
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={"-.1rem"}>
            Banco de Series
          </Heading>
        </Flex>

        <Stack direction={{ base: "column", md: "row" }} display={{ base: "none", md: "flex" }} width={{ base: "full", md: "auto" }} alignItems="center" flexGrow={1} mt={{ base: 4, md: 0 }}>
          <Text>Series</Text>
          <Text>Movies</Text>
          <Text>Anime</Text>
        </Stack>

        <Box display={{ base: "none", md: "block" }}>
          <Button leftIcon={<FaSearch />} colorScheme="teal" variant="outline">
            Search
          </Button>
        </Box>
      </Flex>

      {/* Hero */}
      <Flex align="center" justify={{ base: "center", md: "space-around", xl: "space-between" }} direction={{ base: "column-reverse", md: "row" }} wrap="no-wrap" minH="70vh" px={8} mb={16} bg="gray.800">
        <Stack spacing={4} w={{ base: "80%", md: "40%" }} align={["center", "center", "flex-start", "flex-start"]}>
          <Heading as="h1" size="xl" fontWeight="bold" color="white" textAlign={["center", "center", "left", "left"]}>
            Watch your favorite series and movies
          </Heading>
          <Heading as="h2" size="md" color="white" opacity="0.8" fontWeight="normal" lineHeight={1.5} textAlign={["center", "center", "left", "left"]}>
            Discover a wide selection of series, movies, and anime. Stream anytime, anywhere.
          </Heading>
          <Input placeholder="Search..." size="lg" bg="white" />
          <Button colorScheme="teal" size="lg" leftIcon={<FaPlay />}>
            Start Watching
          </Button>
        </Stack>
        <Box w={{ base: "80%", sm: "60%", md: "50%" }} mb={{ base: 12, md: 0 }}>
          <Image src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwZW9wbGUlMjB3YXRjaGluZyUyMHR2fGVufDB8fHx8MTcxMDQ3NTYxMXww&ixlib=rb-4.0.3&q=80&w=1080" size="100%" rounded="1rem" shadow="2xl" />
        </Box>
      </Flex>

      {/* Featured Series */}
      <Box p={8}>
        <Heading as="h2" size="xl" mb={4}>
          Featured Series
        </Heading>
        <Flex flexWrap="wrap" justifyContent="center">
          {[1, 2, 3, 4].map((item) => (
            <Box key={item} w="300px" m={4} rounded="md" overflow="hidden" shadow="md">
              <Image src={`https://images.unsplash.com/photo-1580130775562-0ef92da028de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0diUyMHNlcmllcyUyMHBvc3RlciUyMCUyNCU3Qml0ZW0lN0R8ZW58MHx8fHwxNzEwNDc1NjExfDA&ixlib=rb-4.0.3&q=80&w=1080`} alt="Series Poster" />
              <Box p={4}>
                <Heading as="h3" size="md" mb={2}>
                  Series Title {item}
                </Heading>
                <Text>Series description goes here.</Text>
              </Box>
            </Box>
          ))}
        </Flex>
      </Box>

      {/* Footer */}
      <Box bg="gray.900" color="white" py={8} px={12}>
        <Flex justifyContent="space-between" alignItems="center" flexWrap="wrap">
          <Box mb={4}>
            <Heading as="h2" size="md" mb={2}>
              Banco de Series
            </Heading>
            <Text>Watch your favorite series and movies.</Text>
          </Box>
          <Flex>
            <Text mr={4}>About</Text>
            <Text mr={4}>Contact</Text>
            <Text>Terms of Service</Text>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default Index;

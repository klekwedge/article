import { Heading, Flex, Box, Image } from '@chakra-ui/react';

function Share() {
  return (
    <Flex
      position="absolute"
      background="hsl(217, 19%, 35%)"
      zIndex="100"
      top="-35px"
      p="8px 15px"
      borderRadius="5px"
      alignItems="center"
      gap="10px"
      transform="translateX(-50%)"
      left="50%"
    >
      <Heading
        as="h3"
        fontWeight="500"
        textTransform="uppercase"
        color="hsl(212, 23%, 69%)"
        fontSize="8px"
        letterSpacing="2px"
      >
        Share
      </Heading>
      <Flex alignItems="center" gap="5px">
        <Image src="/images/icon-facebook.svg" width="10px" cursor="pointer" />
        <Image src="/images/icon-twitter.svg" width="10px" cursor="pointer" />
        <Image src="/images/icon-pinterest.svg" width="10px" cursor="pointer" />
      </Flex>
      <Box
        transform="translateX(-50%)"
        left="50%"
        top="26px"
        position="absolute"
        borderLeft="5px solid transparent"
        borderRight="5px solid transparent"
        borderTop="5px solid hsl(217, 19%, 35%)"
      />
    </Flex>
  );
}

export default Share;

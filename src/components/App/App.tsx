import { Heading, Flex, Box, Image, Text } from '@chakra-ui/react';
import { useState } from 'react';
import Share from '../Share/Share';

function App() {
  const [isShareOpen, setIsShareOpen] = useState(false);

  return (
    <Flex gap="20px" backgroundColor="white" borderRadius="5px">
      <Image src="/images/drawers.jpg" height="160px" borderRadius="5px 0px 0px 5px" />
      <Box maxW="235px" p="10px 20px 0px 0px">
        <Heading fontWeight="700" color="hsl(217, 19%, 35%)" fontSize="13px" mb="8px" lineHeight="140%">
          Shift the overall look and feel by adding these wonderful touches to furniture in your home
        </Heading>
        <Text as="p" fontSize="8px" fontWeight="500" color="hsl(214, 17%, 51%)" lineHeight="140%" mb="8px">
          Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting.
          I&apos;ve got some simpple tips to help you make any room feel complete.
        </Text>
        <Flex justifyContent="space-between" alignItems="center" gap="20px" flexWrap="wrap">
          <Flex gap="10px" alignItems="center">
            <Image src="/images/avatar-michelle.jpg" borderRadius="50%" height="25px" />
            <Flex flexDirection="column" gap="3px">
              <Heading as="h2" fontWeight="500" fontSize="8px" color="hsl(217, 19%, 35%)">
                Michelle Appleton
              </Heading>
              <Text as="span" fontWeight="500" fontSize="8px" color="hsl(212, 23%, 69%)">
                28 Jun 2020
              </Text>
            </Flex>
          </Flex>
          <Box position="relative">
            <Flex
              justifyContent="center"
              alignItems="center"
              background="hsl(210, 46%, 95%)"
              borderRadius="50%"
              p="3px 3px 5px 4px"
              cursor="pointer"
              onClick={() => setIsShareOpen(!isShareOpen)}
            >
              <Image src="/images/icon-share.svg" width="10px" />
            </Flex>
            {isShareOpen ? <Share /> : ''}
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
}

export default App;

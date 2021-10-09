import React from "react";
import { chakra, Box, Flex, Heading, useColorModeValue, Link, VStack, Image, Center } from "@chakra-ui/react";

export const WorkoutCard = () => {
    return (
        <Box height="280px" width="240px" borderWidth="1px" borderRadius="xl" overflow="hidden">
          <Box height="150px" overflow="hidden">
            <Image objectFit="cover" src={"https://bit.ly/sage-adebayo"} />
          </Box>
        
          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            p="6px"
            isTruncated
            >
            <Heading as="h1" size="l" isTruncated>
                Shoulder Program
            </Heading>
          </Box>
          <Box p="6px">
            <chakra.p
                mt={2}
                color={useColorModeValue("gray.800", "white")}
            >
                AP® Psychology - Course 5: Health and Behavior
            </chakra.p>
        </Box>
        </Box>
      )
};

export default WorkoutCard;
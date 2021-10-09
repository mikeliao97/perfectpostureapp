import React from "react";
import { Divider, Box, Image, chakra, Heading, Button} from "@chakra-ui/react";


const data = [
  { name: "Standing Shoulder External Rotation", description: "5 reps | 1 set | 20s hold"},
  { name: "Seated Shoulder circles", description: "5 reps | 1 set | 20s hold"},
  { name: "Lorem Impsum", description: "5 reps | 1 set | 20s hold"},
  { name: "Mark wilson", description: "5 reps | 1 set | 20s hold"},
];

export const Table = () => {
    return (
       <Box borderRadius="2" display="flex" flexDirection="column">
          {data.map((obj, id) => {
            return (
              <>
              <Box height="60px" display="flex" alignItems="center">
                <Box height="40px" width="40px">
                  <Image objectFit="cover" src={"https://bit.ly/sage-adebayo"} /> 
                </Box>
                <Box paddingLeft="6px" height="43px" display="flex" flexDir="column" justifyContent="space-between">
                  <b> <chakra.h1>{obj['name']}</chakra.h1> </b>
                  <chakra.p>{obj['description']}</chakra.p>
                </Box>

              </Box> 
              <Divider />
              </>
            )
          })}
       </Box>
    ) 
};

export const ProgramTable = () => {
  return (
    <Box width="850px" display="flex" flexDirection="column">
      <Box display="flex" justifyContent="space-between" marginBottom="10px">
        <Heading>Psoas Workout</Heading>
        <Button>Select Workout</Button>
      </Box>
      <Table />
    </Box>
  )
}

export default ProgramTable;
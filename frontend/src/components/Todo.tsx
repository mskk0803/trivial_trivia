import React from "react";
import { Text, Flex } from "@chakra-ui/react";

const Todo = (props) => {

return (
<Flex mb="16px" justifyContent="space-between" alignItems="center">
<Text>・{props.content}</Text>
</Flex>
);
};

export default Todo;
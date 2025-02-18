import React from 'react';
import { useState, useEffect } from 'react';
import '../styles/App.css';
import Todo from '../components/Todo.tsx';
import {
  Flex,
  Center,
  Box,
  CheckboxGroup,
  Text,
  Input,
  Button,
  } from "@chakra-ui/react";
import axios from "axios";
import{ useNavigate } from 'react-router-dom'

type JsonType = {
  id: number;
  content: string;
  created_at: string;
  updated_at: string;
}

function App() {

  const [contents, setContents] = useState<JsonType[]>([]);

  const navigate = useNavigate();


  const getTodos = () =>{
    // getメソッドでの通信
    axios.get("http://localhost:3000/api/todos")
    // 成功時
    .then((response) => {
      setContents(response.data);
      console.log(response.data);
    })
    // 失敗時
    .catch((error) => {
      window.alert(error.message)
    })
  }

  // const createTodo = () => {
  //   axios.post("http://localhost:3000/api/todos",{
  //     content: content
  //   })
  //   .then(()=>{
  //     setContent("");
  //     getTodos();
  //   })
  //   .catch((error) => {
  //     window.alert(error.message)
  //   })
  // }

useEffect(() => {
  getTodos();
},[])

  return (
    <Box mt="64px">
      {/* ページ遷移できた！ */}
      <button onClick={() => navigate("new")}>newに行きたい</button>
      {/* chakraUIのButtonはどうする？ */}
      <Button onClick={() => navigate("new")}>newに行きたいの！</Button>
    <Center>
    <Box>
    <Box mb="24px">
    <Text fontSize="24px" fontWeight="bold">
    Todoリスト
    </Text>
    </Box>
    <Flex mb="24px">
    <Input
    placeholder="Todoを入力"
    />
    <Box ml="16px">
    <Button colorScheme='blue' >
    追加
    </Button>
    </Box>
    </Flex>
    <CheckboxGroup>
    {
      contents.map((content) => {
        return(
          <Todo key={content.id} content={content.content}/>
        )
      })
    }
    </CheckboxGroup>
    </Box>
    </Center>
    </Box>
    );
}

export default App;

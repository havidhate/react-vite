import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setLogs } from "../redux/logsSlice";
import { Box, Button, Textarea, Heading, useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export const UploadPage = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();

  const handleUpload = () => {
    try {
      const logs = JSON.parse(text);
      if (!Array.isArray(logs)) throw new Error("Not an array");
      dispatch(setLogs(logs));
      toast({
        title: "Upload successful.",
        description: "Logs have been stored.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      navigate("/logs");
    } catch (error) {
      toast({
        title: "Upload failed.",
        description: "Invalid JSON format.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box p={6}>
      <Heading mb={4}>Upload JSON Logs</Heading>
      <Textarea
        placeholder="Paste JSON array of logs here..."
        height="200px"
        value={text}
        onChange={(e) => setText(e.target.value)}
        mb={4}
      />
      <Button colorScheme="teal" onClick={handleUpload}>
        Upload
      </Button>
    </Box>
  );
};

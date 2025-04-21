import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  Box,
  Heading,
  Text,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
} from "@chakra-ui/react";

export const SearchView = () => {
  const { devId } = useParams();
  const logs = useSelector((state) => state.logs.originalLogs);
  const filtered = logs.filter((log) => log.devId === devId);

  return (
    <Box p={6}>
      <Heading size="md" mb={4}>
        Logs for Developer: {devId}
      </Heading>

      {filtered.length === 0 ? (
        <Text>No logs found for this developer.</Text>
      ) : (
        <Table variant="striped" colorScheme="teal">
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Timestamp</Th>
              <Th>Severity</Th>
              <Th>Message</Th>
            </Tr>
          </Thead>
          <Tbody>
            {filtered.map((log) => (
              <Tr key={log.id}>
                <Td>{log.id}</Td>
                <Td>{log.timestamp}</Td>
                <Td>{log.severity}</Td>
                <Td>{log.message}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      )}
    </Box>
  );
};

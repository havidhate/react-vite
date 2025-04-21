import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Box,
  Text,
  Badge,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";

const severityColorMap = {
  low: "green",
  medium: "yellow",
  high: "orange",
  critical: "red",
};

export function LogTable() {
  const logs = useSelector((state) => state.logs.filteredLogs);

  if (logs.length === 0) {
    return (
      <Box p={4} borderWidth="1px" borderRadius="md" bg="gray.100">
        <Text>No logs found. Try adjusting the filters.</Text>
      </Box>
    );
  }

  return (
    <TableContainer borderWidth="1px" borderRadius="md" overflowX="auto">
      <Table variant="striped" size="md">
        <Thead bg="blue.500">
          <Tr>
            <Th color="white">ID</Th>
            <Th color="white">Timestamp</Th>
            <Th color="white">Severity</Th>
            <Th color="white">Message</Th>
            <Th color="white">Developer ID</Th>
          </Tr>
        </Thead>
        <Tbody>
          {logs.map((log) => (
            <Tr key={log.id}>
              <Td>{log.id}</Td>
              <Td>{log.timestamp}</Td>
              <Td>
                <Badge colorScheme={severityColorMap[log.severity]}>
                  {log.severity}
                </Badge>
              </Td>
              <Td>{log.message}</Td>
              <Td>{log.devId}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

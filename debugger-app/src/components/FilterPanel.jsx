import React, { useReducer, useEffect } from "react";
import {
  Box,
  Select,
  Input,
  Button,
  VStack,
  HStack,
  FormLabel,
} from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { filterLogs } from "../redux/logsSlice";
import { filterReducer, initialFilterState } from "../reducers/filterReducer";

export function FilterPanel() {
  const dispatch = useDispatch();
  const logs = useSelector((state) => state.logs.allLogs);

  const [filterState, filterDispatch] = useReducer(
    filterReducer,
    initialFilterState
  );

  const handleFilter = () => {
    let filtered = logs;

    if (filterState.severity) {
      filtered = filtered.filter(
        (log) => log.severity === filterState.severity
      );
    }

    if (filterState.devId) {
      filtered = filtered.filter((log) =>
        log.devId.toLowerCase().includes(filterState.devId.toLowerCase())
      );
    }

    if (filterState.timeRange.from && filterState.timeRange.to) {
      const from = parseInt(filterState.timeRange.from);
      const to = parseInt(filterState.timeRange.to);
      filtered = filtered.filter(
        (log) => log.timestamp >= from && log.timestamp <= to
      );
    }

    dispatch(filterLogs(filtered));
  };

  useEffect(() => {
    handleFilter();
  }, [filterState]);

  return (
    <Box borderWidth="1px" borderRadius="lg" p={4} mb={4} bg="gray.50">
      <VStack spacing={4} align="start">
        <HStack spacing={4}>
          <Box>
            <FormLabel>Severity</FormLabel>
            <Select
              placeholder="Select severity"
              onChange={(e) =>
                filterDispatch({
                  type: "SET_SEVERITY",
                  payload: e.target.value,
                })
              }
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
              <option value="critical">Critical</option>
            </Select>
          </Box>

          <Box>
            <FormLabel>Developer ID</FormLabel>
            <Input
              placeholder="Enter developer ID"
              onChange={(e) =>
                filterDispatch({ type: "SET_DEVID", payload: e.target.value })
              }
            />
          </Box>
        </HStack>

        <HStack spacing={4}>
          <Box>
            <FormLabel>From Timestamp</FormLabel>
            <Input
              type="number"
              onChange={(e) =>
                filterDispatch({
                  type: "SET_TIMERANGE",
                  payload: {
                    ...filterState.timeRange,
                    from: e.target.value,
                  },
                })
              }
            />
          </Box>

          <Box>
            <FormLabel>To Timestamp</FormLabel>
            <Input
              type="number"
              onChange={(e) =>
                filterDispatch({
                  type: "SET_TIMERANGE",
                  payload: {
                    ...filterState.timeRange,
                    to: e.target.value,
                  },
                })
              }
            />
          </Box>
        </HStack>

        <Button colorScheme="blue" onClick={handleFilter}>
          Apply Filters
        </Button>

        <Button
          variant="outline"
          onClick={() => filterDispatch({ type: "RESET" })}
        >
          Reset Filters
        </Button>
      </VStack>
    </Box>
  );
}

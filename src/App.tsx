import { Grid, List, Text } from "@chakra-ui/react";
import type { FC } from "react";
import { LuHourglass, LuUserRound } from "react-icons/lu";

// https://react-icons.github.io/react-icons/icons/lu/
const typeToIcon = {
  wait: LuHourglass,
  act: LuUserRound,
};

const humanReadableTime = (timeInMin: number) => {
  const minutesPerHour = 60;
  const hours = timeInMin / minutesPerHour;
  if (hours >= 1) {
    const minutes = timeInMin % minutesPerHour;
    return `${hours}h ${minutes}m`;
  }
  return `${timeInMin}m`;
};

const Step: FC<{
  type: "wait" | "act";
  timeInMin: number;
  description: string;
}> = ({ description, timeInMin, type }) => {
  const Icon = typeToIcon[type];
  return (
    <List.Item flexDir="row">
      <Grid templateColumns={"40px 100px 1fr"} verticalAlign={"middle"}>
        <Icon size={32} />
        <Text>{humanReadableTime(timeInMin)}</Text>
        <Text>{description}</Text>
      </Grid>
    </List.Item>
  );
};

function App() {
  return (
    <List.Root gap={4}>
      <Step description="Mix ingredients" type="act" timeInMin={30} />
      <Step description="Mix ingredients" type="act" timeInMin={60 * 24} />
      <Step description="Mix ingredients" type="act" timeInMin={30} />
      <Step description="Mix ingredients" type="act" timeInMin={30} />
    </List.Root>
  );
}

export default App;

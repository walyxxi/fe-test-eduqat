import {
  IconEye,
  IconPencil,
  IconPlus,
  IconSixDot,
  IconTreeDot,
} from "../../assets/Icons";
import { Button, Card, Flex, StyledIcon, Text } from "../../components";
import Layout from "../../layout";
import Lessons from "./Lessons";

const Event = () => {
  const SESSIONs = [
    {
      name: "Session 1",
      lessons: [
        { title: "Video", type: "video", date: "" },
        { title: "Location", type: "location", date: "" },
      ],
    },
    {
      name: "Session 2",
      lessons: [{ title: "Video", type: "video", date: "" }],
    },
  ];

  return (
    <Layout title="Event">
      <Flex justify="space-between" mb="20px">
        <Flex alignItems="center">
          <Text size="2xl">Belajar dan praktek cinematic videography</Text>
          <Text size="sm" ml="30px" color="gray_300">
            Last edited 18 October 2021 | 13:23
          </Text>
        </Flex>
        <Button variant="outlined" color="primary">
          <StyledIcon>
            <IconEye />
          </StyledIcon>
          <Text ml="2px">Preview</Text>
        </Button>
      </Flex>

      <Flex
        w="100%"
        borderWidth="0 0 1px 0"
        borderColor="gray_200"
        borderStyle="solid"
        mb="40px"
      >
        <Text
          p="14px 0"
          color="primary"
          borderWidth="0 0 2px 0"
          borderStyle="solid"
          borderColor="primary"
        >
          Curricullum
        </Text>
      </Flex>

      <Card p="24px" mb="26px">
        Event Schedule: 24 Oktober 2021, 16:30
      </Card>

      {SESSIONs.map((session, idx) => (
        <Card key={idx} p="16px 18px" mb="18px" cursor="pointer">
          <Flex justify="space-between" alignItems="center" mb="16px">
            <Flex gap="8px" alignItems="center">
              <StyledIcon color="gray_300">
                <IconSixDot />
              </StyledIcon>
              <Text size="xl">{session.name}</Text>
              <Button size="small">
                <StyledIcon color="gray_300" size="small">
                  <IconPencil />
                </StyledIcon>
              </Button>
            </Flex>
            <Button size="small">
              <StyledIcon color="black" size="large">
                <IconTreeDot />
              </StyledIcon>
            </Button>
          </Flex>
          <Lessons data={session.lessons} />
        </Card>
      ))}

      <Flex justify="flex-end">
        <Button size="large" variant="contained" color="primary">
          <StyledIcon size="sm" color="white">
            <IconPlus />
          </StyledIcon>
          <Text ml="2px">Add Session</Text>
        </Button>
      </Flex>
    </Layout>
  );
};

export default Event;

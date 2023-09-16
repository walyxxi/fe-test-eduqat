import { useCallback, useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { reorderArray } from "../../../utils";
import { IconEye, IconPlus } from "../../assets/Icons";
import { Button, Card, Flex, StyledIcon, Text } from "../../components";
import Layout from "../../layout";
import Sessions from "./Sessions";
import AddSession from "./Sessions/Add";

const SESSIONs = [
  {
    id: "item-1",
    name: "Session 1",
    lessons: [
      { id: "1", title: "Video", type: "video", date: "" },
      { id: "2", title: "Location", type: "location", date: "" },
      { id: "3", title: "Location 3", type: "location", date: "" },
    ],
  },
  {
    id: "item-2",
    name: "Session 2",
    lessons: [{ id: "1", title: "Video", type: "video", date: "" }],
  },
];

const Event = () => {
  const [data, setData] = useState(SESSIONs);
  const [isAddSession, setIsAddSession] = useState(false);

  const toogleAddSession = () => setIsAddSession(!isAddSession);

  const onDragEnd = useCallback(
    (result) => {
      // dropped outside the list
      if (!result.destination) {
        return;
      }

      const items = reorderArray(
        data,
        result.source.index,
        result.destination.index
      );

      setData(items);
    },
    [data]
  );

  const handleChangeLesson = useCallback(
    (idx, session, lessons) => {
      const _data = [...data];
      _data.splice(idx, 1, { ...session, lessons });
      setData(_data);
    },
    [data]
  );

  const handleChangeSession = useCallback(
    (idx, session) => {
      const _data = [...data];
      _data.splice(idx, 1, session);
      setData(_data);
    },
    [data]
  );

  const handleAddSession = (session) => {
    toogleAddSession();
    const _data = [...data];
    _data.push(session);
    setData(_data);
  };

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

      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="sessions">
          {(provided) => (
            <Flex
              {...provided.droppableProps}
              ref={provided.innerRef}
              w="100%"
              direction="column"
            >
              {data.map((session, idx) => (
                <Sessions
                  key={session.id}
                  idx={idx}
                  data={session}
                  handleChangeLesson={(lessons) =>
                    handleChangeLesson(idx, session, lessons)
                  }
                  handleChangeSession={(session) =>
                    handleChangeSession(idx, session)
                  }
                />
              ))}
              {provided.placeholder}
            </Flex>
          )}
        </Droppable>
      </DragDropContext>

      {isAddSession ? (
        <AddSession handleAddSession={handleAddSession} />
      ) : (
        <Flex justify="flex-end">
          <Button
            size="large"
            variant="contained"
            color="primary"
            onClick={toogleAddSession}
          >
            <StyledIcon size="sm" color="white">
              <IconPlus />
            </StyledIcon>
            <Text ml="2px">Add Session</Text>
          </Button>
        </Flex>
      )}
    </Layout>
  );
};

export default Event;

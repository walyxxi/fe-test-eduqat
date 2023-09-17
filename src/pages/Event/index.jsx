import { useCallback, useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { reorderArray } from "../../../utils";
import { IconEye, IconPlus } from "../../assets/Icons";
import { Button, Card, Flex, StyledIcon, Text } from "../../components";
import Layout from "../../layout";
import Session from "./Session";
import AddSession from "./Session/Add";

const DUMMY_SESSION = [
  {
    id: "item-1",
    name: "Session 1",
    lessons: [
      {
        id: "1",
        title: "Lesson 1",
        type: "video",
        date: "2023-09-20T16:48",
        duration: 30,
      },
      {
        id: "2",
        title: "Lesson 2",
        type: "location",
        date: "2023-09-22T12:48",
        duration: 40,
      },
    ],
  },
  {
    id: "item-2",
    name: "Session 2",
    lessons: [
      {
        id: "1",
        title: "Lesson 1",
        type: "video",
        date: "2023-09-20T16:48",
        duration: 30,
      },
    ],
  },
];

const Event = () => {
  const [data, setData] = useState(DUMMY_SESSION);
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

  const handleUpdateLesson = useCallback(
    (idx, session, lessons) => {
      const _data = [...data];
      _data.splice(idx, 1, { ...session, lessons });
      setData(_data);
    },
    [data]
  );

  const handleUpdateSession = useCallback(
    (idx, session, action) => {
      const _data = [...data];

      if (action === "delete") {
        _data.splice(idx, 1);
      } else {
        _data.splice(idx, 1, session);
      }

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
                <Session
                  key={session.id}
                  idx={idx}
                  data={session}
                  handleUpdateLesson={(lessons) =>
                    handleUpdateLesson(idx, session, lessons)
                  }
                  handleUpdateSession={(session, action) =>
                    handleUpdateSession(idx, session, action)
                  }
                />
              ))}
              {provided.placeholder}
            </Flex>
          )}
        </Droppable>
      </DragDropContext>

      {isAddSession ? (
        <AddSession
          handleAddSession={handleAddSession}
          onClose={toogleAddSession}
        />
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

import { useCallback, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
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
import { reorderArray } from "../../../utils";

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

  const onDragEndLesson = useCallback(
    (idx, session, lessons) => {
      const _data = [...data];
      _data.splice(idx, 1, { ...session, lessons });
      setData(_data);
    },
    [data]
  );

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
                <Draggable
                  key={session.id}
                  draggableId={session.id}
                  index={idx}
                >
                  {(provided, snapshot) => (
                    <Card
                      p="16px"
                      mb="18px"
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      bgColor={snapshot.isDragging ? "gray_50" : "none"}
                    >
                      <Flex
                        justify="space-between"
                        alignItems="center"
                        mb="16px"
                      >
                        <Flex gap="8px" alignItems="center">
                          <Button size="small" {...provided.dragHandleProps}>
                            <StyledIcon color="gray_300">
                              <IconSixDot />
                            </StyledIcon>
                          </Button>
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
                      <Lessons
                        data={session.lessons}
                        onDragEndLesson={(lessons) =>
                          onDragEndLesson(idx, session, lessons)
                        }
                      />
                    </Card>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </Flex>
          )}
        </Droppable>
      </DragDropContext>

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

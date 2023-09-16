import { reorderArray } from "../../../utils";
import {
  IconClock,
  IconDot,
  IconLocation,
  IconPlus,
  IconSixDot,
  IconTreeDotH,
  IconVideo,
} from "../../assets/Icons";
import { Button, Flex, StyledIcon, Text } from "../../components";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const lessonIcon = {
  video: <IconVideo />,
  location: <IconLocation />,
};

const Lessons = ({ data, onDragEndLesson }) => {
  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const items = reorderArray(
      data,
      result.source.index,
      result.destination.index
    );

    onDragEndLesson(items);
  };

  return (
    <Flex ml="20px" direction="column" gap="10px">
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="lessons">
          {(provided) => (
            <Flex
              {...provided.droppableProps}
              ref={provided.innerRef}
              w="100%"
              direction="column"
            >
              {data.map((lesson, idx) => (
                <Draggable key={lesson.id} draggableId={lesson.id} index={idx}>
                  {(provided, snapshot) => (
                    <Flex
                      w="100%"
                      p="6px"
                      mb="10px"
                      justify="space-between"
                      alignItems="center"
                      hoverColor="gray_50"
                      bgColor={snapshot.isDragging ? "gray_50" : "white"}
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                    >
                      <Flex gap="8px" alignItems="center">
                        <Button size="small" {...provided.dragHandleProps}>
                          <StyledIcon color="gray_300">
                            <IconSixDot />
                          </StyledIcon>
                        </Button>
                        <StyledIcon size="large" bgColor="gray_50" p="4px">
                          {lessonIcon[lesson.type]}
                        </StyledIcon>
                        <Text
                          borderWidth="0 1px 0 0"
                          borderStyle="solid"
                          borderColor="gray_200"
                          p="0 8px 0 0"
                        >
                          {lesson.title}
                        </Text>
                        <Text color="primary">Required</Text>
                      </Flex>
                      <Flex gap="6px" alignItems="center">
                        <StyledIcon>
                          <IconClock />
                        </StyledIcon>
                        <Text>24 Oktober 2021, 16:30</Text>
                        <StyledIcon color="gray_300" size="small">
                          <IconDot />
                        </StyledIcon>
                        <StyledIcon>
                          <IconClock />
                        </StyledIcon>
                        <Text mr="10px">60 Minute</Text>
                        <Button size="small">
                          <StyledIcon size="large">
                            <IconTreeDotH />
                          </StyledIcon>
                        </Button>
                      </Flex>
                    </Flex>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </Flex>
          )}
        </Droppable>
      </DragDropContext>

      <Flex alignItems="center" gap="10px" p="4px 0" ml="8px">
        <Button size="small" variant="contained" color="primary">
          <StyledIcon size="small">
            <IconPlus />
          </StyledIcon>
        </Button>
        <Text>Add Lesson Material</Text>
      </Flex>
    </Flex>
  );
};

export default Lessons;

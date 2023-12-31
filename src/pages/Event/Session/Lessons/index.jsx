import { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { reorderArray } from "../../../../utils";
import {
  IconClock,
  IconDot,
  IconLocation,
  IconPlus,
  IconSixDot,
  IconTrash,
  IconVideo,
} from "../../../../assets/Icons";
import { Button, Flex, StyledIcon, Text } from "../../../../components";
import AddLesson from "./Add";
import dayjs from "dayjs";

const lessonIcon = {
  video: <IconVideo />,
  location: <IconLocation />,
};

const Lessons = ({ data, handleUpdateLesson }) => {
  const [isAddLesson, setIsAddLesson] = useState(false);

  const toogleAddLesson = () => setIsAddLesson(!isAddLesson);

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const items = reorderArray(
      data,
      result.source.index,
      result.destination.index
    );

    handleUpdateLesson(items);
  };

  const onAddLesson = (newLesson) => {
    const items = [...data];
    items.push(newLesson);
    handleUpdateLesson(items);
  };

  const onDeleteLesson = (idx) => {
    const items = [...data];
    items.splice(idx, 1);
    handleUpdateLesson(items);
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
                      items="center"
                      hovercolor="gray_50"
                      bgcolor={snapshot.isDragging ? "gray_50" : "white"}
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                    >
                      <Flex gap="8px" items="center">
                        <Button size="small" {...provided.dragHandleProps}>
                          <StyledIcon color="gray_300">
                            <IconSixDot />
                          </StyledIcon>
                        </Button>
                        <StyledIcon size="large" bgcolor="gray_50" p="4px">
                          {lessonIcon[lesson.type]}
                        </StyledIcon>
                        <Text
                          bdwidth="0 1px 0 0"
                          bdstyle="solid"
                          bdcolor="gray_200"
                          p="0 8px 0 0"
                        >
                          {lesson.title}
                        </Text>
                        <Text color="primary">Required</Text>
                      </Flex>
                      <Flex gap="6px" items="center">
                        <StyledIcon>
                          <IconClock />
                        </StyledIcon>
                        <Text>
                          {dayjs(lesson.date).format("DD MMMM YYYY, hh:mm")}
                        </Text>
                        <StyledIcon color="gray_300" size="small">
                          <IconDot />
                        </StyledIcon>
                        <StyledIcon>
                          <IconClock />
                        </StyledIcon>
                        <Text mr="10px">{lesson.duration} Minute</Text>
                        <Button
                          size="small"
                          onClick={() => onDeleteLesson(idx)}
                        >
                          <StyledIcon color="red">
                            <IconTrash />
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

      {isAddLesson ? (
        <AddLesson onClose={toogleAddLesson} onAddLesson={onAddLesson} />
      ) : (
        <Flex items="center" gap="10px" p="4px 0" ml="8px">
          <Button
            size="small"
            variant="contained"
            color="primary"
            onClick={toogleAddLesson}
          >
            <StyledIcon size="small">
              <IconPlus />
            </StyledIcon>
          </Button>
          <Text>Add Lesson Material</Text>
        </Flex>
      )}
    </Flex>
  );
};

export default Lessons;

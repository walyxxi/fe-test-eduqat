import { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import {
  IconCheck,
  IconPencil,
  IconSixDot,
  IconTrash,
} from "../../../assets/Icons";
import {
  Button,
  Card,
  Flex,
  Input,
  StyledIcon,
  Text,
} from "../../../components";
import Lessons from "./Lessons";

const Session = ({ idx, data, handleUpdateLesson, handleUpdateSession }) => {
  const [isEditName, setIsEditName] = useState(false);
  const [name, setName] = useState(data.name);

  const toogleIsEditName = () => setIsEditName(!isEditName);

  const onSaveName = () => {
    handleUpdateSession({ ...data, name });
    toogleIsEditName();
  };

  const onDeleteSession = () => handleUpdateSession(data, "delete");

  return (
    <Draggable key={data.id} draggableId={data.id} index={idx}>
      {(provided, snapshot) => (
        <Card
          p="16px"
          mb="18px"
          ref={provided.innerRef}
          {...provided.draggableProps}
          bgColor={snapshot.isDragging ? "gray_50" : "none"}
        >
          <Flex justify="space-between" alignItems="center" mb="16px">
            <Flex gap="8px" alignItems="center">
              <Button size="small" {...provided.dragHandleProps}>
                <StyledIcon color="gray_300">
                  <IconSixDot />
                </StyledIcon>
              </Button>
              {isEditName ? (
                <>
                  <Input
                    type="text"
                    value={name}
                    placeholder="Session Name"
                    onChange={(e) => setName(e.target.value)}
                    autoFocus
                    size="large"
                  />
                  <Button size="small" color="gray_50" onClick={onSaveName}>
                    <StyledIcon color="primary">
                      <IconCheck />
                    </StyledIcon>
                  </Button>
                </>
              ) : (
                <>
                  <Text size="xl">{data.name}</Text>
                  <Button size="small" onClick={toogleIsEditName}>
                    <StyledIcon color="gray_300">
                      <IconPencil />
                    </StyledIcon>
                  </Button>
                </>
              )}
            </Flex>
            <Button size="small" onClick={onDeleteSession}>
              <StyledIcon color="red">
                <IconTrash />
              </StyledIcon>
            </Button>
          </Flex>
          <Lessons
            data={data.lessons}
            handleUpdateLesson={handleUpdateLesson}
          />
        </Card>
      )}
    </Draggable>
  );
};

export default Session;

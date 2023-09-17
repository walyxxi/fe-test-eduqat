import { Button, Card, Flex, Input, StyledIcon } from "../../../components";
import { IconCheck, IconXMark } from "../../../assets/Icons";
import { useState } from "react";
import { SESSION_DEFAULT } from "../../../constant";
import { generateString } from "../../../utils";

const AddSession = ({ handleAddSession, onClose }) => {
  const [name, setName] = useState("");

  const onSave = () => {
    handleAddSession({
      ...SESSION_DEFAULT,
      id: generateString(6),
      name,
    });
    setName("");
  };

  return (
    <Card p="24px">
      <Flex gap="10px">
        <Input
          value={name}
          placeholder="Session Name"
          onChange={(e) => setName(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && onSave()}
          size="large"
          autoFocus
        />
        <Button
          size="small"
          color="gray_50"
          onClick={onSave}
          disabled={name.length < 1}
        >
          <StyledIcon color="primary">
            <IconCheck />
          </StyledIcon>
        </Button>
        <Button size="small" color="gray_50" onClick={onClose}>
          <StyledIcon color="red">
            <IconXMark />
          </StyledIcon>
        </Button>
      </Flex>
    </Card>
  );
};

export default AddSession;

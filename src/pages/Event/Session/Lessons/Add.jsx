import { useCallback, useEffect, useState } from "react";
import { IconCheck, IconXMark } from "../../../../assets/Icons";
import { Button, Flex, Input, StyledIcon } from "../../../../components";
import Select from "../../../../components/atoms/Select";
import { LESSON_DEFAULT } from "../../../../constant";
import { generateString } from "../../../../utils";

const AddLesson = ({ onAddLesson, onClose }) => {
  const [form, setForm] = useState(LESSON_DEFAULT);
  const [disabledSubmit, setDisabledSubmit] = useState(true);

  const { type, title, date, duration } = form;

  const handleOnChange = useCallback(
    (e) => setForm({ ...form, [e.target.name]: e.target.value }),
    [form]
  );

  const onSubmit = (e) => {
    e.preventDefault();
    onClose();

    const data = {
      ...form,
      id: generateString(6),
    };

    onAddLesson(data);
  };

  useEffect(() => {
    if (type === "" || title === "" || date === "" || duration === "") {
      setDisabledSubmit(true);
    } else {
      setDisabledSubmit(false);
    }
  }, [type, title, date, duration]);

  return (
    <form onSubmit={onSubmit}>
      <Flex items="center" gap="12px" ml="10px" wrap="wrap">
        <Select name="type" value={type} onChange={handleOnChange}>
          <option>Select Type</option>
          <option value="video">Video</option>
          <option value="location">Location</option>
        </Select>
        <Input
          type="text"
          placeholder="Title"
          name="title"
          value={title}
          onChange={handleOnChange}
        />
        <Input
          type="datetime-local"
          name="date"
          value={date}
          onChange={handleOnChange}
        />
        <Input
          type="number"
          placeholder="Duration"
          name="duration"
          value={duration}
          onChange={handleOnChange}
        />
        <Flex gap="8px">
          <Button
            type="submit"
            size="small"
            color="gray_50"
            // onClick={onSave}
            disabled={disabledSubmit}
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
      </Flex>
    </form>
  );
};

export default AddLesson;

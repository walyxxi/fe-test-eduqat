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

const lessonIcon = {
  video: <IconVideo />,
  location: <IconLocation />,
};

const Lessons = ({ data }) => {
  return (
    <Flex ml="22px" direction="column" gap="14px">
      {data.map((lesson, idx) => (
        <Flex
          key={idx}
          w="100%"
          p="6px 4px"
          justify="space-between"
          alignItems="center"
          hoverColor="gray_50"
        >
          <Flex gap="8px" alignItems="center">
            <StyledIcon color="gray_300">
              <IconSixDot />
            </StyledIcon>
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
      ))}
      <Flex alignItems="center" gap="10px" p="4px 0">
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

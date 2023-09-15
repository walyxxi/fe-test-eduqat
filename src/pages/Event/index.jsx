import { IconEye } from "../../assets/Icons";
import { Button, Flex, StyledIcon, Text } from "../../components";
import Layout from "../../layout";

const Event = () => {
  return (
    <Layout title="Event">
      <Flex justify="space-between">
        <Flex alignItem="center">
          <Text size="2xl">Belajar dan praktek cinematic videography</Text>
          <Text size="sm" ml="30px" color="gray_200">
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
    </Layout>
  );
};

export default Event;

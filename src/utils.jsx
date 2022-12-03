import {
  Card,
  Center,
  Container,
  Text,
  Stack,
  Title,
  Button,
  Space,
  Divider,
} from "@mantine/core";

export function Head(props) {
  return (
    <Center style={{ width: "100%", height: "100%" }}>
      <Card style={{ minWidth: 350 }}>
        <Container px="xl">
          <Title order={1} fw={700} ta="center" variant="gradient">
            KASE-B
          </Title>
          <Space h="md" />
          <Divider size="xs" />
          <Space h="md" />
          <Stack spacing="xl"></Stack>
          {props.children}
        </Container>
      </Card>
    </Center>
  );
}

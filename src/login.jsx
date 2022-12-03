import { useMetaMask } from "metamask-react";
import { Head } from "./utils";
import { useEffect } from "react";
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

export default function Login() {
  const { status, connect } = useMetaMask();
  return (
    <Head>
      <Text fz="l" fw={500}>
        Connect your wallet to continue
      </Text>
      <Space h="md" />
      <Button
        onClick={connect}
        variant="gradient"
        loading={status === "connecting"}
      >
        Login with MetaMask
      </Button>
    </Head>
  );
}

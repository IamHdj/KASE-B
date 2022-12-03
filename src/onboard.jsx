import { useEffect, useState } from "react";
import { useMetaMask } from "metamask-react";
import {
  TextInput,
  Checkbox,
  Button,
  Group,
  Box,
  PasswordInput,
  Stack,
  Divider,
  Space,
} from "@mantine/core";
import axios from "axios";
import { useForm } from "@mantine/form";
import { Org } from "./org";
import { Head } from "./utils";

export default function Onboard(props) {
  return (
    <Head>
      <Stack>
        <Org name="Amex Inc." />
        <Org name="Unity Bank" />
        <Org name="Payless Inc." />
        <Space />
        <Divider />
        <Button variant="gradient" onClick={() => props.setIsLogged(false)}>
          Update credentials
        </Button>
      </Stack>
    </Head>
  );
}

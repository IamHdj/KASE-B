import { useEffect, useState } from "react";
import { Head } from "./utils";
import { useMetaMask } from "metamask-react";
import {
  TextInput,
  Checkbox,
  Button,
  Group,
  Box,
  PasswordInput,
  Stack,
} from "@mantine/core";
import axios from "axios";
import { useForm } from "@mantine/form";
import Onboard from "./onboard";
import { Org } from "./org";
import { add } from "./data";

export default function Home(props) {
  const account = add.user;

  const postt = (values) => {
    const data = { ...values, userAddress: account };

    console.table(data);
    axios
      .post("http://localhost:3000/customer/register", data)
      .then(function (response) {
        // handle success
        console.table(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  // Handle function
  const display = (values) => {
    console.log(account);
    console.table(values);
    postt(values);
    props.setIsLogged(true);
    console.log(props.isLogged);
  };

  // Form Object
  const form = useForm({
    initialValues: {
      emailAddress: "",
      password: "",
      aadhar: "",
      userAddress: "",
    },

    validate: {
      emailAddress: (value) =>
        /^\S+@\S+$/.test(value) ? null : "Invalid email",
      password: (value) =>
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(value)
          ? null
          : "Invalid password",
      aadhar: (value) => (/\d{12}$/.test(value) ? null : "Invalid aadhaar"),
    },
  });

  return (
    <Head>
      <form onSubmit={form.onSubmit((values) => display(values))}>
        <Stack spacing="md">
          <TextInput
            variant="filled"
            withAsterisk
            label="Email"
            {...form.getInputProps("emailAddress")}
          />

          <PasswordInput
            variant="filled"
            label="Password"
            {...form.getInputProps("password")}
            withAsterisk
          />

          <TextInput
            variant="filled"
            placeholder="Aadhaar Number"
            label="Aadhaar Number"
            {...form.getInputProps("aadhar")}
            withAsterisk
          />

          <Group position="right" mt="md">
            <Button type="submit" variant="gradient">
              Submit
            </Button>
          </Group>
        </Stack>
      </form>
    </Head>
  );
}

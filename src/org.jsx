import { Button, Card, Title, Group } from "@mantine/core";
import axios from "axios";
import { add } from "./data";

export function Org(props) {
  const account = add.user;

  const obj = {
    userAddress: account,
    organizationName: props.name,
    organizationAddress: add[props.name],
  };

  const postt = (values) => {
    console.table(obj);
    axios
      .post("http://localhost:3000/business/request", obj)
      .then(function (response) {
        // handle success
        console.table(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  const display = (values) => {
    console.log(account);
    console.table(values);
    postt(values);
  };

  return (
    <Card shadow="xl" withBorder="xl">
      <Group position="apart">
        <Title order={3}>{props.name}</Title>
        <Button variant="gradient" onClick={display}>
          Onboard
        </Button>
      </Group>
    </Card>
  );
}

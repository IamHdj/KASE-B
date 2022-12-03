import { useMetaMask } from "metamask-react";
import Login from "./login";
import Home from "./home";
import { Paper, AspectRatio, AppShell, Navbar, Header } from "@mantine/core";
import { useState } from "react";
import Onboard from "./onboard";

export default function App() {
  const [isLogged, setIsLogged] = useState(false);
  const { status, connect, account, chainId, ethereum } = useMetaMask();
  console.log(status);

  return (
    <AppShell
      padding="md"
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      {isLogged ? (
        <Onboard isLogged={isLogged} setIsLogged={setIsLogged} />
      ) : status === "connected" ? (
        <Home isLogged={isLogged} setIsLogged={setIsLogged} />
      ) : (
        <Login />
      )}
    </AppShell>
  );
}

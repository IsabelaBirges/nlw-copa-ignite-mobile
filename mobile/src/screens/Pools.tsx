import { Icon, VStack } from "native-base";
import { Octicons } from "@expo/vector-icons";

import { Button } from "../components/Button";
import { Header } from "../components/Header";

export function Pools() {
  return (
    <VStack flex={1} bgColor="gray.900">
      <Header title="Meus Bolões" />
      <VStack>
        <Button
          title="BUSCAR BOLÕES POR CÓDIGO"
          leftIcon={<Icon as={Octicons} name="search" color="black" size="md" />}
        />
      </VStack>
    </VStack>
  )
}
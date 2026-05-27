import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <>
      <StatusBar style="light" />

      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: "#080B1A",
          },
          headerTintColor: "#FFFFFF",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          contentStyle: {
            backgroundColor: "#080B1A",
          },
        }}
      >
        <Stack.Screen
          name="index"
          options={{
            title: "AresLife",
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="dashboard"
          options={{
            title: "Dashboard da Colônia",
          }}
        />

        <Stack.Screen
          name="alerts"
          options={{
            title: "Alertas do Habitat",
          }}
        />

        <Stack.Screen
          name="turistas/index"
          options={{
            title: "Turistas Espaciais",
          }}
        />

        <Stack.Screen
          name="turistas/create"
          options={{
            title: "Cadastrar Turista",
          }}
        />

        <Stack.Screen
          name="turistas/edit/[id]"
          options={{
            title: "Editar Turista",
          }}
        />
      </Stack>
    </>
  );
}
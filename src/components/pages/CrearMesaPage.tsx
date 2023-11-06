"use client";

import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import PageContainer from "../layout/PageContainer";
import { SingleDatepicker } from "chakra-dayzed-datepicker";
import { useState } from "react";
import { BsBalloonHeartFill } from "react-icons/bs";
import { useMutation } from "react-query";
import { redirect } from "next/navigation";

export default function CrearMesaPage() {
  const [name, setName] = useState("");
  const [mesaId, setMesaId] = useState("");
  const [eventDate, setEventDate] = useState(new Date());
  const toast = useToast();

  const {
    mutate: handleCreateMesa,
    isLoading,
    isSuccess,
  } = useMutation(
    "create-mesa",
    () =>
      axios.post("/api/mesas", {
        name,
        eventDate,
      }),
    {
      onSuccess: (response) => {
        toast({
          title: "Mesa creada!",
          duration: 3000,
          isClosable: true,
          position: "top-right",
          status: "success",
        });
        setMesaId(response.data.id);
      },
      onError: () => {
        toast({
          title: "No se pudo crear la mesa, intente mas tarde.",
          duration: 5000,
          isClosable: true,
          position: "top-right",
          status: "error",
        });
      },
    }
  );

  if (isSuccess) {
    redirect(`/mimesa/${mesaId}`);
  }

  return (
    <PageContainer>
      <Box bg="white" rounded="lg" boxShadow="lg" p="8">
        <Stack
          as="form"
          spacing="4"
          onSubmit={(e) => {
            e.preventDefault();
            if (name && eventDate) {
              handleCreateMesa();
            }
          }}
        >
          <FormControl id="name">
            <FormLabel>Nombre de la mesa</FormLabel>
            <Input
              required
              value={name}
              onChange={(e) => setName(e.currentTarget.value)}
              placeholder="Boda Mike&Siri"
              type="text"
            />
          </FormControl>
          <FormControl id="eventDate">
            <FormLabel>Fecha del evento</FormLabel>
            <SingleDatepicker
              name="date-input"
              date={eventDate}
              onDateChange={setEventDate}
            />
          </FormControl>
          <Stack>
            <Button
              type="submit"
              variant="brand"
              isLoading={isLoading}
              rightIcon={<BsBalloonHeartFill />}
            >
              Crear
            </Button>
          </Stack>
        </Stack>
      </Box>
    </PageContainer>
  );
}

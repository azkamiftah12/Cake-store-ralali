/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios";
import { useState, useEffect, JSXElementConstructor, PromiseLikeOfReactNode, ReactElement, ReactFragment, ReactNode, SetStateAction, ReactPortal } from "react";

import {
  createStyles,
  rem,
  Badge,
  Button,
  Card,
  Container,
  Grid,
  Group,
  Image,
  Modal,
  Space,
  Text,
  TextInput,
  Title,
  Flex,
  CloseButton,
  Box,
  Textarea,
} from "@mantine/core";
import HeaderMenu from "@/components/HeaderMenu/HeaderMenu";
import FooterMenu from "@/components/FooterMenu/FooterMenu";
import { modals } from "@mantine/modals";
import { useForm } from "@mantine/form";
import { ToastContentProps, Zoom, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDisclosure } from "@mantine/hooks";

const latihan = () => {
  const [data, setData] = useState<any[]>([]);
  const mockapi = "https://611a268fcbf1b30017eb5527.mockapi.io/";
  
  const pageStyle = {
    backgroundColor: "#E0DAD1",
  };

  const useStyles = createStyles((theme) => ({
    hero: {
      position: "relative",
      backgroundImage:
        "url(https://images.unsplash.com/photo-1579246135369-ca8435a5cada?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80)",
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
  
    container: {
      height: rem(700),
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      alignItems: "flex-start",
      paddingBottom: `calc(${theme.spacing.xl} * 6)`,
      zIndex: 1,
      position: "relative",
  
      [theme.fn.smallerThan("sm")]: {
        height: rem(500),
        paddingBottom: `calc(${theme.spacing.xl} * 3)`,
      },
    },
  
    title: {
      color: "#C68B59",
      fontSize: rem(60),
      fontWeight: 900,
      lineHeight: 1.1,
  
      [theme.fn.smallerThan("sm")]: {
        fontSize: rem(40),
        lineHeight: 1.2,
      },
  
      [theme.fn.smallerThan("xs")]: {
        fontSize: rem(28),
        lineHeight: 1.3,
      },
    },
  
    description: {
      color: theme.white,
      maxWidth: 600,
  
      [theme.fn.smallerThan("sm")]: {
        maxWidth: "100%",
        fontSize: theme.fontSizes.sm,
      },
    },
  
    control: {
      backgroundColor: "#402218",
      color: "#C68B59",
      marginTop: `calc(${theme.spacing.xl} * 1.5)`,
      "&:not([data-disabled])": theme.fn.hover({
        backgroundColor: "#C68B59",
        color: theme.fn.darken("#402218", 0.15),
      }),
    },
  }));
  // Custom style to hide the text
  const hiddenTextStyle = {
    display: "none",
  };

  const { classes } = useStyles();


  //notifikasi toast start
  const notifysuccess = (msg: string | number | boolean | ReactFragment | PromiseLikeOfReactNode | ReactElement<any, string | JSXElementConstructor<any>> | ((props: ToastContentProps<unknown>) => ReactNode) | null | undefined) => {
    toast.success(msg, {
      position: "top-center",
      autoClose: 10000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      transition: Zoom,
      theme: "dark",
    });
  };
  const notifyerror = (msg: string | number | boolean | ReactFragment | PromiseLikeOfReactNode | ReactElement<any, string | JSXElementConstructor<any>> | ((props: ToastContentProps<unknown>) => ReactNode) | null | undefined) => {
    toast.error(msg, {
      position: "top-center",
      autoClose: 10000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      transition: Zoom,
      theme: "dark",
    });
  };
  //notifikasi toast end

  //form start
  const form = useForm({
    initialValues: {
      title: "",
      description: "",
      rating: "",
      image: "",
    },
    validate: {
      title: (value) =>
        value.length < 2 ? "Please Fill This!" : null,
      description: (value) =>
        value.length < 2 ? "Please Fill This!" : null,
      rating: (value) =>
        value.length < 2 ? "Please Fill This!" : null,
      image: (value) =>
        value.length < 2 ? "Please Fill This!" : null,
    },
  });
  //Form End

  const getDataCake = async () => {
    const response = await axios.get(
      `${mockapi}cakes?page=1`,
    );
    console.log(response.data.data);
    setData(response.data.data.items);
  };

    //delete
    const handleDelete = async (id: string | Blob) => {
      const bodyFormData = new FormData();
      bodyFormData.append("id", id);
      const response = await axios.delete(
        `${mockapi}cakes/${id}`,
      );
      console.log(id);
      notifyerror(response.data.message);
      getDataCake();
    };
    //delete end
  
    //open model delete start
    const openDeleteModal = (e: { title: string | number | boolean | ReactFragment | ReactPortal | PromiseLikeOfReactNode | ReactElement<any, string | JSXElementConstructor<any>> | null | undefined; id: string | Blob; }) => {
      modals.openConfirmModal({
        title: "Delete Cake",
        centered: true,
        children: (
          <Text size="sm">
            Are you sure you want to delete <strong>{e.title}?</strong>
          </Text>
        ),
        labels: { confirm: "Delete Cake", cancel: "Cancel" },
        confirmProps: { color: "red", variant: 'light' },
        onCancel: () => console.log("Cancel"),
        onConfirm: () => handleDelete(e.id),
      });
    };
    //open model delete end
    
    //open model add start
    const [opened, { open: openAddModal, close }] = useDisclosure(false);
    
    const handleOpenAddModal = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      openAddModal();
    };

    //open model add start

    //Insert
  const handleInsert = async () => {
    const { title } = form.values;
    const { description } = form.values;
    const { rating } = form.values;
    const { image } = form.values;

    const errors = form.validate();
    if (errors.hasErrors) {
      return;
    }

    try {
      const response = await axios.post(
        `${mockapi}cakes`,{
          title: title,
          description: description,
          rating: rating,
          image: image,
        }
      );
      if (response.data.error === true) {
        notifyerror(response.data.message);
      } else {
        close();
        notifysuccess(response.data.message);
        getDataCake();
      }
    } catch (ex: any) {
      console.error(ex);
      if (ex.response && ex.response.data && ex.response.data.message) {
        notifyerror(ex.response.data.message);
      } else {
        notifyerror(
          "An error occurred while making the request. Check your Connection"
        );
      }
      // Handle the error
    }
  };
  //insert end

  useEffect(() => {
    getDataCake();
  }, []);

  //search
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (event: { target: { value: SetStateAction<string>; }; }) => {
    setSearchTerm(event.target.value);
  };
  const handleClear = () => {
    setSearchTerm('');
  };

  // eslint-disable-next-line arrow-body-style
  const filteredData = data
    ? data.filter((items) => {
        return items.title
          ?.toString()
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      })
    : [];
  //search end

  // New state variables for modal
  const [selectedCake, setSelectedCake] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // open modal cake detail start
  const openModal = (id: any) => {
    const cake = data.find((item) => item.id === id);
    setSelectedCake(cake);
    setIsModalOpen(true);
  };
  // open modal cake detail end

  return (
    <div style={pageStyle}>
      <HeaderMenu />
      <Space h="xl" />
      <Title
        align="center"
        className={classes.title}
      >
        Cake List
      </Title>
      <Container size="xl" px="xl">
        
        <Group position="center">
        <Button
          className={classes.control}
          onClick={(e) => handleOpenAddModal(e)}>
          Add Cake
        </Button>
      </Group>

        <TextInput
          placeholder="search Cake"
          value={searchTerm}
          onChange={handleSearch}
          style={{ marginTop: "16px" }}
          rightSection={
            <CloseButton onClick={handleClear} />
          }
        />
        <Space h="xl" />

        {/* Card Start */}
        {filteredData && filteredData.length > 0 ? (
        <Grid>
          {filteredData.map((e) => (
            // eslint-disable-next-line react/jsx-key
            <Grid.Col xs={12} sm={6} lg={3}>
              <Card
                key={e.id}
                shadow="sm"
                padding="lg"
                radius="md"
                withBorder
                style={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Card.Section>
                  <Image
                    src={e.image}
                    height={160}
                    alt="Norway"
                  />
                </Card.Section>
                <Group position="right" mt="md" mb="xs">
                  <Badge color="pink" variant="light">
                    <Text weight={500}>Available</Text>
                  </Badge>
                </Group>
                <Group position="left" mt="md" mb="xs">
                  <Text style={hiddenTextStyle} weight={500}>
                    {e.id}
                  </Text>
                  <Text tt="uppercase" weight={500}>
                    {e.title}
                  </Text>
                </Group>
                <Group position="left" mt="md" mb="xs" align="center">
                  <Flex gap="xs">
                    <Image
                      src="/img/rating.ico"
                      alt="Icon"
                      width={25}
                      height={25}
                    />
                    <Text weight={400}>
                      Rating:{" "}
                      {e.rating}
                    </Text>
                  </Flex>
                </Group>

                <Group position="center" mt="md" mb="xs" align="center">
                  <Flex
                    mih={50}
                    gap="md"
                    justify="flex-start"
                    align="flex-start"
                    direction="row"
                    wrap="wrap"
                  >
                    <Button
                      className={classes.control}
                      mt="md"
                      radius="md"
                      onClick={() => openModal(e.id)}
                    >
                      Detail
                    </Button>

                    <Button
                        variant="light"
                        color="red"
                        mt="md"
                        radius="md"
                        onClick={() => openDeleteModal(e)}
                      >
                        Delete
                      </Button>

                  </Flex>
                </Group>
              </Card>
            </Grid.Col>
          ))}
        </Grid>
        ) : (
          <Card
          shadow="sm"
          padding="xl"
          >
      <Text align="center" color="pink.9" weight={500} size="lg" mt="md">
        No Cake Found!
      </Text>
    </Card>
          )}
        {/* Card End */}

        <Space h="xl" />
      </Container>
      <FooterMenu />

      {/* modal Detail Cake start */}
      <Modal
        opened={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Detail Cake"
        styles={{
          title: {
            fontSize: "18px",
            fontWeight: "bold",
            marginLeft: "8px",
          },
          body: {
            padding: 24,
          },
        }}
        >
        <Card
          key={selectedCake?.id}
          shadow="sm"
          padding="lg"
          radius="md"
          withBorder
          style={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
          >
          {/* Card content */}
          <Card.Section>
            <Image
              src={selectedCake?.image}
              height={160}
              alt="Norway"
              />
          </Card.Section>
          <Group position="right" mt="md" mb="xs">
            <Badge color="pink" variant="light">
              <Text weight={500}>Available</Text>
            </Badge>
          </Group>
          <Group position="left" mt="md" mb="xs">
            <Text style={hiddenTextStyle} weight={500}>
              {selectedCake?.id}
            </Text>
            <Text tt="uppercase" weight={500}>
              {selectedCake?.title}
            </Text>
            
          </Group>
          <Group position="left" mt="md" mb="xs" align="center">
            <Flex gap="xs">
            <Image
              src="/img/rating.ico"
              alt="Icon"
              width={25}
              height={25}
              />
            <Text weight={500}>
              Rating:{" "}
              {selectedCake?.rating}
            </Text>
            </Flex>
          </Group>
          <Text weight={500} className="bold">
            Description:{" "}
            {selectedCake?.description}
          </Text>
        </Card>
      </Modal>
      {/* modal Detail Cake end */}


      {/* modal add Cake start */}
      <Modal
        size="70%"
        opened={opened}
        onClose={close}
        title="Add Cake"
        centered>
        <Box my="lg" mx="auto" maw="70%">
          <form onSubmit={form.onSubmit((values) => console.log(values))}>
            <Grid>
              <Grid.Col span={5} mx="lg">
                <Space h="md" />
                <TextInput
                  withAsterisk
                  label="Cake Name"
                  placeholder="Cake Name"
                  {...form.getInputProps("title")}
                />
                <Space h="md" />
                <Textarea
                  withAsterisk
                  label="Cake Description"
                  placeholder="Cake Description"
                  {...form.getInputProps("description")}
                />

                <Space h="md" />
              </Grid.Col>
              <Grid.Col span={5} mx="lg">

                <Space h="md" />
                <TextInput
                  withAsterisk
                  label="Rating"
                  placeholder="Rating"
                  {...form.getInputProps("rating")}
                />
                <Space h="md" />
                <TextInput
                  withAsterisk
                  label="Link Image"
                  placeholder="Link Image"
                  {...form.getInputProps("image")}
                />
              </Grid.Col>
            </Grid>

            <Group position="right" mt="md">
              <Button className={classes.control} type="submit" onClick={handleInsert}>
                Add Cake
              </Button>
            </Group>
          </form>
        </Box>
      </Modal>
      {/* end modal add Cake */}
    </div>
  );
};
export default latihan;

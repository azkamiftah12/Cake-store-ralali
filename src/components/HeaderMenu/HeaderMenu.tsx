import {
  createStyles,
  Header,
  Group,
  Button,
  Box,
  rem,
  Menu,

} from "@mantine/core";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import {  IconNotebook } from "@tabler/icons-react";

// EDIT WARNA TEXT
const useStyles = createStyles((theme) => ({
  link: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    textDecoration: "none",
    color: "#C68B59",
    fontWeight: 500,
    fontSize: theme.fontSizes.sm,

    [theme.fn.smallerThan("sm")]: {
      // height: rem(40),
      // display: "flex",
      // flexDirection: "row",
      // alignItems: "center",
      // width: "100%",
    },

    //HOVER NAVBAR//
    ...theme.fn.hover({
      backgroundColor: "#C68B59",
      color: "#3F2661",
    }),
  },

  title: {
    color: "#E0DAD1",
    fontSize: "27px",
    fontWeight: 700,
  },

  subLink: {
    width: "100%",
    padding: `${theme.spacing.xs} ${theme.spacing.md}`,
    borderRadius: theme.radius.md,

    //HOVER DI FEATURES//
    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[7]
          : theme.colors.gray[0],
    }),

    "&:active": theme.activeStyles,
  },

  dropdownFooter: {
    backgroundColor: "#3F2661",
    margin: `calc(${theme.spacing.md} * -1)`,
    marginTop: theme.spacing.sm,
    padding: `${theme.spacing.md} calc(${theme.spacing.md} * 2)`,
    paddingBottom: theme.spacing.xl,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1]
    }`,
  },

  hiddenMobile: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },
  showMobile: {
    [theme.fn.smallerThan("sm")]: {
      display: "flex",
      flexDirection: "row",
      fontSize: "14px", // Set the desired font size
      margin: 0, // Remove margin
      padding: 0, // Remove padding
      
    },
  },

  hiddenDesktop: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },
}));

//ICON DI FEATURES//

export default function HeaderMenu() {

  const { classes } = useStyles();

  {
    /* EDIT ICON */
  }

  // NAVBAR //
  return (
    <Box>
      <Header
        height={65}
        px="md"
        style={{ backgroundColor: "#402218", border: "none" }}
      >
        <Group position="apart" sx={{ height: "100%" }}>
          <Group sx={{ height: "100%" }} className={classes.showMobile}>
            <Link href="/" className={classes.link}>
              Home
            </Link>
            <Menu shadow="md" width={200}>
      <Menu.Target>
        <Button sx={{backgroundColor: "#402218"}} radius="xs" className={classes.link}>Cake</Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Menu</Menu.Label>
        <Menu.Item component={Link} href="/cake" className={classes.link} icon={<IconNotebook size={14} />}>
              Cake
            </Menu.Item>
      </Menu.Dropdown>
      </Menu>
          </Group>
        </Group>
      </Header>
    </Box>
  );
}

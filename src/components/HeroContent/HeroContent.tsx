import {
  createStyles,
  Overlay,
  Container,
  Title,
  Button,
  Text,
  rem,
} from "@mantine/core";
import Link from "next/link";

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

export default function HeroContent() {
  const { classes } = useStyles();

  return (
    <div className={classes.hero}>
      <Overlay
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
        opacity={1}
        zIndex={0}
      />
      <Container className={classes.container}>
        <Title className={classes.title}>Azka Cake Store</Title>
        <Text className={classes.description} size="xl" mt="xl">
          Azka Cake Store sell the most finest cake in town
        </Text>
        <Button
          component={Link}
          href="/cake"
          size="xl"
          radius="xl"
          className={classes.control}
        >
          Browse Cake Now
        </Button>
      </Container>
    </div>
  );
}

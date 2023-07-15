import { createStyles, Container, Group, ActionIcon, rem, Text } from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react';

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: rem(120),
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,

    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column',
    },
  },

  links: {
    [theme.fn.smallerThan('xs')]: {
      marginTop: theme.spacing.md,
    },
  },

  linkIcon: {
    '&:hover': {
      color: '#3F2661',
      backgroundColor: '#C68B59',
    },
  },
}));

export default function FooterMenu() {
  const { classes } = useStyles();

  return (
    <div className={classes.footer} style={{ backgroundColor: '#402218', margin: 0, border: 'none' }}>
    <Container className={classes.inner}>
        {/* <MantineLogo size={28} /> */}
        <Text color="#C68B59" size="sm">
        © 2023 Azka Miftah Muhammad.
        </Text>
        <Group spacing={0} className={classes.links} position="right" noWrap>
        <ActionIcon size="lg" className={classes.linkIcon}>
            <IconBrandTwitter size="1.3rem" stroke={1.2} />
        </ActionIcon>
        <ActionIcon size="lg" className={classes.linkIcon}>
            <IconBrandYoutube size="1.3rem" stroke={1.2} />
        </ActionIcon>
        <ActionIcon size="lg" className={classes.linkIcon}>
            <IconBrandInstagram size="1.3rem" stroke={1.2} />
        </ActionIcon>
        </Group>
    </Container>
    </div>

  );
}

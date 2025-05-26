'use client';

import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Toolbar,
} from '@mui/material';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import { styled } from '@mui/material/styles';
import { useSession } from 'next-auth/react';

import useGetAccount from '@/containers/Account/hooks/useGetAccount';
import useGetPlanList from '@/containers/Plan/hooks/useGetPlanList';

import Footer from '@/components/Footer';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { ReactNode } from 'react';

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.divider}`,
  // '&:not(:last-child)': {
  //   borderBottom: 0,
  // },
  '&::before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    // expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  // backgroundColor: 'rgba(0, 0, 0, .03)',
  // borderBottom: '1px solid rgba(0, 0, 0, .125)',
  // flexDirection: 'row-reverse',
  // [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]:
  //   {
  //     transform: 'rotate(90deg)',
  //   },
  // [`& .${accordionSummaryClasses.content}`]: {
  //   marginLeft: theme.spacing(1),
  // },
  ...theme.applyStyles('dark', {
    backgroundColor: 'rgba(255, 255, 255, .05)',
  }),
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  paddingTop: 0,
  color: theme.palette.text.secondary,
  // borderBottom: '1px solid rgba(0, 0, 0, .125)',
}));

const Check = () => (
  <CheckIcon color="primary" sx={{ width: 24, height: 24 }} />
);
const Cross = () => <ClearIcon color="error" sx={{ width: 24, height: 24 }} />;

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '& td, & th': {
    borderBottom: 0,
  },
  '&.row:nth-of-type(even) td, &.row:nth-of-type(even) th': {
    backgroundColor: theme.palette.background.paper,
  },
  '&.row:nth-of-type(odd) td, &.row:nth-of-type(odd) th': {
    backgroundColor:
      theme.palette.mode === 'dark'
        ? theme.palette.grey[900]
        : theme.palette.grey[50],
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const StickyTableCell = styled(TableCell)(({ theme }) => ({
  position: 'sticky',
  left: 0,
  zIndex: 999,
  width: '50%',
  [theme.breakpoints.up('sm')]: {
    width: '31%',
  },
  minWidth: 160,
  // borderRight: `1px solid ${theme.palette.divider}`,
}));

function createData(
  name: string,
  lite: ReactNode,
  standard: ReactNode,
  premium: ReactNode,
) {
  return { name, lite, standard, premium };
}

const rows = [
  createData('Dashboard', <Cross />, 6.0, <Check />),
  createData('Point of Sales', <Cross />, 9.0, <Check />),
  createData('Categories', <Cross />, 16.0, <Check />),
  createData('Products and Services', <Cross />, 12, <Check />),
  createData('Modifiers', <Cross />, 16.0, <Check />),
  createData('Sales', <Cross />, 3.7, <Check />),
  createData('Refunds', <Cross />, 3.7, <Check />),
  createData('Discounts', <Cross />, 16.0, <Check />),
  createData('Taxes', <Cross />, 16.0, <Check />),
  createData('Area/Unit Management', <Cross />, 16.0, <Check />),
  createData('Store Session', <Cross />, 16.0, <Check />),
  createData('Events', <Cross />, 16.0, <Check />),
  createData('Reports', <Cross />, 16.0, <Check />),
  createData('Import/Export', <Cross />, 16.0, <Check />),
  createData('Roles and Permissions', <Cross />, 16.0, <Check />),
  createData('Payment Methods', <Cross />, 16.0, <Check />),
  createData('Staff Management', <Cross />, 16.0, <Check />),
  createData('Customer Management', <Cross />, 16.0, <Check />),
  createData('SMS Notification', <Cross />, 16.0, <Check />),
  createData('Email Notification', <Cross />, 16.0, <Check />),
  createData('Service Mode', <Cross />, 16.0, <Check />),
];

export default function Page() {
  const { data: session } = useSession();
  const { data: response } = useGetPlanList();
  const { data: responseAccount } = useGetAccount({
    enabled: Boolean(session),
  });

  // console.log(responseAccount);
  // const plans = response?.data ?? [];

  return (
    <>
      <Box
        component="section"
        sx={(theme) => ({
          bgcolor:
            theme.palette.mode === 'dark'
              ? theme.palette.grey[900]
              : theme.palette.grey[50],
          py: theme.spacing(10),
        })}
      >
        <Toolbar />
        <Container maxWidth="md">
          <Box mb={8}>
            <Typography
              textAlign="center"
              component="h2"
              variant="h4"
              gutterBottom
              fontWeight={500}
            >
              Pricing
            </Typography>

            <Typography
              textAlign="center"
              gutterBottom
              color="textSecondary"
              fontWeight={400}
            >
              Flexible Plans for Every Stage of Your Business. From startups to
              growing enterprises — choose the plan that fits your workflow and
              budget.
            </Typography>
          </Box>
        </Container>
      </Box>

      <Box component="section" sx={(theme) => ({ py: theme.spacing(10) })}>
        <Container maxWidth="lg">
          <TableContainer>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <StyledTableRow>
                  <StickyTableCell />
                  <TableCell align="center">
                    <Typography variant="h6" fontWeight={700}>
                      Lite
                    </Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography variant="h6" fontWeight={700}>
                      Standard
                    </Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography variant="h6" fontWeight={700}>
                      Premium
                    </Typography>
                  </TableCell>
                </StyledTableRow>
              </TableHead>
              <TableBody>
                <StyledTableRow>
                  <StickyTableCell />
                  <TableCell align="center">
                    <Typography
                      variant="h3"
                      fontWeight={700}
                      sx={{ verticalAlign: 'bottom' }}
                    >
                      <Typography
                        variant="h6"
                        sx={{ verticalAlign: 'top' }}
                        component="span"
                        fontWeight={700}
                      >
                        PHP
                      </Typography>
                      499
                    </Typography>

                    <Typography>
                      plus{' '}
                      <Typography component="span" fontWeight="bold">
                        3%
                      </Typography>{' '}
                      when hit PHP30,000 monthly sales
                    </Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography
                      variant="h3"
                      fontWeight={700}
                      sx={{ verticalAlign: 'bottom' }}
                    >
                      <Typography
                        variant="h6"
                        sx={{ verticalAlign: 'top' }}
                        component="span"
                        fontWeight={700}
                      >
                        PHP
                      </Typography>
                      999
                    </Typography>
                    <Typography>
                      plus{' '}
                      <Typography component="span" fontWeight="bold">
                        3%
                      </Typography>{' '}
                      when hit PHP40,000 monthly sales
                    </Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography
                      variant="h3"
                      fontWeight={700}
                      sx={{ verticalAlign: 'bottom' }}
                    >
                      3.5%
                    </Typography>
                    <Typography>of monthly sales per month</Typography>
                  </TableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StickyTableCell />
                  <TableCell
                    sx={{ verticalAlign: 'top', minWidth: 240, width: '23%' }}
                  >
                    <Typography>
                      Great for stores that need basic order management without
                      complicated setups. Best if you have low transaction
                      volume and don’t require cash sessions, refunds, or
                      reports.
                    </Typography>
                  </TableCell>
                  <TableCell
                    sx={{ verticalAlign: 'top', minWidth: 240, width: '23%' }}
                  >
                    <Typography>
                      Full POS features, sales tracking, staff management,
                      sessions, discounts, and reports. Ideal if you want to
                      manage daily operations efficiently and scale over time.
                      Hybrid pricing helps you pay based on your success!
                    </Typography>
                  </TableCell>
                  <TableCell
                    sx={{ verticalAlign: 'top', minWidth: 240, width: '23%' }}
                  >
                    <Typography>
                      All-in-one POS for serious businesses. Multi-store
                      management, advanced discounts, detailed reporting,
                      printer integrations, and everything you need to run and
                      grow multiple locations. Best for expanding businesses
                      looking for the ultimate control and insight.
                    </Typography>
                  </TableCell>
                </StyledTableRow>
                {rows.map((row) => (
                  <StyledTableRow className="row" key={row.name}>
                    <StickyTableCell>{row.name}</StickyTableCell>
                    <TableCell
                      sx={{ minWidth: 240, width: '23%' }}
                      align="center"
                    >
                      {row.lite}
                    </TableCell>
                    <TableCell
                      sx={{ minWidth: 240, width: '23%' }}
                      align="center"
                    >
                      {row.standard}
                    </TableCell>
                    <TableCell
                      sx={{ minWidth: 240, width: '23%' }}
                      align="center"
                    >
                      {row.premium}
                    </TableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </Box>

      {/* <Container maxWidth="lg">
          <Grid container direction="row" spacing={2}>
            {plans.map((plan) => (
              <Grid key={plan.id} size={{ xs: 12, sm: 6, md: 4 }}>
                <PlanItem plan={plan} />
              </Grid>
            ))}
          </Grid>
        </Container> */}

      <Box component="section" sx={(theme) => ({ py: theme.spacing(10) })}>
        <Container disableGutters maxWidth="lg">
          <Box px={2} mb={8}>
            <Typography
              textAlign="center"
              component="h2"
              variant="h4"
              gutterBottom
              fontWeight={500}
            >
              FAQs
            </Typography>

            <Typography
              textAlign="center"
              gutterBottom
              color="textSecondary"
              fontWeight={400}
            >
              Lorem ipsum is simply dummy text of the printing and typesetting.
              Lorem Ipsum has been the industry’s standard dummy..
            </Typography>
          </Box>

          <Accordion defaultExpanded>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography variant="h6" fontWeight={600} component="span">
                Can I upgrade anytime?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography variant="h6" fontWeight={600} component="span">
                Is there a trial period?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3-content"
              id="panel3-header"
            >
              <Typography variant="h6" fontWeight={600} component="span">
                Are there hidden fees?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4-content"
              id="panel4-header"
            >
              <Typography variant="h6" fontWeight={600} component="span">
                Do I need a credit card to start?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </AccordionDetails>
          </Accordion>
        </Container>
      </Box>

      <Box
        component="section"
        sx={(theme) => ({
          bgcolor:
            theme.palette.mode === 'dark'
              ? theme.palette.grey[900]
              : theme.palette.grey[50],
          py: theme.spacing(10),
        })}
      >
        <Container disableGutters maxWidth="md">
          <Box px={2} mb={8}>
            <Typography
              textAlign="center"
              component="h2"
              variant="h4"
              gutterBottom
              fontWeight={500}
            >
              Still Have Questions? / Contact Us
            </Typography>
          </Box>

          <Box
            sx={{
              borderWidth: 1,
              borderStyle: 'solid',
              borderColor: '#ccc',
              borderRadius: 8,
              height: 460,
              width: '100%',
            }}
          />
        </Container>
      </Box>

      <Divider />

      <Footer />
    </>
  );
}

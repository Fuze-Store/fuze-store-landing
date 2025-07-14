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
import React, { ReactNode, useCallback } from 'react';

import useGetAccount from '@/containers/Account/hooks/useGetAccount';
import useGetPlanList from '@/containers/Plan/hooks/useGetPlanList';
import useSession from '@/hooks/useSession';

import type { Plan, PlanFeatureValue } from '@/types/plan';

import MetaHeader from '@/components/MetaHeader';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.divider}`,
  '&::before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary {...props} />
))(({ theme }) => ({
  ...theme.applyStyles('dark', {
    backgroundColor: 'rgba(255, 255, 255, .05)',
  }),
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  paddingTop: 0,
  color: theme.palette.text.secondary,
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

// TODO: Implement feature labels
const featureLabels: Record<string, string> = {
  dashboard: 'Dashboard',
  pos: 'Point of Sales',
  event_basic: 'Appointments',
  event_advanced: 'Reservations',
  area: 'Area Management',
  unit: 'Table/Room Management',
  transactions: 'Sale Transactions',
  refunds: 'Refunds',
  catalogs: 'Catalog Management',
  staffs: 'Staffs',
  customers: 'Customers',
  roles_and_permissions: 'Roles and Permissions',
  import_data: 'Import Data',
  export_data: 'Export Data',
  taxes: 'Taxes',
  gift_cards: 'Gift Cards',
  reports_basic: 'Basic Reports',
  reports_advanced: 'Advanced Reports',
  discounts_basic: 'Basic Discounts',
  discounts_advanced: 'Advanced Discounts',
  store_session: 'Store Session',
  email_notifications: 'Email Notifications',
  sms_notifications: 'SMS Notifications',
  printer: 'Printer Integration',
  ai_agent: 'AI Assistant',
  store_limit: 'Store Limit',
};

export default function Page() {
  const { data: session } = useSession();
  const { data: plansResponse } = useGetPlanList();
  useGetAccount({ enabled: Boolean(session) });

  const featureKeys = Object.keys(featureLabels);

  const plans: Plan[] = plansResponse?.data || [];

  const getValue = useCallback((value: PlanFeatureValue, feature: string) => {
    if (feature === 'store_limit' && value === true) {
      return <Typography>Unlimited</Typography>;
    } else if (feature === 'staffs' && value === true) {
      return <Typography>Unlimited</Typography>;
    } else if (feature === 'unit' && value === true) {
      return <Typography>Unlimited</Typography>;
    } else if (feature === 'area' && value === true) {
      return <Typography>Unlimited</Typography>;
    }

    if (typeof value === 'boolean') {
      return value ? <Check /> : <Cross />;
    } else if (typeof value === 'number') {
      return value > 0 ? <Typography>{value}</Typography> : <Cross />;
    } else if (typeof value === 'string') {
      return <Typography>{value}</Typography>;
    }
    return <Cross />;
  }, []);

  return (
    <>
      <MetaHeader
        title="Pricing"
        description="Explore our POS plans tailored for every business size."
      />

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
        <Container maxWidth="xl">
          <TableContainer>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <StyledTableRow>
                  <StickyTableCell />
                  {plans.map((plan, index) => (
                    <React.Fragment key={index}>
                      <TableCell align="center">
                        <Typography variant="h6" fontWeight={700}>
                          {plan.name}
                        </Typography>
                      </TableCell>
                    </React.Fragment>
                  ))}
                </StyledTableRow>
              </TableHead>
              <TableBody>
                <StyledTableRow>
                  <StickyTableCell />
                  {plans.map((plan, index) => {
                    let text = `${plan.currency} ${Intl.NumberFormat(
                      undefined,
                      { style: 'decimal' },
                    ).format(plan.baseFee)}`;
                    let message: ReactNode = '';

                    if (plan.baseFee === 0 && plan.commissionRate === 0) {
                      text = 'Free';
                      message = 'No monthly fee';
                    }

                    if (plan.baseFee > 0 && plan.commissionRate > 0) {
                      message = `plus ${(plan.commissionRate * 100).toFixed(
                        1,
                      )}% when you hit ${plan.currency} ${Intl.NumberFormat(
                        undefined,
                        { style: 'decimal' },
                      ).format(plan.salesThreshold)} monthly sales`;
                    } else if (plan.commissionRate > 0) {
                      text = `${(plan.commissionRate * 100).toFixed(1)}%`;
                      message = `on monthly sales`;
                    }

                    return (
                      <TableCell
                        align="center"
                        sx={{ verticalAlign: 'top' }}
                        key={index}
                      >
                        <Typography
                          variant="h3"
                          fontWeight={700}
                          sx={{ verticalAlign: 'bottom' }}
                        >
                          {text}
                        </Typography>

                        <Typography>{message}</Typography>
                      </TableCell>
                    );
                  })}
                </StyledTableRow>
                <StyledTableRow>
                  <StickyTableCell />

                  <TableCell
                    sx={{ verticalAlign: 'top', minWidth: 240, width: '23%' }}
                  >
                    <Typography fontWeight={700}>
                      Test the waters—risk-free!
                    </Typography>
                    <Typography>{plans[0]?.description}</Typography>
                  </TableCell>
                  <TableCell
                    sx={{ verticalAlign: 'top', minWidth: 240, width: '23%' }}
                  >
                    <Typography fontWeight={700}>
                      Sell smart without the stress.
                    </Typography>
                    <Typography>{plans[1]?.description}</Typography>
                  </TableCell>
                  <TableCell
                    sx={{ verticalAlign: 'top', minWidth: 240, width: '23%' }}
                  >
                    <Typography fontWeight={700}>
                      Grow fast, stay in control.
                    </Typography>
                    <Typography>{plans[2]?.description}</Typography>
                  </TableCell>
                  <TableCell
                    sx={{ verticalAlign: 'top', minWidth: 240, width: '23%' }}
                  >
                    <Typography fontWeight={700}>
                      Unlock everything. Win everywhere.
                    </Typography>
                    <Typography>{plans[3]?.description}</Typography>
                  </TableCell>
                </StyledTableRow>

                {featureKeys.map((featureKey, index) => (
                  <StyledTableRow className="row" key={index}>
                    <StickyTableCell>
                      <Typography variant="body2">
                        {featureLabels[featureKey]}
                      </Typography>
                    </StickyTableCell>
                    {plans.map((plan, planIndex) => (
                      <TableCell
                        key={planIndex}
                        sx={{ minWidth: 240, width: '23%' }}
                        align="center"
                      >
                        {getValue(
                          plan.features[featureKey] as PlanFeatureValue,
                          featureKey,
                        )}
                      </TableCell>
                    ))}
                  </StyledTableRow>
                ))}

                {/* {rows.map((row, index) => (
                  <StyledTableRow className="row" key={index}>
                    <StickyTableCell>{row.name}</StickyTableCell>
                    <TableCell
                      sx={{ minWidth: 240, width: '23%' }}
                      align="center"
                    ></TableCell>
                    <TableCell
                      sx={{ minWidth: 240, width: '23%' }}
                      align="center"
                    ></TableCell>
                    <TableCell
                      sx={{ minWidth: 240, width: '23%' }}
                      align="center"
                    ></TableCell>
                    <TableCell
                      sx={{ minWidth: 240, width: '23%' }}
                      align="center"
                    ></TableCell>
                    <TableCell
                      sx={{ minWidth: 240, width: '23%' }}
                      align="center"
                    ></TableCell>
                  </StyledTableRow>
                ))} */}
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
    </>
  );
}

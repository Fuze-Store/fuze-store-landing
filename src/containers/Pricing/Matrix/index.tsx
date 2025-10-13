'use client';

import CheckIcon from '@mui/icons-material/Check';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  useMediaQuery,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import React, { memo } from 'react';

import { featureLabels, getFeatureValue } from '@fuze-store/fuze-store-shared';

import type { Plan, PlanFeatureValue } from '@fuze-store/fuze-store-shared';

const Check = () => (
  <CheckIcon color="primary" sx={{ width: 24, height: 24 }} />
);

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '& td, & th': {
    borderBottom: 0,
  },
  '&.row:nth-of-type(even) td, &.row:nth-of-type(even) th': {
    backgroundColor: theme.palette.background.paper,
  },
  '&.row:nth-of-type(odd) td, &.row:nth-of-type(odd) th, &.row.bg td': {
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
  minWidth: 200,
  // borderRight: `1px solid ${theme.palette.divider}`,
}));

type Props = {
  plans: Plan[];
};

const Matrix = ({ plans }: Props) => {
  const isSmUp = useMediaQuery((theme) => theme.breakpoints.up('sm'));

  const featureKeys = Object.keys(featureLabels);

  return (
    <TableContainer>
      <Table aria-label="simple table">
        <TableHead>
          <StyledTableRow>
            {isSmUp && <TableCell />}
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
          {featureKeys.map((featureKey, index) => (
            <React.Fragment key={index}>
              {!isSmUp && (
                <StyledTableRow className="row">
                  <TableCell colSpan={plans.length}>
                    <Typography fontWeight="bold" variant="subtitle1">
                      {featureLabels[featureKey]}
                    </Typography>
                  </TableCell>
                </StyledTableRow>
              )}
              <StyledTableRow className="row">
                {isSmUp && (
                  <StickyTableCell>
                    <Typography fontWeight="bold" variant="body2">
                      {featureLabels[featureKey]}
                    </Typography>
                  </StickyTableCell>
                )}
                {plans.map((plan, planIndex) => {
                  const feature = getFeatureValue(
                    plan.features[featureKey] as PlanFeatureValue,
                    featureKey,
                  );

                  return (
                    <TableCell
                      key={planIndex}
                      sx={{ minWidth: 120 }}
                      align="center"
                    >
                      {feature === 'Included' ? (
                        <Check />
                      ) : (
                        <Typography variant="body2">{feature}</Typography>
                      )}
                    </TableCell>
                  );
                })}
              </StyledTableRow>
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default memo(Matrix);

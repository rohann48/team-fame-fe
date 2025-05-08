import React, { useState, useEffect } from "react";
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  Stack,
} from "@mui/material";
import "../SCSS/styles.scss";
import { ApiHandler } from "../../../Constants/ApiHandler";

const InvestmentModal = ({ open, onClose }: any) => {
  const [formData, setFormData] = useState({
    mobileNumber: "",
    investmentAmount: "",
    startDate: "",
    endDate: "",
    period: "",
  });

  const [errors, setErrors] = useState({
    mobileNumber: false,
    investmentAmount: false,
    startDate: false,
    endDate: false,
    period: false,
  });

  // Calculate period (in months) when start or end date changes
  useEffect(() => {
    if (formData.startDate && formData.endDate) {
      const start = new Date(formData.startDate);
      const end = new Date(formData.endDate);

      // Calculate difference in months
      const diffYears = end.getFullYear() - start.getFullYear();
      const diffMonths = end.getMonth() - start.getMonth();
      const totalMonths = diffYears * 12 + diffMonths;

      // Set the period (ensure it's a positive number)
      if (totalMonths >= 0) {
        setFormData((prev) => ({ ...prev, period: totalMonths.toString() }));
      }
    }
  }, [formData.startDate, formData.endDate]);

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: false }));
  };

  const validateFields = () => {
    // Check if mobile number is valid (10 digits for Indian numbers)
    const isValidMobileNumber = /^[6-9]\d{9}$/.test(
      formData.mobileNumber.trim()
    );

    const newErrors = {
      mobileNumber: isValidMobileNumber,
      investmentAmount: formData.investmentAmount.trim() === "",
      startDate: formData.startDate.trim() === "",
      endDate: formData.endDate.trim() === "",
      period: formData.period.trim() === "" || parseInt(formData.period) === 0,
    };

    setErrors(newErrors);
    return !Object.values(newErrors).some((err) => err);
  };

  const handleSubmit = async () => {
    if (validateFields()) {
      const investmentData = {
        mobileNumber: formData.mobileNumber,
        investmentAmount: formData.investmentAmount,
        startDate: formData.startDate,
        endDate: formData.endDate,
        period: formData.period,
      };

      await ApiHandler.addInvestmentManually(investmentData);
      onClose();
    }
  };

  // Get current date for min date value
  const today = new Date().toISOString().split("T")[0];

  // Calculate max date dynamically (e.g., 5 years from now)
  const maxDate = new Date();
  maxDate.setFullYear(maxDate.getFullYear() + 5);
  const maxDateStr = maxDate.toISOString().split("T")[0];

  return (
    <Modal open={open} onClose={onClose}>
      <Box className="investment-modal">
        <Typography variant="h6" gutterBottom>
          Investment Details
        </Typography>
        <Stack spacing={2}>
          <TextField
            type="number"
            label="Mobile Number"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
            fullWidth
            error={errors.mobileNumber}
            helperText={
              errors.mobileNumber
                ? "Enter a valid 10-digit Indian mobile number"
                : ""
            }
          />
          <TextField
            type="number"
            label="Investment Amount"
            name="investmentAmount"
            value={formData.investmentAmount}
            onChange={handleChange}
            fullWidth
            error={errors.investmentAmount}
            helperText={errors.investmentAmount ? "Amount is required" : ""}
          />
          <TextField
            label="Start Date"
            name="startDate"
            type="date"
            value={formData.startDate}
            onChange={handleChange}
            fullWidth
            InputLabelProps={{ shrink: true }}
            inputProps={{ min: today, max: maxDateStr }}
            error={errors.startDate}
            helperText={errors.startDate ? "Start date is required" : ""}
          />
          <TextField
            label="End Date"
            name="endDate"
            type="date"
            value={formData.endDate}
            onChange={handleChange}
            fullWidth
            InputLabelProps={{ shrink: true }}
            inputProps={{
              min: formData.startDate || today,
              max: maxDateStr,
            }}
            error={errors.endDate}
            helperText={errors.endDate ? "End date is required" : ""}
          />
          <TextField
            label="Period (months)"
            name="period"
            type="number"
            value={formData.period}
            onChange={handleChange}
            fullWidth
            inputProps={{ min: 1, max: 60 }}
            error={errors.period}
            helperText={
              errors.period
                ? "Period is required and must be greater than 0"
                : formData.startDate && formData.endDate
                ? "Auto-calculated from dates"
                : ""
            }
            disabled={!!(formData.startDate && formData.endDate)}
          />
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
};

export default InvestmentModal;

import React, { useState, useEffect } from "react";
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  Stack,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  FormControl,
} from "@mui/material";
import "../SCSS/styles.scss";
import { ApiHandler } from "../../../Constants/ApiHandler";
import { NotificationManager } from "react-notifications";
import { Notify } from "../../../../Common/Notify/NotificationMessages";

const InvestmentModal = ({ open, onClose }: any) => {
  const [formData, setFormData] = useState({
    mobileNumber: "",
    investmentAmount: "",
    startDate: "",
    endDate: "",
    period: "",
    schemeType: "NonRefundable",
  });

  const [errors, setErrors] = useState({
    mobileNumber: "",
    investmentAmount: "",
    startDate: "",
    endDate: "",
    period: "",
  });

  useEffect(() => {
    if (formData.startDate && formData.endDate) {
      const start = new Date(formData.startDate);
      const end = new Date(formData.endDate);
      const diffYears = end.getFullYear() - start.getFullYear();
      const diffMonths = end.getMonth() - start.getMonth();
      const totalMonths = diffYears * 12 + diffMonths;

      if (totalMonths >= 0) {
        setFormData((prev) => ({
          ...prev,
          period: totalMonths.toString(),
        }));
        setErrors((prev) => ({
          ...prev,
          period: "",
        }));
      }
    }
  }, [formData.startDate, formData.endDate]);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateFields = () => {
    const newErrors: any = {};

    // if (!/^[6-9]\d{9}$/.test(formData.mobileNumber.trim())) {
    //   newErrors.mobileNumber = "Enter a valid 10-digit Indian mobile number";
    // }
    if (!formData.investmentAmount.trim()) {
      newErrors.investmentAmount = "Investment amount is required";
    }
    if (!formData.startDate.trim()) {
      newErrors.startDate = "Start date is required";
    }
    if (formData.schemeType === "NonRefundable" && !formData.endDate.trim()) {
      newErrors.endDate = "End date is required";
    }
    if (
      formData.schemeType === "NonRefundable" &&
      (!formData.period.trim() || parseInt(formData.period) <= 0)
    ) {
      newErrors.period = "Period must be greater than 0";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateFields()) return;

    const investmentData = {
      mobileNumber: formData.mobileNumber,
      investmentAmount: formData.investmentAmount,
      startDate: formData.startDate,
      endDate: formData.endDate,
      period: formData.period,
      schemeType: formData.schemeType,
    };

    try {
      await ApiHandler.addInvestmentManually(investmentData);
      NotificationManager.success(Notify.ADD, "", 2000);

      onClose();
    } catch (error) {
      console.error("Error while submitting investment:", error);
      alert("Failed to submit investment. Please try again."); // Replace with toast if needed
    }
  };

  const today = new Date().toISOString().split("T")[0];
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
            error={!!errors.mobileNumber}
            helperText={errors.mobileNumber}
          />

          <TextField
            type="number"
            label="Investment Amount"
            name="investmentAmount"
            value={formData.investmentAmount}
            onChange={handleChange}
            fullWidth
            error={!!errors.investmentAmount}
            helperText={errors.investmentAmount}
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
            error={!!errors.startDate}
            helperText={errors.startDate}
          />

          {formData.schemeType === "NonRefundable" && (
            <>
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
                error={!!errors.endDate}
                helperText={errors.endDate}
              />

              <TextField
                label="Period (months)"
                name="period"
                type="number"
                value={formData.period}
                onChange={handleChange}
                fullWidth
                inputProps={{ min: 1, max: 60 }}
                error={!!errors.period}
                helperText={
                  errors.period ||
                  (formData.startDate && formData.endDate
                    ? "Auto-calculated from dates"
                    : "Enter manually or auto-calculate by selecting dates")
                }
                disabled={!!(formData.startDate && formData.endDate)}
              />
            </>
          )}

          <FormControl>
            <FormLabel>Scheme Type</FormLabel>
            <RadioGroup
              row
              name="schemeType"
              value={formData.schemeType}
              onChange={handleChange}
            >
              <FormControlLabel value="FD" control={<Radio />} label="FD" />
              <FormControlLabel
                value="NonRefundable"
                control={<Radio />}
                label="Non-Refundable"
              />
            </RadioGroup>
          </FormControl>

          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
};

export default InvestmentModal;
